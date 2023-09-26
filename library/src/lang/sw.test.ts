import { describe, expect, test } from 'bun:test';
import { swahiliNumInWords } from './sw';

describe.todo('Kiswahili', () => {
  describe('Namba moja', () => {
    test.each<readonly [number, string]>([
      [0, 'sifuri'],
      [1, 'moja'],
      [2, 'mbili'],
      [3, 'tatu'],
      [4, 'nne'],
      [5, 'tano'],
      [6, 'sita'],
      [7, 'saba'],
      [8, 'nane'],
      [9, 'tisa'],
    ])('%i inapaswa kurudisha %s', (num, expected) => {
      expect(swahiliNumInWords(num)).toBe(expected);
    });
  });

  describe('Namba mbili', () => {
    test.each<readonly [number, string]>([
      [10, 'kumi'],
      [11, 'kumi na moja'],
      [12, 'kumi na mbili'],
      [21, 'ishirini na moja'],
      [99, 'tisini na tisa'],
    ])('%i inapaswa kurudisha %s', (num, expected) => {
      expect(swahiliNumInWords(num)).toBe(expected);
    });
  });

  describe('Namba tatu', () => {
    test.each<readonly [number, string]>([
      [100, 'mia moja'],
      [101, 'mia moja na moja'],
      [111, 'mia moja na kumi na moja'],
      [321, 'mia tatu na ishirini na moja'],
      [999, 'mia tisa na tisini na tisa'],
    ])('%i inapaswa kurudisha %s', (num, expected) => {
      expect(swahiliNumInWords(num)).toBe(expected);
    });
  });

  describe('Elfu', () => {
    test.each<readonly [number, string]>([
      [1000, 'elfu moja'],
      [1001, 'elfu moja na moja'],
      [2001, 'elfu mbili na moja'],
      [4321, 'elfu nne na mia tatu ishirini na moja'],
      [9999, 'elfu tisa na mia tisini na tisa'],
    ])('%i inapaswa kurudisha %s', (num, expected) => {
      expect(swahiliNumInWords(num)).toBe(expected);
    });
  });

  describe('Milioni', () => {
    test.each<readonly [number, string]>([
      [1000000, 'milioni moja'],
      [2000001, 'milioni mbili na moja'],
      [
        1234567,
        'milioni moja na mia mbili thelathini na nne elfu mia tano mia sitini na saba',
      ],
      [
        7654321,
        'milioni saba na mia sita thelathini na nne elfu mia tatu mia ishirini na moja',
      ],
      [
        9999999,
        'milioni tisa na mia tisa tisini na tisa elfu tisa na mia tisini na tisa',
      ],
    ])('%i inapaswa kurudisha %s', (num, expected) => {
      expect(swahiliNumInWords(num)).toBe(expected);
    });
  });

  describe('Bilioni', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'bilioni moja'],
      [2000000001, 'bilioni mbili na moja'],
      [
        1234567890,
        'bilioni moja na mia mbili thelathini na nne milioni mia tano mia sitini na saba elfu mia nane mia tisini',
      ],
      [
        9876543210,
        'bilioni tisa na mia nane thelathini na saba milioni mia sita mia tano mia arobaini na tatu elfu mia mbili mia kumi',
      ],
      [
        9999999999,
        'bilioni tisa na mia tisa tisini na tisa milioni tisa na mia tisini na tisa elfu tisa na mia tisini na tisa',
      ],
    ])('%i inapaswa kurudisha %s', (num, expected) => {
      expect(swahiliNumInWords(num)).toBe(expected);
    });
  });

  describe('Trilioni', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'trilioni moja'],
      [2000000000001, 'trilioni mbili na moja'],
      [
        1234567890123,
        'trilioni moja na mia mbili thelathini na nne bilioni mia tano mia sitini na saba milioni mia nane mia tisini elfu mia moja mia ishirini na tatu',
      ],
      [
        9876543210987,
        'trilioni tisa na mia nane thelathini na saba bilioni mia sita mia tano mia arobaini na tatu milioni mia mbili mia kumi elfu mia tisa mia themanini na saba',
      ],
      [
        9999999999999,
        'trilioni tisa na mia tisa tisini na tisa bilioni tisa na mia tisini na tisa milioni tisa na mia tisini na tisa elfu tisa na mia tisini na tisa',
      ],
    ])('%i inapaswa kurudisha %s', (num, expected) => {
      expect(swahiliNumInWords(num)).toBe(expected);
    });
  });
});
