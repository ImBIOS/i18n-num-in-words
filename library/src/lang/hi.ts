import { numInWordsFactory } from '~/utils/num-in-words-factory';

const hi = (num: number): string => {
  return 'Not implemented yet!';
};

export const hindiNumInWords = numInWordsFactory(hi, {
  lang: 'hi',
  status: 'alpha',
});
