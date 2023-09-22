import { type Lang } from '~/lang.type';

/** Helper function for memoization key */
export const generateCacheKey = (
  num: number,
  lang: Lang,
  debug?: boolean
): string => {
  if (debug) {
    console.debug(`Generating cache key for ${num} in language ${lang}`);
  }
  return `${num}-${lang}`;
};
