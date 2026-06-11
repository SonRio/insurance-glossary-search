import { useEffect, useState, type RefObject } from 'react';

/**
 * Tracks which letter group is currently scrolled into view, by observing the
 * `[data-term-letter]` rows inside `containerRef`. Returns the letter of the
 * topmost visible term so the A–Z rail can highlight it.
 *
 * @param recomputeKey changes whenever the visible term set changes, so the
 *   observer is rebuilt against the new DOM rows.
 */
export function useScrollSpy(
  containerRef: RefObject<HTMLElement | null>,
  recomputeKey: string,
): string | null {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') return;

    const rows = Array.from(
      container.querySelectorAll<HTMLElement>('[data-term-letter]'),
    );
    if (rows.length === 0) {
      setActiveLetter(null);
      return;
    }

    // Track the on-screen top edge of each currently-intersecting row.
    const tops = new Map<HTMLElement, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) tops.set(el, entry.boundingClientRect.top);
          else tops.delete(el);
        }
        let topmost: HTMLElement | null = null;
        let min = Infinity;
        tops.forEach((y, el) => {
          if (y < min) {
            min = y;
            topmost = el;
          }
        });
        // Clears to null when every row has scrolled out of view, so a stale
        // letter doesn't stay highlighted.
        setActiveLetter(
          topmost ? ((topmost as HTMLElement).dataset.termLetter ?? null) : null,
        );
      },
      // Bias toward the upper portion of the viewport.
      { rootMargin: '0px 0px -70% 0px', threshold: 0 },
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [containerRef, recomputeKey]);

  return activeLetter;
}
