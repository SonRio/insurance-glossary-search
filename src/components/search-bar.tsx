import { forwardRef, useEffect, useState } from 'react';
import { useI18n } from '../i18n/i18n-context';

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
}

/** Elevated, glassy search field with a debounced screen-reader tally.
 *  The ref is forwarded so the global "/" shortcut can focus it. */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ query, onQueryChange, resultCount, totalCount }, ref) {
    const { t } = useI18n();
    const hasQuery = query.trim().length > 0;

    const countLabel = hasQuery
      ? t.resultCount(resultCount, totalCount)
      : t.idleCount(totalCount);

    // Announce the settled count to screen readers, not every keystroke.
    const [announced, setAnnounced] = useState(countLabel);
    useEffect(() => {
      const id = setTimeout(() => setAnnounced(countLabel), 350);
      return () => clearTimeout(id);
    }, [countLabel]);

    return (
      <search className="block">
        <label htmlFor="glossary-search" className="sr-only">
          {t.searchLabel}
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5 shadow-soft transition duration-300 focus-within:border-accent focus-within:shadow-glow">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m20 20-3.6-3.6" />
          </svg>

          <input
            ref={ref}
            id="glossary-search"
            type="search"
            inputMode="search"
            autoComplete="off"
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            aria-describedby="search-result-count"
            className="w-full bg-transparent text-lg text-fg outline-none placeholder:text-muted"
          />

          {hasQuery ? (
            <button
              type="button"
              onClick={() => onQueryChange('')}
              className="shrink-0 rounded-lg px-2.5 py-1 text-sm font-medium text-muted transition-colors hover:bg-accent-soft hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t.clear}
            </button>
          ) : (
            <kbd
              aria-hidden="true"
              className="hidden shrink-0 rounded-md border border-line bg-bg px-2 py-0.5 text-xs font-medium text-muted sm:block"
            >
              /
            </kbd>
          )}
        </div>

        {/* Visible tally updates instantly for sighted users. */}
        <p
          id="search-result-count"
          className="mt-2.5 text-sm tabular-nums text-muted"
        >
          {countLabel}
        </p>

        {/* Separate live region announces only the settled (debounced) count. */}
        <span role="status" aria-live="polite" className="sr-only">
          {announced}
        </span>
      </search>
    );
  },
);
