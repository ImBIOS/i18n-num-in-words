import { describe, expect, test } from 'bun:test';
import { englishNumInWords } from './en';

describe('English', () => {
  describe('Single digits', () => {
    test.each<readonly [number, string]>([
      [0, 'zero'],
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
      [4, 'four'],
      [5, 'five'],
      [6, 'six'],
      [7, 'seven'],
      [8, 'eight'],
      [9, 'nine'],
    ])('%i should return %s', (num, expected) => {
      expect(englishNumInWords(num)).toBe(expected);
    });
  });

  describe('Double digits', () => {
    test.each<readonly [number, string]>([
      [10, 'ten'],
      [11, 'eleven'],
      [12, 'twelve'],
      [21, 'twenty one'],
      [99, 'ninety nine'],
    ])('%i should return %s', (num, expected) => {
      expect(englishNumInWords(num)).toBe(expected);
    });
  });

  describe('Triple digits', () => {
    test.each<readonly [number, string]>([
      [100, 'one hundred'],
      [101, 'one hundred one'],
      [111, 'one hundred eleven'],
      [321, 'three hundred twenty one'],
      [999, 'nine hundred ninety nine'],
    ])('%i should return %s', (num, expected) => {
      expect(englishNumInWords(num)).toBe(expected);
    });
  });

  describe('Thousands', () => {
    test.each<readonly [number, string]>([
      [1000, 'one thousand'],
      [1001, 'one thousand one'],
      [2001, 'two thousand one'],
      [4321, 'four thousand three hundred twenty one'],
      [9999, 'nine thousand nine hundred ninety nine'],
    ])('%i should return %s', (num, expected) => {
      expect(englishNumInWords(num)).toBe(expected);
    });
  });

  describe('Millions', () => {
    test.each<readonly [number, string]>([
      [1000000, 'one million'],
      [2000001, 'two million one'],
      [
        1234567,
        'one million two hundred thirty four thousand five hundred sixty seven',
      ],
      [
        7654321,
        'seven million six hundred fifty four thousand three hundred twenty one',
      ],
      [
        9999999,
        'nine million nine hundred ninety nine thousand nine hundred ninety nine',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(englishNumInWords(num)).toBe(expected);
    });
  });

  describe('Billions', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'one billion'],
      [2000000001, 'two billion one'],
      [
        1234567890,
        'one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety',
      ],
      [
        9876543210,
        'nine billion eight hundred seventy six million five hundred forty three thousand two hundred ten',
      ],
      [
        9999999999,
        'nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(englishNumInWords(num)).toBe(expected);
    });
  });

  describe('Trillions', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'one trillion'],
      [2000000000001, 'two trillion one'],
      [
        1234567890123,
        'one trillion two hundred thirty four billion five hundred sixty seven million eight hundred ninety thousand one hundred twenty three',
      ],
      [
        9876543210987,
        'nine trillion eight hundred seventy six billion five hundred forty three million two hundred ten thousand nine hundred eighty seven',
      ],
      [
        9999999999999,
        'nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(englishNumInWords(num)).toBe(expected);
    });
  });
});
