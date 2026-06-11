import { useMemo } from 'react';
import { CATEGORY_ORDER, type Category, type GlossaryTerm } from '../types';
import { filterTerms, type RankedTerm } from '../utils/search';
import { firstLetter } from '../i18n/text';

export interface CategoryGroup {
  category: Category;
  terms: RankedTerm[];
}

export interface GlossaryView {
  /** Non-empty category groups in display order. */
  groups: CategoryGroup[];
  /** Terms in currently-expanded groups, in display order (for keyboard nav). */
  flatVisible: RankedTerm[];
  /** First letters present among the visible terms (for the A–Z rail). */
  availableLetters: Set<string>;
  totalCount: number;
  resultCount: number;
}

/**
 * Derives the grouped, ranked view for a given (already localized) term list,
 * query, and set of expanded categories. A non-empty query force-expands every
 * matching group.
 */
export function useGlossaryView(
  terms: GlossaryTerm[],
  query: string,
  expanded: Set<Category>,
): GlossaryView {
  return useMemo(() => {
    const searchActive = query.trim().length > 0;
    const ranked = filterTerms(terms, query);

    const byCategory = new Map<Category, RankedTerm[]>();
    for (const item of ranked) {
      const bucket = byCategory.get(item.term.category) ?? [];
      bucket.push(item);
      byCategory.set(item.term.category, bucket);
    }

    const groups: CategoryGroup[] = [];
    const flatVisible: RankedTerm[] = [];
    const availableLetters = new Set<string>();

    for (const category of CATEGORY_ORDER) {
      const group = byCategory.get(category);
      if (!group || group.length === 0) continue;
      groups.push({ category, terms: group });

      if (searchActive || expanded.has(category)) {
        for (const item of group) {
          flatVisible.push(item);
          availableLetters.add(firstLetter(item.term.name));
        }
      }
    }

    return {
      groups,
      flatVisible,
      availableLetters,
      totalCount: terms.length,
      resultCount: ranked.length,
    };
  }, [terms, query, expanded]);
}
