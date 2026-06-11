import { describe, it, expect } from 'vitest';
import { filterTerms, getMatchRanges } from './search';
import type { GlossaryTerm } from '../types';

const terms: GlossaryTerm[] = [
  {
    id: 'deductible',
    name: 'Deductible',
    category: 'claims',
    definition: 'The amount paid before the insurer pays. A deductible lowers premium.',
    shortDefinition: 'What you pay before the insurer pays.',
    relatedIds: [],
  },
  {
    id: 'premium',
    name: 'Premium',
    category: 'general',
    definition: 'The amount a policyholder pays for coverage.',
    shortDefinition: 'What you pay for coverage.',
    relatedIds: [],
  },
  {
    id: 'copay',
    name: 'Copay',
    category: 'claims',
    definition: 'A fixed fee per visit; the deductible is separate.',
    shortDefinition: 'A fixed fee per visit.',
    relatedIds: [],
  },
  {
    id: 'sub-limit',
    name: 'Sub-limit',
    category: 'coverage',
    definition: 'A cap within the sum insured (e.g. room rent).',
    shortDefinition: 'A cap on one part of the cover.',
    relatedIds: [],
  },
];

describe('getMatchRanges', () => {
  it('returns [] for an empty or whitespace query', () => {
    expect(getMatchRanges('Premium', '')).toEqual([]);
    expect(getMatchRanges('Premium', '   ')).toEqual([]);
  });

  it('is case-insensitive', () => {
    expect(getMatchRanges('Premium', 'prem')).toEqual([{ start: 0, end: 4 }]);
    expect(getMatchRanges('premium', 'PREM')).toEqual([{ start: 0, end: 4 }]);
  });

  it('finds every non-overlapping occurrence', () => {
    expect(getMatchRanges('abab', 'ab')).toEqual([
      { start: 0, end: 2 },
      { start: 2, end: 4 },
    ]);
  });

  it('does not produce overlapping ranges for repeated characters', () => {
    expect(getMatchRanges('aaa', 'aa')).toEqual([{ start: 0, end: 2 }]);
  });

  it('matches special characters literally (no regex)', () => {
    expect(getMatchRanges('room rent (e.g.)', '(e.g.)')).toEqual([
      { start: 10, end: 16 },
    ]);
    expect(getMatchRanges('sub-limit', '-li')).toEqual([{ start: 3, end: 6 }]);
  });

  it('matches diacritic-insensitively, ranges indexing the original text', () => {
    // "phi" should match "Phí" (Vietnamese), highlighting the original chars.
    expect(getMatchRanges('Phí bảo hiểm', 'phi')).toEqual([
      { start: 0, end: 3 },
    ]);
    // An accented query matches an accented target.
    expect(getMatchRanges('Phí bảo hiểm', 'BẢO')).toEqual([
      { start: 4, end: 7 },
    ]);
    // "dao" matches "đáo" (đ → d).
    expect(getMatchRanges('Đáo hạn', 'dao')).toEqual([{ start: 0, end: 3 }]);
  });
});

describe('filterTerms', () => {
  it('returns all terms alphabetically for an empty query', () => {
    const result = filterTerms(terms, '');
    expect(result.map((r) => r.term.name)).toEqual([
      'Copay',
      'Deductible',
      'Premium',
      'Sub-limit',
    ]);
    expect(result.every((r) => r.score === 0)).toBe(true);
  });

  it('filters to terms matching name or definition', () => {
    const result = filterTerms(terms, 'deductible');
    const ids = result.map((r) => r.term.id);
    // "Deductible" (name) + "copay" (definition mentions deductible)
    expect(ids).toContain('deductible');
    expect(ids).toContain('copay');
    expect(ids).not.toContain('premium');
  });

  it('ranks a name match above a definition-only match', () => {
    const result = filterTerms(terms, 'deductible');
    expect(result[0].term.id).toBe('deductible'); // name match first
    expect(result[result.length - 1].term.id).toBe('copay'); // def-only last
    expect(result[0].score).toBeGreaterThan(result[result.length - 1].score);
  });

  it('ranks a name-prefix match above a name-mid match', () => {
    const local: GlossaryTerm[] = [
      { id: 'a', name: 'Coinsurance', category: 'claims', definition: 'x', shortDefinition: 'x', relatedIds: [] },
      { id: 'b', name: 'Insurance', category: 'general', definition: 'y', shortDefinition: 'y', relatedIds: [] },
    ];
    const result = filterTerms(local, 'insur');
    expect(result[0].term.id).toBe('b'); // prefix match wins
    expect(result[0].score).toBeGreaterThan(result[1].score);
  });

  it('breaks score ties alphabetically by name', () => {
    const local: GlossaryTerm[] = [
      { id: 'z', name: 'Zeta cover', category: 'coverage', definition: 'x', shortDefinition: 'x', relatedIds: [] },
      { id: 'a', name: 'Alpha cover', category: 'coverage', definition: 'y', shortDefinition: 'y', relatedIds: [] },
    ];
    const result = filterTerms(local, 'cover');
    expect(result.map((r) => r.term.id)).toEqual(['a', 'z']);
  });

  it('is case-insensitive when filtering', () => {
    // "premium" matches the Premium term's name and also appears in
    // Deductible's definition ("lowers premium") — the name match ranks first.
    const result = filterTerms(terms, 'PREMIUM');
    expect(result[0].term.id).toBe('premium');
    expect(result.map((r) => r.term.id)).toContain('deductible');
  });

  it('returns highlight ranges for both name and definition', () => {
    const result = filterTerms(terms, 'deductible');
    const deductible = result.find((r) => r.term.id === 'deductible')!;
    expect(deductible.nameMatches.length).toBeGreaterThan(0);
    expect(deductible.defMatches.length).toBeGreaterThan(0); // also in its own def
  });

  it('returns highlight ranges for the short (list) definition too', () => {
    const result = filterTerms(terms, 'fee');
    const copay = result.find((r) => r.term.id === 'copay')!;
    // "A fixed fee per visit." — highlighted independently of the full def.
    expect(copay.shortMatches.length).toBeGreaterThan(0);
  });

  it('returns [] when nothing matches', () => {
    expect(filterTerms(terms, 'zzzznotaterm')).toEqual([]);
  });

  it('handles special-character queries without throwing', () => {
    const result = filterTerms(terms, '(e.g.');
    expect(result.map((r) => r.term.id)).toEqual(['sub-limit']);
  });
});
