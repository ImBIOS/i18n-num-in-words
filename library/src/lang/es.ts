import { numInWordsFactory } from '~/utils/num-in-words-factory';

const es = (num: number): string => {
  return 'Not implemented yet!';
};

export const spanishNumInWords = numInWordsFactory(es, {
  lang: 'es',
  status: 'alpha',
});
