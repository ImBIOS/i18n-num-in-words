import { numInWordsFactory } from '~/utils/num-in-words-factory';

const ur = (num: number): string => {
  return 'Not implemented yet!';
};

export const urduNumInWords = numInWordsFactory(ur, {
  lang: 'ur',
  status: 'alpha',
});
