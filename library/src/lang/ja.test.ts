import { describe, expect, test } from 'bun:test';
import { japaneseNumInWords } from './ja';

describe.todo('日本語', () => {
  describe('単一の数字', () => {
    test.each<readonly [number, string]>([
      [0, 'ゼロ'],
      [1, '一'],
      [2, '二'],
      [3, '三'],
      [4, '四'],
      [5, '五'],
      [6, '六'],
      [7, '七'],
      [8, '八'],
      [9, '九'],
    ])('%i は %s を返すべき', (num, expected) => {
      expect(japaneseNumInWords(num)).toBe(expected);
    });
  });

  describe('2桁の数字', () => {
    test.each<readonly [number, string]>([
      [10, '十'],
      [11, '十一'],
      [12, '十二'],
      [21, '二十一'],
      [99, '九十九'],
    ])('%i は %s を返すべき', (num, expected) => {
      expect(japaneseNumInWords(num)).toBe(expected);
    });
  });

  describe('3桁の数字', () => {
    test.each<readonly [number, string]>([
      [100, '百'],
      [101, '百一'],
      [111, '百十一'],
      [321, '三百二十一'],
      [999, '九百九十九'],
    ])('%i は %s を返すべき', (num, expected) => {
      expect(japaneseNumInWords(num)).toBe(expected);
    });
  });

  describe('千', () => {
    test.each<readonly [number, string]>([
      [1000, '千'],
      [1001, '千一'],
      [2001, '二千一'],
      [4321, '四千三百二十一'],
      [9999, '九千九百九十九'],
    ])('%i は %s を返すべき', (num, expected) => {
      expect(japaneseNumInWords(num)).toBe(expected);
    });
  });

  describe('百万', () => {
    test.each<readonly [number, string]>([
      [1000000, '百万'],
      [2000001, '二百万一'],
      [1234567, '百二十三万四千五百六十七'],
      [7654321, '七百六十五万四千三百二十一'],
      [9999999, '九百九十九万九千九百九十九'],
    ])('%i は %s を返すべき', (num, expected) => {
      expect(japaneseNumInWords(num)).toBe(expected);
    });
  });

  describe('十億', () => {
    test.each<readonly [number, string]>([
      [1000000000, '十億'],
      [2000000001, '二十億一'],
      [1234567890, '百二十三億四千五百六十七万八千九百'],
      [9876543210, '九十八億七千六百五十四万三千二百十'],
      [9999999999, '九十九億九千九百九十九万九千九百九十九'],
    ])('%i は %s を返すべき', (num, expected) => {
      expect(japaneseNumInWords(num)).toBe(expected);
    });
  });

  describe('兆', () => {
    test.each<readonly [number, string]>([
      [1000000000000, '兆'],
      [2000000000001, '二兆一'],
      [1234567890123, '千二百三十四兆五百六十七億八千九百十二万三百'],
      [9876543210987, '九千八百七十六兆五千四百三十二億一千九百八十七万'],
      [
        9999999999999,
        '九千九百九十九兆九千九百九十九億九千九百九十九万九千九百九十九',
      ],
    ])('%i は %s を返すべき', (num, expected) => {
      expect(japaneseNumInWords(num)).toBe(expected);
    });
  });
});
