import { numInWordsFactory } from '~/utils/num-in-words-factory';

const ja = (num: number): string => {
  return 'Not implemented yet!';
};

export const japaneseNumInWords = numInWordsFactory(ja, {
  lang: 'ja',
  status: 'alpha',
});
