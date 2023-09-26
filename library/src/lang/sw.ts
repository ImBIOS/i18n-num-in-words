import { numInWordsFactory } from '~/utils/num-in-words-factory';

const sw = (num: number): string => {
  return 'Not implemented yet!';
};

export const swahiliNumInWords = numInWordsFactory(sw, {
  lang: 'sw',
  status: 'alpha',
});
