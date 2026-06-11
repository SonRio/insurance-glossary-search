import type { GlossaryTerm } from '../types';
import { fold } from '../i18n/text';

/** A half-open [start, end) slice of a string that matched the query. */
export interface MatchRange {
  start: number;
  end: number;
}

/** A term plus its relevance score and the highlight ranges for its name,
 *  full definition, and short (list) definition. Higher score = more relevant. */
export interface RankedTerm {
  term: GlossaryTerm;
  score: number;
  nameMatches: MatchRange[];
  defMatches: MatchRange[];
  shortMatches: MatchRange[];
}

/** Relevance tiers. Name matches always outrank definition-only matches,
 *  and a name match at the very start outranks one in the middle. */
const SCORE_NAME_PREFIX = 3;
const SCORE_NAME_MID = 2;
const SCORE_DEFINITION = 1;

/**
 * Find every non-overlapping occurrence of `query` inside `text`. Matching is
 * case- and diacritic-insensitive (so "phi" matches "Phí"), via length-
 * preserving folding — the returned offsets index the original string. Plain
 * substring (no regex) so "(", ")" or "-" match literally. [] for empty query.
 */
export function getMatchRanges(text: string, query: string): MatchRange[] {
  const q = fold(query.trim());
  if (!q) return [];

  const haystack = fold(text);
  const ranges: MatchRange[] = [];
  let from = 0;

  for (;;) {
    const idx = haystack.indexOf(q, from);
    if (idx === -1) break;
    ranges.push({ start: idx, end: idx + q.length });
    from = idx + q.length; // step past this match so ranges never overlap
  }

  return ranges;
}

/** Case-insensitive alphabetical comparison by term name. */
function byName(a: GlossaryTerm, b: GlossaryTerm): number {
  return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
}

/**
 * Filter and rank terms against a query.
 *
 * - Empty query → every term, score 0, sorted alphabetically.
 * - Otherwise → only terms whose name or definition contains the query,
 *   ranked name-prefix > name-mid > definition-only, ties broken
 *   alphabetically. Highlight ranges are returned for both fields so a
 *   definition match is highlighted even when the name also matched.
 */
export function filterTerms(
  terms: GlossaryTerm[],
  query: string,
): RankedTerm[] {
  const q = query.trim().toLowerCase();

  if (!q) {
    return [...terms].sort(byName).map((term) => ({
      term,
      score: 0,
      nameMatches: [],
      defMatches: [],
      shortMatches: [],
    }));
  }

  const ranked: RankedTerm[] = [];

  for (const term of terms) {
    const nameMatches = getMatchRanges(term.name, q);
    const defMatches = getMatchRanges(term.definition, q);
    if (nameMatches.length === 0 && defMatches.length === 0) continue;

    let score: number;
    if (nameMatches.length > 0) {
      score = nameMatches[0].start === 0 ? SCORE_NAME_PREFIX : SCORE_NAME_MID;
    } else {
      score = SCORE_DEFINITION;
    }

    // Highlight ranges for the short (list) definition, which differs from the
    // full definition used for filtering.
    const shortMatches = getMatchRanges(term.shortDefinition, q);
    ranked.push({ term, score, nameMatches, defMatches, shortMatches });
  }

  return ranked.sort(
    (a, b) => b.score - a.score || byName(a.term, b.term),
  );
}
