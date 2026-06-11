/** @type {import('tailwindcss').Config} */
const withVar = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Expressive modern grotesque for display; clean grotesque for body.
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // All theme-aware via CSS variables defined in index.css (:root / .dark).
        bg: withVar('--c-bg'),
        surface: withVar('--c-surface'),
        elevated: withVar('--c-elevated'),
        line: withVar('--c-line'),
        'line-soft': withVar('--c-line-soft'),
        fg: withVar('--c-fg'),
        'fg-soft': withVar('--c-fg-soft'),
        muted: withVar('--c-muted'),
        accent: withVar('--c-accent'),
        'accent-2': withVar('--c-accent-2'),
        'accent-fg': withVar('--c-accent-fg'),
        'accent-soft': withVar('--c-accent-soft'),
        highlight: withVar('--c-highlight'),
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgb(var(--c-shadow) / 0.04), 0 8px 24px -12px rgb(var(--c-shadow) / 0.18)',
        lift: '0 2px 4px rgb(var(--c-shadow) / 0.05), 0 18px 40px -16px rgb(var(--c-shadow) / 0.28)',
        glow: '0 0 0 1px rgb(var(--c-accent) / 0.25), 0 12px 30px -10px rgb(var(--c-accent) / 0.35)',
      },
    },
  },
  plugins: [],
};
