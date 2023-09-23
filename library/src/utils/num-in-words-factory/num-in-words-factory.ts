import { type Lang } from '~/lang.type';
import { generateCacheKey, handleError } from '..';

let isWarned = false;
const cache: Record<string, string> = {};

type Status = 'alpha' | 'beta' | 'stable';

export type NumInWordsOptions<
  Silent extends boolean,
  CurrentStatus extends Status,
> = {
  silent?: Silent;
  memoize?: boolean;
  debug?: boolean;
} & (CurrentStatus extends 'alpha' | 'beta'
  ? {
      experimental?: boolean;
    }
  : {
      experimental?: false;
    });

type NumInWordsFactoryOptions<CurrentStatus extends Status> = {
  lang: Lang;
  /**
   * Status of the language feature.
   * - `alpha`: The language feature is still in development and may change in the future.
   *    - It is not recommended to use this feature in production.
   *    - Single and double digit number tests are required.
   * - `beta`: The language feature is still in development but is stable enough to be used.
   *    - It may change in the future.
   *    - Single double, triple, thousand, and million number tests are required.
   * - `stable`: The language feature is stable and will not change in the future.
   *    - It is safe to use this feature in production.
   *    - Single double, triple, thousand, million, billion, and trillion number tests are required.
   */
  status?: CurrentStatus;
};

export const numInWordsFactory =
  <CurrentStatus extends Status>(
    fn: (num: number) => string,
    {
      lang,
      status = 'alpha' as CurrentStatus,
    }: NumInWordsFactoryOptions<CurrentStatus>
  ) =>
  <Silent extends boolean>(
    num: number,
    {
      silent = false as Silent,
      memoize = true,
      debug,
      experimental = true,
    }: NumInWordsOptions<Silent, CurrentStatus> = {}
  ): Silent extends true ? string : string | undefined => {
    if (experimental && !isWarned) {
      console.warn(
        `%cExperimental ${fn.name} (${lang}), ${status} feature enabled. This feature is not stable and may change in the future.`,
        'color: #f1c40f'
      );
      isWarned = true;
    } else if (!experimental && status !== 'stable') {
      return handleError(
        `The ${fn.name} (${lang}) feature is not stable yet. Please enable the experimental flag to use it.`,
        silent
      );
    }

    const MAX_NUMBER = Number.MAX_SAFE_INTEGER;

    if (num > MAX_NUMBER) {
      return handleError(
        `The number ${num} is too large to be converted.`,
        silent
      );
    }

    let key = '';
    if (memoize) {
      key = generateCacheKey(num, lang, debug);
      if (cache[key]) {
        if (debug) {
          console.debug(
            `Returning cached result for ${num} in language ${lang}`
          );
        }
        return cache[key] ?? 'Invalid';
      }
    }

    const result = fn(num);

    if (memoize) {
      cache[key] = result;
    }
    return result;
  };
