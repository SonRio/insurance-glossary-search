import { useI18n } from '../i18n/i18n-context';
import type { GlossaryTerm } from '../types';

interface TermDetailPanelProps {
  term: GlossaryTerm;
  termsById: Map<string, GlossaryTerm>;
  onSelectRelated: (id: string) => void;
  /** Present in the mobile modal; renders a close control when set. */
  onClose?: () => void;
}

/** The full entry: category pill, headword, definition, related-term chips. */
export function TermDetailPanel({
  term,
  termsById,
  onSelectRelated,
  onClose,
}: TermDetailPanelProps) {
  const { t } = useI18n();
  const related = term.relatedIds
    .map((id) => termsById.get(id))
    .filter((rel): rel is GlossaryTerm => Boolean(rel));

  return (
    <article aria-label={term.name} className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
          {t.categories[term.category]}
        </span>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label={t.closeEntry}
            className="-mr-1 -mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
        )}
      </div>

      <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] text-fg">
        {term.name}
      </h2>

      <p className="mt-3.5 max-w-prose text-[17px] leading-[1.7] text-fg-soft">
        {term.definition}
      </p>

      {related.length > 0 && (
        <div className="mt-7 border-t border-line pt-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {t.relatedHeading}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {related.map((rel) => (
              <li key={rel.id}>
                <button
                  type="button"
                  onClick={() => onSelectRelated(rel.id)}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {rel.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

/** Shown in the desktop detail column when no entry is selected. */
export function DetailPlaceholder() {
  const { t } = useI18n();
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-12 text-center">
      <div
        aria-hidden="true"
        className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />
        </svg>
      </div>
      <p className="font-display text-lg font-semibold text-fg">
        {t.noEntryTitle}
      </p>
      <p className="mt-1.5 max-w-[17rem] text-sm leading-relaxed text-muted">
        {t.noEntryBody}
      </p>
    </div>
  );
}
