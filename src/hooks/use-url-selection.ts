import { useCallback, useEffect, useState } from 'react';

const PARAM = 'term';

function readParam(validIds: Set<string>): string | null {
  const id = new URLSearchParams(window.location.search).get(PARAM);
  return id && validIds.has(id) ? id : null;
}

/**
 * Keeps the selected term in sync with the URL's `?term=` query param via the
 * History API. Deep links open the right term on load, browser back/forward
 * navigates between previously viewed terms, and the URL is shareable.
 *
 * @param validIds set of known term ids — unknown ids in the URL are ignored.
 */
export function useUrlSelection(validIds: Set<string>) {
  const [selectedId, setSelectedId] = useState<string | null>(() =>
    readParam(validIds),
  );

  // Respond to browser back/forward.
  useEffect(() => {
    const onPopState = () => setSelectedId(readParam(validIds));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [validIds]);

  const selectTerm = useCallback((id: string) => {
    setSelectedId((current) => {
      if (current === id) return current; // dedupe: no duplicate history entry
      const url = new URL(window.location.href);
      url.searchParams.set(PARAM, id);
      window.history.pushState({ [PARAM]: id }, '', url);
      return id;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedId((current) => {
      if (current === null) return current;
      const url = new URL(window.location.href);
      url.searchParams.delete(PARAM);
      window.history.pushState({ [PARAM]: null }, '', url);
      return null;
    });
  }, []);

  return { selectedId, selectTerm, clearSelection };
}
