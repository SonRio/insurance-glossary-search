/** The six insurance domains the glossary is organized into. */
export type Category =
  | 'general'
  | 'claims'
  | 'coverage'
  | 'life-health'
  | 'reinsurance'
  | 'regulatory';

/** A single glossary entry. `id` is a stable kebab-case slug used for
 *  deep-linking and as the reference target for `relatedIds`. */
export interface GlossaryTerm {
  id: string;
  name: string;
  category: Category;
  /** 2–3 plain-language sentences — the full definition shown in the detail. */
  definition: string;
  /** One-line gloss shown under the term in the list; conveys the gist at a
   *  glance (≥~50% of the meaning), not a truncation of `definition`. */
  shortDefinition: string;
  /** ids of related terms — must reference an existing term's `id`. */
  relatedIds: string[];
}

/** Display order for the categories. Human labels are localized in strings.ts. */
export const CATEGORY_ORDER: Category[] = [
  'general',
  'claims',
  'coverage',
  'life-health',
  'reinsurance',
  'regulatory',
];
