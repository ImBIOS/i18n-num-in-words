import { numInWordsFactory } from '~/utils/num-in-words-factory';

const fr = (_num: number): string => {
  return 'Not implemented yet!';
};

export const frenchNumInWords = numInWordsFactory(fr, {
  lang: 'fr',
  status: 'alpha',
});
