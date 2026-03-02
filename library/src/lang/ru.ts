import { numInWordsFactory } from '~/utils/num-in-words-factory';

const units = [
  '',
  'один',
  'два',
  'три',
  'четыре',
  'пять',
  'шесть',
  'семь',
  'восемь',
  'девять',
];
const teens = [
  '',
  'одиннадцать',
  'двенадцать',
  'тринадцать',
  'четырнадцать',
  'пятнадцать',
  'шестнадцать',
  'семнадцать',
  'восемнадцать',
  'девятнадцать',
];
const tens = [
  '',
  'десять',
  'двадцать',
  'тридцать',
  'сорок',
  'пятьдесят',
  'шестьдесят',
  'семьдесят',
  'восемьдесят',
  'девяносто',
];
const hundreds = [
  '',
  'сто',
  'двести',
  'триста',
  'четыреста',
  'пятьсот',
  'шестьсот',
  'семьсот',
  'восемьсот',
  'девятьсот',
];

function pluralForm(n: number, forms: [string, string, string]): string {
  const lastTwo = n % 100;
  const lastOne = n % 10;
  if (lastTwo >= 11 && lastTwo <= 19) return forms[2];
  if (lastOne === 1) return forms[0];
  if (lastOne >= 2 && lastOne <= 4) return forms[1];
  return forms[2];
}

function convertChunk(chunk: number, feminine = false): string {
  const chunkWords: string[] = [];

  if (chunk >= 100) {
    chunkWords.push(hundreds[Math.floor(chunk / 100)]!);
    chunk %= 100;
  }

  if (chunk >= 20) {
    chunkWords.push(tens[Math.floor(chunk / 10)]!);
    chunk %= 10;
  }

  if (chunk === 10) {
    chunkWords.push(tens[1]!);
    return chunkWords.join(' ');
  }

  if (chunk >= 10) {
    chunkWords.push(teens[chunk - 10]!);
    return chunkWords.join(' ');
  }

  if (chunk > 0) {
    if (feminine && chunk === 1) {
      chunkWords.push('одна');
    } else if (feminine && chunk === 2) {
      chunkWords.push('две');
    } else {
      chunkWords.push(units[chunk]!);
    }
  }

  return chunkWords.join(' ');
}

function ru(num: number) {
  if (num === 0) return 'ноль';

  const words: string[] = [];

  const trillion = Math.floor(num / 1000000000000);
  const billion = Math.floor((num % 1000000000000) / 1000000000);
  const million = Math.floor((num % 1000000000) / 1000000);
  const thousand = Math.floor((num % 1000000) / 1000);
  const remainder = num % 1000;

  if (trillion > 0) {
    words.push(`${convertChunk(trillion)} ${pluralForm(trillion, ['триллион', 'триллиона', 'триллионов'])}`);
  }

  if (billion > 0) {
    words.push(`${convertChunk(billion)} ${pluralForm(billion, ['миллиард', 'миллиарда', 'миллиардов'])}`);
  }

  if (million > 0) {
    words.push(`${convertChunk(million)} ${pluralForm(million, ['миллион', 'миллиона', 'миллионов'])}`);
  }

  if (thousand > 0) {
    words.push(`${convertChunk(thousand, true)} ${pluralForm(thousand, ['тысяча', 'тысячи', 'тысяч'])}`);
  }

  if (remainder > 0) {
    words.push(convertChunk(remainder));
  }

  return words.join(' ');
}

export const russianNumInWords = numInWordsFactory(ru, { lang: 'ru' });
