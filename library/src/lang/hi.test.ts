import { describe, expect, test } from 'bun:test';
import { hindiNumInWords } from './hi';

describe.todo('हिंदी', () => {
  describe('एक अंक', () => {
    test.each<readonly [number, string]>([
      [0, 'शून्य'],
      [1, 'एक'],
      [2, 'दो'],
      [3, 'तीन'],
      [4, 'चार'],
      [5, 'पाँच'],
      [6, 'छह'],
      [7, 'सात'],
      [8, 'आठ'],
      [9, 'नौ'],
    ])('%i को %s वापस करना चाहिए', (num, expected) => {
      expect(hindiNumInWords(num)).toBe(expected);
    });
  });

  describe('दो अंक', () => {
    test.each<readonly [number, string]>([
      [10, 'दस'],
      [11, 'ग्यारह'],
      [12, 'बारह'],
      [21, 'इक्कीस'],
      [99, 'नौंबे'],
    ])('%i को %s वापस करना चाहिए', (num, expected) => {
      expect(hindiNumInWords(num)).toBe(expected);
    });
  });

  describe('तीन अंक', () => {
    test.each<readonly [number, string]>([
      [100, 'सौ'],
      [101, 'सौ एक'],
      [111, 'सौ ग्यारह'],
      [321, 'तीन सौ इक्कीस'],
      [999, 'नौ सौ उन्नासी'],
    ])('%i को %s वापस करना चाहिए', (num, expected) => {
      expect(hindiNumInWords(num)).toBe(expected);
    });
  });

  describe('हजार', () => {
    test.each<readonly [number, string]>([
      [1000, 'एक हजार'],
      [1001, 'एक हजार एक'],
      [2001, 'दो हजार एक'],
      [4321, 'चार हजार तीन सौ इक्कीस'],
      [9999, 'नौ हजार नौ सौ उन्नासी'],
    ])('%i को %s वापस करना चाहिए', (num, expected) => {
      expect(hindiNumInWords(num)).toBe(expected);
    });
  });

  describe('मिलियन', () => {
    test.each<readonly [number, string]>([
      [1000000, 'एक मिलियन'],
      [2000001, 'दो मिलियन एक'],
      [1234567, 'एक मिलियन एक लाख तेईस हजार पाँच सौ सत्तासी'],
      [7654321, 'सात मिलियन छह लाख चौवन्न हजार तीन सौ इक्कीस'],
      [9999999, 'नौ मिलियन नौ लाख नौ सौ नौंबे हजार नौ सौ नौंबे'],
    ])('%i को %s वापस करना चाहिए', (num, expected) => {
      expect(hindiNumInWords(num)).toBe(expected);
    });
  });

  describe('बिलियन', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'एक बिलियन'],
      [2000000001, 'दो बिलियन एक'],
      [
        1234567890,
        'एक बिलियन बारह अरब पैंतालीस करोड़ चौवन्न लाख आठ हजार नौ सौ',
      ],
      [
        9876543210,
        'नौ बिलियन आठ सौ सत्तासी अरब पैंतालीस करोड़ तीन हजार दो सौ दस',
      ],
      [
        9999999999,
        'नौ बिलियन नौ सौ नौ अरब नौ सौ नौ करोड़ नौ सौ नौ लाख नौ सौ नौ हजार नौ सौ नौ',
      ],
    ])('%i को %s वापस करना चाहिए', (num, expected) => {
      expect(hindiNumInWords(num)).toBe(expected);
    });
  });
});
