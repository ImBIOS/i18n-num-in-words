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

  describe.todo('Billions', () => {
    test.each<readonly [number, string]>([
      [1000000000000, '一万亿'],
      [2000000000001, '二万亿一'],
      [1234567890123, '一万亿二十三百四十亿五六千七百八万九千一百二十三'],
      [9876543210987, '九万亿八千七百六十亿五亿四千二百一万九百八十七'],
      [9999999999999, '九万亿九百九十九亿九百九十九百九十九万九千九百九十九'],
    ])('%i should return %s', (num, expected) => {
      expect(chineseNumInWords(num)).toBe(expected);
    });
  });

  describe.todo('Trillions', () => {
    test.each<readonly [number, string]>([
      [1000000000000, '一万亿'],
      [2000000000001, '二万亿一'],
      [1234567890123, '一万亿二十三百四十亿五六千七百八万九千一百二十三'],
      [9876543210987, '九万亿八千七百六十亿五亿四千二百一万九百八十七'],
      [9999999999999, '九万亿九百九十九亿九百九十九百九十九万九千九百九十九'],
    ])('%i should return %s', (num, expected) => {
      expect(chineseNumInWords(num)).toBe(expected);
    });
  });
});
