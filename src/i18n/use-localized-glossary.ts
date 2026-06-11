import { useMemo } from 'react';
import { GLOSSARY } from '../data/glossary-data';
import { GLOSSARY_VI } from './glossary-vi';
import type { GlossaryTerm } from '../types';
import type { Lang } from './strings';

/**
 * The glossary localized for the active language. Term **names are kept in
 * English** (industry terms used as the entry key) — only the **definition** is
 * translated. Strings are NFC-normalized so diacritic-folded search offsets stay
 * valid; falls back to English if a translation is missing.
 */
export function useLocalizedGlossary(lang: Lang): GlossaryTerm[] {
  return useMemo(() => {
    return GLOSSARY.map((term) => {
      const vi = lang === 'vi' ? GLOSSARY_VI[term.id] : undefined;
      return {
        ...term,
        name: term.name.normalize('NFC'),
        definition: (vi?.definition ?? term.definition).normalize('NFC'),
        shortDefinition: (vi?.shortDefinition ?? term.shortDefinition).normalize(
          'NFC',
        ),
      };
    });
  }, [lang]);
}
