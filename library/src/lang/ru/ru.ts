import { numInWordsFactory } from '~/utils';

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

function ru(num: number) {
  if (num === 0) return 'ноль';

  const words = [];

  function convertChunk(chunk: number) {
    const chunkWords = [];

    if (chunk >= 100) {
      chunkWords.push(hundreds[Math.floor(chunk / 100)]);
      chunk %= 100;
    }

    if (chunk >= 20) {
      chunkWords.push(tens[Math.floor(chunk / 10)]);
      chunk %= 10;
    }

    if (chunk === 10) {
      return tens[1];
    }

    if (chunk >= 10) {
      chunkWords.push(teens[chunk - 10]);
      return chunkWords.join(' ');
    }

    if (chunk > 0) {
      chunkWords.push(units[chunk]);
    }

    return chunkWords.join(' ');
  }

  const trillion = Math.floor(num / 1000000000000);
  const billion = Math.floor((num % 1000000000000) / 1000000000);
  const million = Math.floor((num % 1000000000) / 1000000);
  const thousand = Math.floor((num % 1000000) / 1000);
  const remainder = num % 1000;

  if (trillion > 0) {
    words.push(`${convertChunk(trillion)} триллион`);
  }

  if (billion > 0) {
    words.push(`${convertChunk(billion)} миллиард`);
  }

  if (million > 0) {
    words.push(`${convertChunk(million)} миллион`);
  }

  if (thousand > 0) {
    words.push(`${convertChunk(thousand)} тысяча`);
  }

  if (remainder > 0) {
    words.push(convertChunk(remainder));
  }

  return words.join(' ');
}

export const russianNumInWords = numInWordsFactory(ru, { lang: 'ru' });
