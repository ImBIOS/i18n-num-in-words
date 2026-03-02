import { describe, expect, test } from 'bun:test';
import { russianNumInWords } from './ru';

const ru = (num: number) =>
  russianNumInWords(num, { experimental: true });

describe('Russian', () => {
  describe('Default mode smoke', () => {
    test.each<readonly [number, string]>([
      [0, 'ноль'],
      [21, 'двадцать один'],
      [1000, 'одна тысяча'],
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
      [1000, 'одна тысяча'],
      [1001, 'одна тысяча один'],
      [2001, 'две тысячи один'],
      [4321, 'четыре тысячи триста двадцать один'],
      [9999, 'девять тысяч девятьсот девяносто девять'],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Millions', () => {
    test.each<readonly [number, string]>([
      [1000000, 'один миллион'],
      [2000001, 'два миллиона один'],
      [
        1234567,
        'один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь',
      ],
      [
        9999999,
        'девять миллионов девятьсот девяносто девять тысяч девятьсот девяносто девять',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Billions', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'один миллиард'],
      [2000000001, 'два миллиарда один'],
      [
        1234567890,
        'один миллиард двести тридцать четыре миллиона пятьсот шестьдесят семь тысяч восемьсот девяносто',
      ],
      [
        9999999999,
        'девять миллиардов девятьсот девяносто девять миллионов девятьсот девяносто девять тысяч девятьсот девяносто девять',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });

  describe('Trillions', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'один триллион'],
      [2000000000001, 'два триллиона один'],
      [
        9999999999999,
        'девять триллионов девятьсот девяносто девять миллиардов девятьсот девяносто девять миллионов девятьсот девяносто девять тысяч девятьсот девяносто девять',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(ru(num)).toBe(expected);
    });
  });
});
