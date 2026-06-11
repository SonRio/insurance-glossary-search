import { describe, it, expect } from 'vitest';
import { GLOSSARY } from '../data/glossary-data';
import { GLOSSARY_VI } from './glossary-vi';

describe('Vietnamese glossary coverage', () => {
  const ids = GLOSSARY.map((t) => t.id);

  it('translates every English term id', () => {
    const missing = ids.filter((id) => !GLOSSARY_VI[id]);
    expect(missing).toEqual([]);
  });

  it('has no Vietnamese entry for an unknown id', () => {
    const known = new Set(ids);
    const extra = Object.keys(GLOSSARY_VI).filter((id) => !known.has(id));
    expect(extra).toEqual([]);
  });

  it('gives every translation a non-empty name and substantive definition', () => {
    for (const id of ids) {
      const vi = GLOSSARY_VI[id];
      expect(vi.name.trim().length, `${id} vi name`).toBeGreaterThan(0);
      expect(
        vi.definition.trim().length,
        `${id} vi definition`,
      ).toBeGreaterThan(20);
      expect(
        vi.shortDefinition.trim().length,
        `${id} vi shortDefinition`,
      ).toBeGreaterThan(8);
    }
  });
});
