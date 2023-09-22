import { numInWordsFactory } from 'mod';

const units = [
  'nol',
  'satu',
  'dua',
  'tiga',
  'empat',
  'lima',
  'enam',
  'tujuh',
  'delapan',
  'sembilan',
];

const id = (num: number): string => {
  const processLargeNumbers = (divisor: number, word: string): string => {
    const quotient = Math.floor(num / divisor);
    const remainder = num % divisor;
    if (remainder === 0) {
      return `${id(quotient)} ${word}`;
    }
    return `${id(quotient)} ${word} ${id(remainder)}`;
  };

  // Handle trillions
  if (num >= 1_000_000_000_000)
    return processLargeNumbers(1_000_000_000_000, 'triliun');

  // Handle billions
  if (num >= 1_000_000_000) return processLargeNumbers(1_000_000_000, 'miliar');

  // Handle millions
  if (num >= 1_000_000) return processLargeNumbers(1_000_000, 'juta');

  // Handle thousands
  if (num >= 1000) {
    const thousands = Math.floor(num / 1000);
    const remainder = num % 1000;
    // eslint-disable-next-line no-nested-ternary
    return thousands === 1
      ? remainder === 0
        ? 'seribu'
        : `seribu ${id(remainder)}`
      : processLargeNumbers(1000, 'ribu');
  }

  // Handle hundreds
  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    // eslint-disable-next-line no-nested-ternary
    return hundreds === 1
      ? remainder === 0
        ? 'seratus'
        : `seratus ${id(remainder)}`
      : processLargeNumbers(100, 'ratus');
  }

  // Handle tens
  if (num >= 20) return processLargeNumbers(10, 'puluh');

  // Handle teens
  if (num >= 10) {
    const remainder = num % 10;
    if (remainder === 0) return 'sepuluh';
    if (remainder === 1) return 'sebelas';
    return `${id(remainder)} belas`;
  }

  // Handle single digits
  return units[num] ?? 'Invalid';
};

export const indonesianNumInWords = numInWordsFactory(id, {
  lang: 'id',
  status: 'stable',
});
