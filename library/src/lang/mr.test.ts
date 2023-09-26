import { describe, expect, test } from 'bun:test';
import { marathiNumInWords } from './mr';

describe.todo('मराठी', () => {
  describe('एक अंक', () => {
    test.each<readonly [number, string]>([
      [0, 'शून्य'],
      [1, 'एक'],
      [2, 'दोन'],
      [3, 'तीन'],
      [4, 'चार'],
      [5, 'पाच'],
      [6, 'सहा'],
      [7, 'सात'],
      [8, 'आठ'],
      [9, 'नऊ'],
    ])('%i ने %s परत करावे', (num, expected) => {
      expect(marathiNumInWords(num)).toBe(expected);
    });
  });

  describe('दोन अंक', () => {
    test.each<readonly [number, string]>([
      [10, 'दहा'],
      [11, 'अकरा'],
      [12, 'बारा'],
      [21, 'एकवीस'],
      [99, 'नव्व्याण्णव'],
    ])('%i ने %s परत करावे', (num, expected) => {
      expect(marathiNumInWords(num)).toBe(expected);
    });
  });

  describe('तीन अंक', () => {
    test.each<readonly [number, string]>([
      [100, 'शंभर'],
      [101, 'शंभर एक'],
      [111, 'शंभर अकरा'],
      [321, 'तीनशे सहावे'],
      [999, 'नऊशे नव्व्याण्णव'],
    ])('%i ने %s परत करावे', (num, expected) => {
      expect(marathiNumInWords(num)).toBe(expected);
    });
  });

  describe('हजार', () => {
    test.each<readonly [number, string]>([
      [1000, 'हजार'],
      [1001, 'हजार एक'],
      [2001, 'दोन हजार एक'],
      [4321, 'चार हजार तीनशे एकराण्यात'],
      [9999, 'नऊ हजार नऊशे नव्व्याण्णव'],
    ])('%i ने %s परत करावे', (num, expected) => {
      expect(marathiNumInWords(num)).toBe(expected);
    });
  });

  describe('लाख', () => {
    test.each<readonly [number, string]>([
      [1000000, 'दहा लाख'],
      [2000001, 'दोन लाख एक'],
      [1234567, 'बारा लाख तीन शंभर चोवीस हजार पाचशे सत्त्याण्णव'],
      [7654321, 'सहा लाख पाचशे पाचवीस हजार चोवीस हजार तीनशे एकराण्यात'],
      [9999999, 'नऊ लाख नऊशे नव्व्याण्णव हजार नऊशे नव्व्याण्णव'],
    ])('%i ने %s परत करावे', (num, expected) => {
      expect(marathiNumInWords(num)).toBe(expected);
    });
  });

  describe('कोटी', () => {
    test.each<readonly [number, string]>([
      [10000000, 'दहा कोटी'],
      [20000001, 'दोन कोटी एक'],
      [
        1234567890,
        'बारा कोटी चौवन्न हजार चोवीस लाख सत्त्याण्णव हजार आठशे नव्व्याण्णव',
      ],
      [
        9876543210,
        'नऊ कोटी आठशे सत्त्याण्णव हजार चौवन्न लाख तीन लाख दोन हजार दहा',
      ],
      [
        9999999999,
        'नऊ कोटी नऊशे नव्व्याण्णव हजार नऊशे नव्व्याण्णव हजार नऊशे नव्व्याण्णव',
      ],
    ])('%i ने %s परत करावे', (num, expected) => {
      expect(marathiNumInWords(num)).toBe(expected);
    });
  });
});
