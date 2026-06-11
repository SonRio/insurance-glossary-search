import type { Category } from '../types';

export type Lang = 'en' | 'vi';
export const LANGS: Lang[] = ['en', 'vi'];

/** Short autonym shown in the language toggle. */
export const LANG_LABEL: Record<Lang, string> = { en: 'EN', vi: 'VI' };

/** Every UI string the app renders, per language. */
export interface Dict {
  brand: string;
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  subtitle: string;
  statTerms: (n: number) => string;
  statCategories: string;
  statOffline: string;
  searchPlaceholder: string;
  clear: string;
  resultCount: (n: number, total: number) => string;
  idleCount: (total: number) => string;
  entryCount: (n: number) => string;
  relatedHeading: string;
  noEntryTitle: string;
  noEntryBody: string;
  emptyTitle: string;
  emptyBody: string;
  clearSearch: string;
  closeEntry: string;
  footer: (total: number) => string;
  toggleLanguage: string;
  toLight: string;
  toDark: string;
  jumpToLetter: string;
  searchLabel: string;
  categories: Record<Category, string>;
}

export const STRINGS: Record<Lang, Dict> = {
  en: {
    brand: 'Insurance Glossary',
    eyebrow: 'A working reference · bilingual · offline',
    headlineLead: 'Speak the language of',
    headlineAccent: 'insurance.',
    subtitle:
      'Plain-language definitions for the jargon that trips up customers and new hires alike — searchable, cross-referenced, and read entirely in your browser.',
    statTerms: (n) => `${n} terms`,
    statCategories: '6 categories',
    statOffline: 'Works offline',
    searchPlaceholder: 'Search a term or definition…',
    clear: 'Clear',
    resultCount: (n, total) =>
      `${n} of ${total} ${n === 1 ? 'entry' : 'entries'}`,
    idleCount: (total) => `${total} terms · 6 categories`,
    entryCount: (n) => `${n} ${n === 1 ? 'entry' : 'entries'}`,
    relatedHeading: 'Related terms',
    noEntryTitle: 'No term selected',
    noEntryBody:
      'Choose a term to read its full definition and follow the links to related concepts.',
    emptyTitle: 'No results',
    emptyBody:
      'Search runs across both term names and definitions — try a shorter or different keyword.',
    clearSearch: 'Clear search',
    closeEntry: 'Close',
    footer: (total) =>
      `${total} terms across 6 categories · built as a reference, not a one-shot`,
    toggleLanguage: 'Switch language',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    jumpToLetter: 'Jump to letter',
    searchLabel: 'Search insurance terms',
    categories: {
      general: 'General Insurance',
      claims: 'Claims',
      coverage: 'Coverage',
      'life-health': 'Life & Health',
      reinsurance: 'Reinsurance',
      regulatory: 'Regulatory',
    },
  },
  vi: {
    brand: 'Từ điển Bảo hiểm',
    eyebrow: 'Tài liệu tra cứu · song ngữ · ngoại tuyến',
    headlineLead: 'Hiểu đúng ngôn ngữ',
    headlineAccent: 'bảo hiểm.',
    subtitle:
      'Định nghĩa dễ hiểu cho những thuật ngữ khiến khách hàng và nhân viên mới bối rối — tìm kiếm tức thì, liên kết chéo, và chạy hoàn toàn trong trình duyệt.',
    statTerms: (n) => `${n} thuật ngữ`,
    statCategories: '6 nhóm',
    statOffline: 'Chạy ngoại tuyến',
    searchPlaceholder: 'Tìm thuật ngữ hoặc định nghĩa…',
    clear: 'Xóa',
    resultCount: (n, total) => `${n}/${total} kết quả`,
    idleCount: (total) => `${total} thuật ngữ · 6 nhóm`,
    entryCount: (n) => `${n} mục`,
    relatedHeading: 'Thuật ngữ liên quan',
    noEntryTitle: 'Chưa chọn thuật ngữ',
    noEntryBody:
      'Chọn một thuật ngữ để đọc định nghĩa đầy đủ và lần theo các khái niệm liên quan.',
    emptyTitle: 'Không có kết quả',
    emptyBody:
      'Tìm kiếm bao gồm cả tên thuật ngữ và định nghĩa — hãy thử từ khóa ngắn hơn hoặc khác đi.',
    clearSearch: 'Xóa tìm kiếm',
    closeEntry: 'Đóng',
    footer: (total) =>
      `${total} thuật ngữ thuộc 6 nhóm · làm như một tài liệu tra cứu, không phải bản nháp vội`,
    toggleLanguage: 'Đổi ngôn ngữ',
    toLight: 'Chuyển sang giao diện sáng',
    toDark: 'Chuyển sang giao diện tối',
    jumpToLetter: 'Nhảy tới chữ cái',
    searchLabel: 'Tìm thuật ngữ bảo hiểm',
    categories: {
      general: 'Bảo hiểm chung',
      claims: 'Bồi thường',
      coverage: 'Phạm vi bảo hiểm',
      'life-health': 'Nhân thọ & Sức khỏe',
      reinsurance: 'Tái bảo hiểm',
      regulatory: 'Pháp lý & Quản lý',
    },
  },
};
