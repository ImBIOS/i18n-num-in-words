import { numInWordsFactory } from '~/utils';

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
  '',
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
  if (num === 11) return 'إحدى عشرة';
  if (num === 12) return 'اثنا عشرة';
  if (num < 20 && num > 12)
    return `إحدى عشرة`.replace('إحدى', singles[num % 10] ?? 'Invalid');
  if (num === 10) return 'عشرة';
  if (num < 100)
    return `${singles[num % 10]} و${tens[Math.floor(num / 10)]}`.replace(
      'صفر و',
      ''
    );
  if (num === 100) return 'مائة';
  if (num < 1000) {
    const remainder = num % 100;
    return `${singles[Math.floor(num / 100)]} مائة${
      remainder ? ` و${ar(remainder)}` : ''
    }`;
  }

  if (num < 10000)
    return `${singles[Math.floor(num / 1000)]} ألف و${ar(num % 1000)}`.replace(
      ' وصفر',
      ''
    );
  if (num < 1_000_000)
    return `${ar(Math.floor(num / 1000))} آلاف و${ar(num % 1000)}`.replace(
      ' وصفر',
      ''
    );
  if (num < 1_000_000_000)
    return `${ar(Math.floor(num / 1_000_000))} ملايين و${ar(
      num % 1_000_000
    )}`.replace(' وصفر', '');

  return 'Number too large';
}

export const arabicNumInWords = numInWordsFactory(ar, { lang: 'ar' });
