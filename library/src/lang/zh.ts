import { numInWordsFactory } from '~/utils/num-in-words-factory';

type ChineseNumberMap = Record<number, string>;

const singleDigitMap: ChineseNumberMap = {
  0: '零',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
};

function zh(num: number): string {
  if (num >= 0 && num < 10) {
    return singleDigitMap[num] ?? 'Invalid';
  }

  if (num >= 10 && num < 100) {
    const tens = Math.floor(num / 10);
    const ones = num % 10;
    return `${tens > 1 ? singleDigitMap[tens] : ''}十${
      ones > 0 ? singleDigitMap[ones] : ''
    }`;
  }

  if (num >= 100 && num < 1000) {
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    return `${singleDigitMap[hundreds]}百${remainder ? zh(remainder) : ''}`;
  }

  if (num >= 1000 && num < 10000) {
    const thousands = Math.floor(num / 1000);
    const remainder = num % 1000;
    return `${singleDigitMap[thousands]}千${remainder ? zh(remainder) : ''}`;
  }

  if (num >= 10000 && num < 10000000) {
    const millions = Math.floor(num / 10000);
    const remainder = num % 10000;
    return `${zh(millions)}万${remainder ? zh(remainder) : ''}`;
  }

  if (num >= 100000000 && num < 1000000000000) {
    const billions = Math.floor(num / 100000000);
    const remainder = num % 100000000;
    return `${zh(billions)}亿${remainder ? zh(remainder) : ''}`;
  }

  return 'Not supported';
}

export const chineseNumInWords = numInWordsFactory(zh, {
  lang: 'zh',
  status: 'beta',
});
