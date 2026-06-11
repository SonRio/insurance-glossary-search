import { useI18n } from '../i18n/i18n-context';
import { LANGS, LANG_LABEL } from '../i18n/strings';
import type { Theme } from '../hooks/use-theme';

interface TopBarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

/** Utility bar: brand mark, language switch (EN/VI), and theme toggle. */
export function TopBar({ theme, onToggleTheme }: TopBarProps) {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-accent-fg shadow-soft"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />
          </svg>
        </span>
        <span className="font-display text-base font-bold tracking-tight text-fg">
          {t.brand}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div
          role="group"
          aria-label={t.toggleLanguage}
          className="flex rounded-xl border border-line bg-surface p-0.5"
        >
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                lang === l
                  ? 'bg-accent text-accent-fg shadow-soft'
                  : 'text-muted hover:text-fg'
              }`}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? t.toLight : t.toDark}
          className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface text-fg-soft transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {theme === 'dark' ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
