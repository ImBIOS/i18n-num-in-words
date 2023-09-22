import { numInWordsFactory } from '~/utils';

const units = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const tensUnits = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

const en = (num: number): string => {
  const processLargeNumbers = (divisor: number, word: string): string => {
    const quotient = Math.floor(num / divisor);
    const remainder = num % divisor;
    if (remainder === 0) {
      return `${en(quotient)} ${word}`;
    }
    return `${en(quotient)} ${word} ${en(remainder)}`;
  };

  if (num >= 1_000_000_000_000)
    return processLargeNumbers(1_000_000_000_000, 'trillion');
  if (num >= 1_000_000_000)
    return processLargeNumbers(1_000_000_000, 'billion');
  if (num >= 1_000_000) return processLargeNumbers(1_000_000, 'million');

  if (num >= 1_000) {
    const thousands = Math.floor(num / 1_000);
    const remainder = num % 1_000;
    return thousands === 1
      ? remainder === 0
        ? 'one thousand'
        : `one thousand ${en(remainder)}`
      : processLargeNumbers(1_000, 'thousand');
  }

  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    return hundreds === 1
      ? remainder === 0
        ? 'one hundred'
        : `one hundred ${en(remainder)}`
      : processLargeNumbers(100, 'hundred');
  }

  if (num >= 20) {
    const tens = Math.floor(num / 10);
    const remainder = num % 10;
    return `${tensUnits[tens]}${remainder ? ' ' + en(remainder) : ''}`;
  }

  if (num >= 10) {
    const remainder = num % 10;
    switch (remainder) {
      case 0:
        return 'ten';
      case 1:
        return 'eleven';
      case 2:
        return 'twelve';
      default:
        return `${en(remainder)}teen`;
    }
  }

  return units[num] ?? 'Invalid';
};

export const englishNumInWords = numInWordsFactory(en, {
  lang: 'en',
  status: 'stable',
});
