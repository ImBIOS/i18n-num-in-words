import { describe, expect, test } from 'bun:test';
import { arabicNumInWords } from './ar';

describe('Arabic', () => {
  describe('Single digits', () => {
    test.each<readonly [number, string]>([
      [0, 'صفر'],
      [1, 'واحد'],
      [2, 'اثنان'],
      [3, 'ثلاثة'],
      [4, 'أربعة'],
      [5, 'خمسة'],
      [6, 'ستة'],
      [7, 'سبعة'],
      [8, 'ثمانية'],
      [9, 'تسعة'],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num)).toBe(expected);
    });
  });

  describe('Double digits', () => {
    test.each<readonly [number, string]>([
      [10, 'عشرة'],
      [11, 'إحدى عشرة'],
      [12, 'اثنا عشرة'],
      [21, 'واحد وعشرون'],
      [99, 'تسعة وتسعون'],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num)).toBe(expected);
    });
  });

  describe('Triple digits', () => {
    test.each<readonly [number, string]>([
      [100, 'مائة'],
      [101, 'واحد مائة وواحد'],
      [111, 'واحد مائة وإحدى عشرة'],
      [200, 'اثنان مائة'],
      [321, 'ثلاثة مائة وواحد وعشرون'],
      [999, 'تسعة مائة وتسعة وتسعون'],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num, { experimental: true })).toBe(expected);
    });
  });

  describe('Thousands', () => {
    test.each<readonly [number, string]>([
      [1000, 'واحد ألف'],
      [1001, 'واحد ألف وواحد'],
      [2001, 'اثنان ألف وواحد'],
      [4321, 'أربعة ألف وثلاثة مائة وواحد وعشرون'],
      [9999, 'تسعة ألف وتسعة مائة وتسعة وتسعون'],
      [50000, 'خمسون آلاف'],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num, { experimental: true })).toBe(expected);
    });
  });

  describe('Millions', () => {
    test.each<readonly [number, string]>([
      [1000000, 'واحد مليون'],
      [2000001, 'اثنان مليونين وواحد'],
      [
        1234567,
        'واحد مليون واثنان مائة وأربعة وثلاثون آلاف وخمسة مائة وسبعة وستون',
      ],
      [
        9999999,
        'تسعة مليونين وتسعة مائة وتسعة وتسعون آلاف وتسعة مائة وتسعة وتسعون',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num, { experimental: true })).toBe(expected);
    });
  });

  describe('Billions', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'واحد مليار'],
      [2000000001, 'اثنان مليارين وواحد'],
      [
        1234567890,
        'واحد مليار واثنان مائة وأربعة وثلاثون مليونين وخمسة مائة وسبعة وستون آلاف وثمانية مائة وتسعون',
      ],
      [
        9999999999,
        'تسعة مليارين وتسعة مائة وتسعة وتسعون مليونين وتسعة مائة وتسعة وتسعون آلاف وتسعة مائة وتسعة وتسعون',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num, { experimental: true })).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    test('should return "Number too large" for numbers >= 1 trillion', () => {
      expect(
        arabicNumInWords(1000000000000, { experimental: true })
      ).toBe('Number too large');
    });

    test('should handle round tens', () => {
      expect(arabicNumInWords(20, { experimental: true })).toBe('عشرون');
      expect(arabicNumInWords(30, { experimental: true })).toBe('ثلاثون');
    });

    test('should handle teens (13-19)', () => {
      expect(arabicNumInWords(13, { experimental: true })).toBe('ثلاثة عشرة');
      expect(arabicNumInWords(15, { experimental: true })).toBe('خمسة عشرة');
      expect(arabicNumInWords(19, { experimental: true })).toBe('تسعة عشرة');
    });
  });
});
