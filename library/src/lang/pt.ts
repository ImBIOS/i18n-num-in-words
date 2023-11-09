import { numInWordsFactory } from '~/utils/num-in-words-factory';

const units = [
  'zero',
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
];

const tensUnits = [
  '',
  '',
  'vinte',
  'trinta',
  'quarenta',
  'cinquenta',
  'sessenta',
  'setenta',
  'oitenta',
  'noventa',
];

const pt = (num: number): string => {
  const processLargeNumbers = (divisor: number, word: string): string => {
    const quotient = Math.floor(num / divisor);
    const remainder = num % divisor;
    if (remainder === 0) {
      return `${pt(quotient)} ${word}`;
    }
    return `${pt(quotient)} ${word} ${pt(remainder)}`;
  };

  if (num >= 1_000_000_000_000)
    return processLargeNumbers(1_000_000_000_000, 'trilhão');
  if (num >= 1_000_000_000) return processLargeNumbers(1_000_000_000, 'bilhão');
  if (num >= 1_000_000) return processLargeNumbers(1_000_000, 'milhão');

  if (num >= 1_000) {
    const thousands = Math.floor(num / 1_000);
    const remainder = num % 1_000;
    return thousands === 1
      ? remainder === 0
        ? 'mil'
        : `mil ${pt(remainder)}`
      : processLargeNumbers(1_000, 'mil');
  }

  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    return hundreds === 1
      ? remainder === 0
        ? 'cem'
        : `cento ${pt(remainder)}`
      : processLargeNumbers(100, 'cento');
  }

  if (num >= 20) {
    const tens = Math.floor(num / 10);
    const remainder = num % 10;
    return `${tensUnits[tens]}${remainder ? ' e ' + pt(remainder) : ''}`;
  }

  if (num >= 10) {
    const remainder = num % 10;
    switch (remainder) {
      case 0:
        return 'dez';
      case 1:
        return 'onze';
      case 2:
        return 'doze';
      case 3:
        return 'treze';
      case 4:
        return 'catorze';
      case 5:
        return 'quinze';
      case 6:
        return 'dezesseis';
      case 7:
        return 'dezessete';
      case 8:
        return 'dezoito';
      case 9:
        return 'dezenove';
    }
  }

  return units[num] ?? 'Invalid';
};

export const portugueseNumInWords = numInWordsFactory(pt, {
  lang: 'pt',
  status: 'alpha',
});
