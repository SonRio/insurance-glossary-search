import { Fragment, type ReactNode } from 'react';
import type { MatchRange } from '../utils/search';

interface HighlightedTextProps {
  text: string;
  /** Non-overlapping, ascending ranges (as produced by getMatchRanges). */
  ranges: MatchRange[];
}

/** Renders `text`, wrapping each matched range in a <mark> for highlighting. */
export function HighlightedText({ text, ranges }: HighlightedTextProps) {
  if (ranges.length === 0) return <>{text}</>;

  const parts: ReactNode[] = [];
  let cursor = 0;

  ranges.forEach((range, i) => {
    if (range.start > cursor) {
      parts.push(
        <Fragment key={`t${i}`}>{text.slice(cursor, range.start)}</Fragment>,
      );
    }
    parts.push(<mark key={`m${i}`}>{text.slice(range.start, range.end)}</mark>);
    cursor = range.end;
  });

  if (cursor < text.length) {
    parts.push(<Fragment key="tail">{text.slice(cursor)}</Fragment>);
  }

  return <>{parts}</>;
}
