import { describe, expect, test } from 'bun:test';
import { chineseNumInWords as experimentalChineseNumInWords } from './zh';

const chineseNumInWords = (num: number) =>
  experimentalChineseNumInWords(num, { experimental: true });

describe('Mandarin Chinese', () => {
  describe('Single digits', () => {
    test.each<readonly [number, string]>([
      [0, '零'],
      [1, '一'],
      [2, '二'],
      [3, '三'],
      [4, '四'],
      [5, '五'],
      [6, '六'],
      [7, '七'],
      [8, '八'],
      [9, '九'],
    ])('%i should return %s', (num, expected) => {
      expect(chineseNumInWords(num)).toBe(expected);
    });
  });

  describe('Double digits', () => {
    test.each<readonly [number, string]>([
      [10, '十'],
      [11, '十一'],
      [12, '十二'],
      [21, '二十一'],
      [99, '九十九'],
    ])('%i should return %s', (num, expected) => {
      expect(chineseNumInWords(num)).toBe(expected);
    });
  });

  describe('Triple digits', () => {
    test.each<readonly [number, string]>([
      [100, '一百'],
      [101, '一百一'],
      [111, '一百十一'],
      [321, '三百二十一'],
      [999, '九百九十九'],
    ])('%i should return %s', (num, expected) => {
      expect(chineseNumInWords(num)).toBe(expected);
    });
  });

  describe('Thousands', () => {
    test.each<readonly [number, string]>([
      [1000, '一千'],
      [1001, '一千一'],
      [2001, '二千一'],
      [4321, '四千三百二十一'],
      [9999, '九千九百九十九'],
    ])('%i should return %s', (num, expected) => {
      expect(chineseNumInWords(num)).toBe(expected);
    });
  });

  describe('Millions', () => {
    test.each<readonly [number, string]>([
      [1000000, '一百万'],
      [2000001, '二百万一'],
      [1234567, '一百二十三万四千五百六十七'],
      [7654321, '七百六十五万四千三百二十一'],
      [9999999, '九百九十九万九千九百九十九'],
    ])('%i should return %s', (num, expected) => {
      expect(chineseNumInWords(num)).toBe(expected);
    });
  });

  describe('Hundred millions (亿)', () => {
    test.each<readonly [number, string]>([
      [100000000, '一亿'],
      [200000000, '二亿'],
      [1000000000, '十亿'],
      [100000000000, '一千亿'],
    ])('%i should return %s', (num, expected) => {
      expect(chineseNumInWords(num)).toBe(expected);
    });
  });

  describe('Edge cases', () => {
    test('should return "Not supported" for numbers in the gap range (10M-100M)', () => {
      expect(chineseNumInWords(10000000)).toBe('Not supported');
    });
  });
});
