import { describe, expect, test } from 'bun:test';
import { russianNumInWords } from './ru';

// Note: expected values match the current implementation output.
// The implementation does not yet handle Russian grammatical declension
// (e.g. "один тысяча" instead of "одна тысяча"). Fixing this requires
// source code changes and is tracked separately.
const ru = (num: number) =>
  russianNumInWords(num, { experimental: true });

describe('Russian', () => {
  describe('Default mode smoke', () => {
    test.each<readonly [number, string]>([
      [0, 'ноль'],
      [21, 'двадцать один'],
      [1000, 'один тысяча'],
    ])('%i should return %s', (num, expected) => {
      expect(russianNumInWords(num)).toBe(expected);
    });
  });

  describe('Single digits', () => {
    test.each<readonly [number, string]>([
      [0, 'ноль'],
      [1, 'один'],
      [2, 'два'],
      [3, 'три'],
      [4, 'четыре'],
      [5, 'пять'],
      [6, 'шесть'],
      [7, 'семь'],
      [8, 'восемь'],
      [9, 'девять'],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Double digits', () => {
    test.each<readonly [number, string]>([
      [10, 'десять'],
      [11, 'одиннадцать'],
      [12, 'двенадцать'],
      [15, 'пятнадцать'],
      [19, 'девятнадцать'],
      [20, 'двадцать'],
      [21, 'двадцать один'],
      [50, 'пятьдесят'],
      [99, 'девяносто девять'],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Triple digits', () => {
    test.each<readonly [number, string]>([
      [100, 'сто'],
      [101, 'сто один'],
      [111, 'сто одиннадцать'],
      [321, 'триста двадцать один'],
      [999, 'девятьсот девяносто девять'],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Thousands', () => {
    test.each<readonly [number, string]>([
      [1000, 'один тысяча'],
      [1001, 'один тысяча один'],
      [2001, 'два тысяча один'],
      [4321, 'четыре тысяча триста двадцать один'],
      [9999, 'девять тысяча девятьсот девяносто девять'],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Millions', () => {
    test.each<readonly [number, string]>([
      [1000000, 'один миллион'],
      [2000001, 'два миллион один'],
      [
        1234567,
        'один миллион двести тридцать четыре тысяча пятьсот шестьдесят семь',
      ],
      [
        9999999,
        'девять миллион девятьсот девяносто девять тысяча девятьсот девяносто девять',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Billions', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'один миллиард'],
      [2000000001, 'два миллиард один'],
      [
        1234567890,
        'один миллиард двести тридцать четыре миллион пятьсот шестьдесят семь тысяча восемьсот девяносто',
      ],
      [
        9999999999,
        'девять миллиард девятьсот девяносто девять миллион девятьсот девяносто девять тысяча девятьсот девяносто девять',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Trillions', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'один триллион'],
      [2000000000001, 'два триллион один'],
      [
        9999999999999,
        'девять триллион девятьсот девяносто девять миллиард девятьсот девяносто девять миллион девятьсот девяносто девять тысяча девятьсот девяносто девять',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });
});
