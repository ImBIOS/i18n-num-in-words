import { englishNumInWords, indonesianNumInWords } from '~/lang';
import { type Lang } from '~/lang.type';
import { handleError } from './utils/handle-error';
import { type NumInWordsOptions } from './utils/num-in-words-factory';

export const numInWords = (
  num: number,
  { lang, ...options }: NumInWordsOptions<boolean, 'stable'> & { lang: Lang }
): string | undefined => {
  switch (lang) {
    case 'en':
      return englishNumInWords(num, options);
    case 'id':
      return indonesianNumInWords(num, options);
    default:
      return handleError(
        `Unsupported language or not stable yet: ${lang}`,
        options.silent ?? true
      );
  }
};
