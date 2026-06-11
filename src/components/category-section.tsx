import { useI18n } from '../i18n/i18n-context';
import type { Category } from '../types';
import type { RankedTerm } from '../utils/search';
import { TermListItem } from './term-list-item';

interface CategorySectionProps {
  category: Category;
  rankedTerms: RankedTerm[];
  isExpanded: boolean;
  onToggle: (category: Category) => void;
  selectedId: string | null;
  activeId: string | null;
  onSelectTerm: (id: string) => void;
}

/** A collapsible group of terms for one category. */
export function CategorySection({
  category,
  rankedTerms,
  isExpanded,
  onToggle,
  selectedId,
  activeId,
  onSelectTerm,
}: CategorySectionProps) {
  const { t } = useI18n();
  const panelId = `category-panel-${category}`;
  const headingId = `category-heading-${category}`;

  return (
    <section aria-labelledby={headingId} className="mb-7 scroll-mt-44">
      <h2 id={headingId}>
        <button
          type="button"
          onClick={() => onToggle(category)}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          className="group flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span
            aria-hidden="true"
            className="h-5 w-1 rounded-full bg-gradient-to-b from-accent to-accent-2"
          />
          <span className="font-display text-xl font-semibold text-fg transition-colors group-hover:text-accent">
            {t.categories[category]}
          </span>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold tabular-nums text-accent">
            {rankedTerms.length}
          </span>
          <span className="flex-1" />
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className={`h-4 w-4 text-muted transition-transform duration-300 ${
              isExpanded ? 'rotate-90' : ''
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 3 5 5-5 5" />
          </svg>
        </button>
      </h2>

      {isExpanded && (
        <ul id={panelId} className="mt-2 space-y-1.5">
          {rankedTerms.map((ranked, i) => (
            <TermListItem
              key={ranked.term.id}
              ranked={ranked}
              index={i}
              isSelected={selectedId === ranked.term.id}
              isActive={activeId === ranked.term.id}
              onSelect={onSelectTerm}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
