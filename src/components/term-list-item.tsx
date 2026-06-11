import { useI18n } from '../i18n/i18n-context';
import { firstLetter } from '../i18n/text';
import type { RankedTerm } from '../utils/search';
import { HighlightedText } from './highlighted-text';

interface TermListItemProps {
  ranked: RankedTerm;
  isSelected: boolean;
  /** True when this row is the keyboard-highlighted item. */
  isActive: boolean;
  /** Position within its category, for the staggered entrance. */
  index: number;
  onSelect: (id: string) => void;
}

/** A single term row — modern card with hover lift and selected accent ring. */
export function TermListItem({
  ranked,
  isSelected,
  isActive,
  index,
  onSelect,
}: TermListItemProps) {
  const { t } = useI18n();
  const { term, nameMatches, shortMatches } = ranked;
  const letter = firstLetter(term.name);
  const highlighted = isSelected || isActive;

  return (
    <li
      id={`term-${term.id}`}
      data-term-letter={letter}
      className="reveal scroll-mt-44"
      style={{ animationDelay: `${Math.min(index, 8) * 35}ms` }}
    >
      <button
        type="button"
        onClick={() => onSelect(term.id)}
        aria-current={isSelected ? 'true' : undefined}
        data-active={isActive ? 'true' : undefined}
        className={`group block w-full rounded-xl px-4 py-3.5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          isSelected
            ? 'bg-accent-soft ring-1 ring-accent/40'
            : isActive
              ? 'bg-accent-soft/60 ring-1 ring-accent/25'
              : 'hover:-translate-y-0.5 hover:bg-elevated hover:shadow-soft'
        }`}
      >
        <span className="flex items-baseline justify-between gap-3">
          <span
            className={`font-display text-[17px] font-semibold leading-snug transition-colors ${
              highlighted ? 'text-accent' : 'text-fg group-hover:text-accent'
            }`}
          >
            <HighlightedText text={term.name} ranges={nameMatches} />
          </span>
          <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
            {t.categories[term.category]}
          </span>
        </span>
        <span className="mt-1.5 line-clamp-2 block max-w-prose text-[15px] leading-relaxed text-fg-soft">
          <HighlightedText text={term.shortDefinition} ranges={shortMatches} />
        </span>
      </button>
    </li>
  );
}
