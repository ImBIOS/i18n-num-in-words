import { numInWordsFactory } from '~/utils/num-in-words-factory';

const ur = (_num: number): string => {
  return 'Not implemented yet!';
};

export const urduNumInWords = numInWordsFactory(ur, {
  lang: 'ur',
  status: 'alpha',
});
