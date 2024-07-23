import { numInWordsFactory } from '~/utils/num-in-words-factory';

const singles = [
  'صفر',
  'واحد',
  'اثنان',
  'ثلاثة',
  'أربعة',
  'خمسة',
  'ستة',
  'سبعة',
  'ثمانية',
  'تسعة',
];

const tens = [
  '',
  'عشرة',
  'عشرون',
  'ثلاثون',
  'أربعون',
  'خمسون',
  'ستون',
  'سبعون',
  'ثمانون',
  'تسعون',
];

function ar(num: number): string {
  if (num < 10) return singles[num] ?? 'Invalid';
  if (num === 10) return 'عشرة';
  if (num === 11) return 'إحدى عشرة';
  if (num === 12) return 'اثنا عشرة';
  if (num > 12 && num < 20)
    return `${singles[num % 10]} عشرة`.replace('اثنان', 'اثنا');
  if (num < 100) {
    if (num % 10 === 0) return tens[num / 10] ?? 'Invalid';
    return `${singles[num % 10]} و${tens[Math.floor(num / 10)]}`.replace('صفر و', '');
  }
  if (num === 100) return 'مائة';
  if (num < 1000) {
    const remainder = num % 100;
    return `${singles[Math.floor(num / 100)]} مائة${remainder ? ` و${ar(remainder)}` : ''}`;
  }
  if (num < 10000) {
    const remainder = num % 1000;
    return `${singles[Math.floor(num / 1000)]} ألف${remainder ? ` و${ar(remainder)}` : ''}`.replace(' وصفر', '');
  }
  if (num < 1_000_000) {
    const remainder = num % 1000;
    const thousands = Math.floor(num / 1000);
    return `${ar(thousands)} آلاف${remainder ? ` و${ar(remainder)}` : ''}`.replace(' وصفر', '');
  }
  if (num < 1_000_000_000) {
    const remainder = num % 1_000_000;
    const millions = Math.floor(num / 1_000_000);
    return `${ar(millions)} مليون${millions > 1 ? 'ين' : ''}${remainder ? ` و${ar(remainder)}` : ''}`.replace(' وصفر', '');
  }
  if (num < 1_000_000_000_000) {
    const remainder = num % 1_000_000_000;
    const billions = Math.floor(num / 1_000_000_000);
    return `${ar(billions)} مليار${billions > 1 ? 'ين' : ''}${remainder ? ` و${ar(remainder)}` : ''}`.replace(' وصفر', '');
  }
  return 'Number too large';
}

export const arabicNumInWords = numInWordsFactory(ar, {
  lang: 'ar',
  status: 'alpha',
});
