import { numInWordsFactory } from '~/utils/num-in-words-factory';

const es = (num: number): string => {
  void num; return 'Not implemented yet!';
};

export const spanishNumInWords = numInWordsFactory(es, {
  lang: 'es',
  status: 'alpha',
});
