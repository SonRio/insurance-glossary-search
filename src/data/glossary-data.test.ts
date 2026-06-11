import { describe, it, expect } from 'vitest';
import { GLOSSARY } from './glossary-data';
import { CATEGORY_ORDER, type Category } from '../types';

describe('glossary data integrity', () => {
  const ids = GLOSSARY.map((t) => t.id);
  const idSet = new Set(ids);

  it('contains at least 40 terms', () => {
    expect(GLOSSARY.length).toBeGreaterThanOrEqual(40);
  });

  it('has unique ids', () => {
    expect(idSet.size).toBe(ids.length);
  });

  it('uses kebab-case ids only', () => {
    const bad = ids.filter((id) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id));
    expect(bad).toEqual([]);
  });

  it('populates every category with at least one term', () => {
    for (const category of CATEGORY_ORDER) {
      const count = GLOSSARY.filter((t) => t.category === category).length;
      expect(count, `category "${category}" is empty`).toBeGreaterThan(0);
    }
  });

  it('only uses known categories', () => {
    const known = new Set<Category>(CATEGORY_ORDER);
    const bad = GLOSSARY.filter((t) => !known.has(t.category)).map((t) => t.id);
    expect(bad).toEqual([]);
  });

  it('has every relatedId pointing to an existing term (no dead links)', () => {
    const dead: string[] = [];
    for (const term of GLOSSARY) {
      for (const ref of term.relatedIds) {
        if (!idSet.has(ref)) dead.push(`${term.id} → ${ref}`);
      }
    }
    expect(dead).toEqual([]);
  });

  it('never lists a term as related to itself', () => {
    const selfRefs = GLOSSARY.filter((t) => t.relatedIds.includes(t.id)).map(
      (t) => t.id,
    );
    expect(selfRefs).toEqual([]);
  });

  it('has no duplicate ids within a single relatedIds list', () => {
    const dupes = GLOSSARY.filter(
      (t) => new Set(t.relatedIds).size !== t.relatedIds.length,
    ).map((t) => t.id);
    expect(dupes).toEqual([]);
  });

  it('starts every term name with A–Z (so the A–Z rail can reach it)', () => {
    const nonAlpha = GLOSSARY.filter((t) => !/^[A-Za-z]/.test(t.name)).map(
      (t) => t.name,
    );
    expect(nonAlpha).toEqual([]);
  });

  it('gives every term a non-empty name and a substantive definition', () => {
    for (const term of GLOSSARY) {
      expect(term.name.trim().length, `${term.id} name`).toBeGreaterThan(0);
      expect(
        term.definition.trim().length,
        `${term.id} definition`,
      ).toBeGreaterThan(40);
    }
  });

  it('gives every term a short definition that is shorter than the full one', () => {
    for (const term of GLOSSARY) {
      const short = term.shortDefinition.trim();
      expect(short.length, `${term.id} shortDefinition`).toBeGreaterThan(10);
      expect(
        short.length,
        `${term.id} short should be shorter than full`,
      ).toBeLessThan(term.definition.trim().length);
    }
  });
});
