import { useEffect, useRef } from 'react';
import type { GlossaryTerm } from '../types';
import { TermDetailPanel } from './term-detail-panel';

interface TermDetailModalProps {
  term: GlossaryTerm;
  termsById: Map<string, GlossaryTerm>;
  onSelectRelated: (id: string) => void;
  onClose: () => void;
}

/**
 * Full-screen modal used on mobile to show a term's definition.
 * Traps Tab focus inside the dialog and restores focus on close.
 * (Escape-to-close is handled by the global keyboard handler in App.)
 */
export function TermDetailModal({
  term,
  termsById,
  onSelectRelated,
  onClose,
}: TermDetailModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Capture the element that opened the modal once, and restore focus to it
  // on unmount — not on every related-term switch.
  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    return () => previouslyFocused.current?.focus();
  }, []);

  // Move focus into the dialog and trap Tab. Re-runs per term so focus lands
  // on the newly shown content.
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>('button, a[href]')?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button, a[href], input, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [term.id]);

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={term.name}
    >
      <div
        className="absolute inset-0 bg-fg/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        className="detail-scroll absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t-2 border-accent bg-surface px-5 pb-8 pt-5 shadow-lift"
      >
        <TermDetailPanel
          term={term}
          termsById={termsById}
          onSelectRelated={onSelectRelated}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
