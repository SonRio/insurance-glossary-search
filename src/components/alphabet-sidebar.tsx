import { useI18n } from '../i18n/i18n-context';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

interface AlphabetSidebarProps {
  /** Letters that have at least one visible term. */
  availableLetters: Set<string>;
  /** Letter currently scrolled into view (from scroll-spy). */
  activeLetter: string | null;
  onJump: (letter: string) => void;
}

/** Vertical A–Z index. Empty letters are dimmed; the in-view letter is
 *  highlighted in the accent colour via the scroll-spy. */
export function AlphabetSidebar({
  availableLetters,
  activeLetter,
  onJump,
}: AlphabetSidebarProps) {
  const { t } = useI18n();
  return (
    <nav
      aria-label={t.jumpToLetter}
      className="flex flex-col items-center gap-0.5"
    >
      {LETTERS.map((letter) => {
        const enabled = availableLetters.has(letter);
        const isActive = activeLetter === letter;
        return (
          <button
            key={letter}
            type="button"
            disabled={!enabled}
            onClick={() => onJump(letter)}
            aria-current={isActive ? 'true' : undefined}
            className={`grid h-6 w-6 place-items-center rounded-md text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              isActive
                ? 'scale-110 bg-accent text-accent-fg shadow-soft'
                : enabled
                  ? 'text-fg-soft hover:bg-accent-soft hover:text-accent'
                  : 'cursor-default text-line'
            }`}
          >
            {letter}
          </button>
        );
      })}
    </nav>
  );
}
