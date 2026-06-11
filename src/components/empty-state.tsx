import { useI18n } from '../i18n/i18n-context';

interface EmptyStateProps {
  query: string;
  onClear: () => void;
}

/** Shown in place of the term list when a search returns nothing. */
export function EmptyState({ query, onClear }: EmptyStateProps) {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center shadow-soft">
      <div
        aria-hidden="true"
        className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-3.8-3.8" />
        </svg>
      </div>
      <p className="font-display text-xl font-semibold text-fg">
        {t.emptyTitle}
        <span className="text-accent"> · “{query}”</span>
      </p>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        {t.emptyBody}
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-5 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-fg shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {t.clearSearch}
      </button>
    </div>
  );
}
