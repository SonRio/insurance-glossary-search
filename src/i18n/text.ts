/**
 * Fold a string to lowercase ASCII, stripping Vietnamese diacritics while
 * preserving length 1:1. Because the output is the same length as the NFC
 * input, match offsets computed on the folded text still index the original
 * (NFC) string — so "phi" highlights correctly inside "Phí".
 */
export function fold(input: string): string {
  let out = '';
  for (const ch of input.normalize('NFC')) {
    const base = ch.normalize('NFD').replace(/[̀-ͯ]/g, '');
    let c = base.length > 0 ? base[0] : ch;
    if (c === 'đ' || c === 'Đ') c = 'd';
    out += c.toLowerCase();
  }
  return out;
}

/** First letter of a name for the A–Z rail, diacritic-folded. Non-A–Z → '#'. */
export function firstLetter(name: string): string {
  const f = fold(name.trim()).charAt(0).toUpperCase();
  return /[A-Z]/.test(f) ? f : '#';
}
