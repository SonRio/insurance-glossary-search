import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CATEGORY_ORDER, type Category } from './types';
import { useI18n } from './i18n/i18n-context';
import { useLocalizedGlossary } from './i18n/use-localized-glossary';
import { useUrlSelection } from './hooks/use-url-selection';
import { useScrollSpy } from './hooks/use-scroll-spy';
import { useGlossaryView } from './hooks/use-glossary-view';
import { useTheme } from './hooks/use-theme';
import { TopBar } from './components/top-bar';
import { SearchBar } from './components/search-bar';
import { CategorySection } from './components/category-section';
import { AlphabetSidebar } from './components/alphabet-sidebar';
import {
  TermDetailPanel,
  DetailPlaceholder,
} from './components/term-detail-panel';
import { TermDetailModal } from './components/term-detail-modal';
import { EmptyState } from './components/empty-state';

export default function App() {
  const { t, lang } = useI18n();
  const { theme, toggle: toggleTheme } = useTheme();
  const terms = useLocalizedGlossary(lang);

  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<Set<Category>>(
    () => new Set(CATEGORY_ORDER),
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const termsById = useMemo(
    () => new Map(terms.map((term) => [term.id, term])),
    [terms],
  );
  const validIds = useMemo(() => new Set(terms.map((term) => term.id)), [terms]);

  const { selectedId, selectTerm, clearSelection } = useUrlSelection(validIds);
  const { groups, flatVisible, availableLetters, totalCount, resultCount } =
    useGlossaryView(terms, query, expanded);

  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const selectedTerm = selectedId ? (termsById.get(selectedId) ?? null) : null;
  const expandedKey = [...expanded].sort().join(',');
  const activeLetter = useScrollSpy(listRef, `${lang}|${query}|${expandedKey}`);

  const toggleCategory = useCallback((category: Category) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  }, []);

  // Reset the keyboard cursor when the visible result set changes.
  useEffect(() => setActiveIndex(-1), [query, expandedKey, lang]);

  // Keep the keyboard-highlighted row in view.
  useEffect(() => {
    if (activeIndex < 0 || activeIndex >= flatVisible.length) return;
    const id = flatVisible[activeIndex].term.id;
    document.getElementById(`term-${id}`)?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, flatVisible]);

  const jumpToLetter = useCallback((letter: string) => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-term-letter="${letter}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Global keyboard shortcuts: / focus · ↑↓ navigate · Enter open · Esc close.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      const typing = el.tagName === 'INPUT' || el.tagName === 'TEXTAREA';

      if (e.key === 'Escape') {
        if (selectedId) clearSelection();
        else if (query) setQuery('');
        else searchRef.current?.blur();
        return;
      }

      // Let the modal's own controls handle keys originating inside it.
      if (el.closest('[role="dialog"]')) return;

      if (e.key === '/' && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (flatVisible.length === 0) return;
        e.preventDefault();
        setActiveIndex((i) => {
          const next = i < 0 ? 0 : i + (e.key === 'ArrowDown' ? 1 : -1);
          return Math.max(0, Math.min(flatVisible.length - 1, next));
        });
      } else if (e.key === 'Enter' && flatVisible.length > 0) {
        selectTerm(flatVisible[activeIndex < 0 ? 0 : activeIndex].term.id);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selectedId, query, flatVisible, activeIndex, clearSelection, selectTerm]);

  const activeId =
    activeIndex >= 0 && activeIndex < flatVisible.length
      ? flatVisible[activeIndex].term.id
      : null;

  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <div className="sticky top-0 z-30 -mx-5 border-b border-line bg-bg/80 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8">
        <TopBar theme={theme} onToggleTheme={toggleTheme} />
      </div>

      <header className="pt-10 sm:pt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {t.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-fg sm:text-6xl">
          {t.headlineLead}{' '}
          <span className="text-gradient">{t.headlineAccent}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-soft sm:text-lg">
          {t.subtitle}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {[t.statTerms(totalCount), t.statCategories, t.statOffline].map(
            (stat) => (
              <li
                key={stat}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-fg-soft shadow-soft"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                {stat}
              </li>
            ),
          )}
        </ul>
      </header>

      <div className="sticky top-[57px] z-20 -mx-5 mt-9 border-b border-line bg-bg/90 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8">
        <SearchBar
          ref={searchRef}
          query={query}
          onQueryChange={setQuery}
          resultCount={resultCount}
          totalCount={totalCount}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[auto_minmax(0,1fr)_23rem] lg:gap-10">
        {/* A–Z rail (desktop only) */}
        <aside className="hidden lg:block">
          <div className="sticky top-44">
            <AlphabetSidebar
              availableLetters={availableLetters}
              activeLetter={activeLetter}
              onJump={jumpToLetter}
            />
          </div>
        </aside>

        {/* Term list */}
        <main ref={listRef} className="min-w-0">
          {groups.length === 0 ? (
            <EmptyState query={query} onClear={() => setQuery('')} />
          ) : (
            groups.map((group) => (
              <CategorySection
                key={group.category}
                category={group.category}
                rankedTerms={group.terms}
                isExpanded={
                  query.trim().length > 0 || expanded.has(group.category)
                }
                onToggle={toggleCategory}
                selectedId={selectedId}
                activeId={activeId}
                onSelectTerm={selectTerm}
              />
            ))
          )}
        </main>

        {/* Reading panel (desktop only; mobile uses the modal below) */}
        <aside className="hidden lg:block">
          <div className="detail-scroll sticky top-44 max-h-[calc(100vh-12rem)] overflow-y-auto rounded-2xl border border-line bg-surface p-6 shadow-soft">
            {selectedTerm ? (
              <TermDetailPanel
                term={selectedTerm}
                termsById={termsById}
                onSelectRelated={selectTerm}
              />
            ) : (
              <DetailPlaceholder />
            )}
          </div>
        </aside>
      </div>

      <footer className="mt-16 border-t border-line pt-5">
        <p className="text-xs text-muted">{t.footer(totalCount)}</p>
      </footer>

      {selectedTerm && (
        <TermDetailModal
          term={selectedTerm}
          termsById={termsById}
          onSelectRelated={selectTerm}
          onClose={clearSelection}
        />
      )}
    </div>
  );
}
