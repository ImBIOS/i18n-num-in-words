import { type Lang } from '~/lang.type';
import { customDebug } from './custom-debug';

/** Helper function for memoization key */
export const generateCacheKey = (
  num: number,
  lang: Lang,
  debug?: boolean
): string => {
  if (debug) {
    customDebug(`Generating cache key for ${num} in language ${lang}`);
  }
  return `${num}-${lang}`;
};
