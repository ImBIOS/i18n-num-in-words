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

  describe.todo('Triple digits', () => {
    test.each<readonly [number, string]>([
      [100, 'مائة'],
      [101, 'مائة وواحد'],
      [111, 'مائة وأحد عشر'],
      [321, 'ثلاثة مائة وواحد وعشرون'],
      [999, 'تسعة مائة وتسعة وتسعون'],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num)).toBe(expected);
    });
  });

  describe.todo('Thousands', () => {
    test.each<readonly [number, string]>([
      [1000, 'ألف'],
      [1001, 'ألف وواحد'],
      [2001, 'ألفان وواحد'],
      [4321, 'أربعة آلاف وثلاثمائة وواحد وعشرون'],
      [9999, 'تسعة آلاف وتسعة وتسعون'],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num)).toBe(expected);
    });
  });

  describe.todo('Millions', () => {
    test.each<readonly [number, string]>([
      [1000000, 'مليون'],
      [2000001, 'مليونان وواحد'],
      [1234567, 'مليون ومائتا ثلاث وأربعون ألف وخمسمائة وسبع وستون'],
      [
        7654321,
        'سبعة ملايين وستمائة وأربعة وخمسون ألف وثلاث مائة وواحد وعشرون',
      ],
      [9999999, 'تسعة ملايين وتسعمائة وتسعة وتسعون ألف وتسعمائة وتسعة وتسعون'],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num)).toBe(expected);
    });
  });

  describe.todo('Billions', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'مليار'],
      [2000000001, 'ملياران وواحد'],
      [
        1234567890,
        'مليار ومائتا ثلاث وأربعون مليون وخمسمائة وستة وسبعون ألف وثمانمائة وتسعون',
      ],
      [
        9876543210,
        'تسعة مليارات وثمانمائة وستة وسبعون مليون وخمسمائة وأربعة وثلاثون ألف ومائتين وعشرون',
      ],
      [
        9999999999,
        'تسعة مليارات وتسعمائة وتسعة وتسعون مليون وتسعمائة وتسعة وتسعون ألف وتسعمائة وتسعة وتسعون',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num)).toBe(expected);
    });
  });

  describe.todo('Trillions', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'تريليون'],
      [2000000000001, 'تريليونان وواحد'],
      [
        1234567890123,
        'تريليون ومائتان وثلاثة وأربعون بليون وخمسمائة وستة وسبعون مليون وثمانمائة وتسعون ألف ومائتين وثلاثة وعشرون',
      ],
      [
        9876543210987,
        'تسعة تريليونات وثمانمائة وستة وسبعون بليون وخمسمائة وثلاثة وأربعون مليون وثلاثمائة وعشرون ألف وتسعمائة وسبعة وثمانون',
      ],
      [
        9999999999999,
        'تسعة تريليونات وتسعمائة وتسعة وتسعون بليون وتسعمائة وتسعة وتسعون مليار وتسعمائة وتسعة وتسعون مليون وتسعمائة وتسعة وتسعون ألف وتسعمائة وتسعة وتسعون',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(arabicNumInWords(num)).toBe(expected);
    });
  });
});
