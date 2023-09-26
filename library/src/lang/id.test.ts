import { describe, expect, test } from 'bun:test';
import { indonesianNumInWords } from './id';

describe('Indonesian', () => {
  describe('Single digits', () => {
    test.each<readonly [number, string]>([
      [0, 'nol'],
      [1, 'satu'],
      [2, 'dua'],
      [3, 'tiga'],
      [4, 'empat'],
      [5, 'lima'],
      [6, 'enam'],
      [7, 'tujuh'],
      [8, 'delapan'],
      [9, 'sembilan'],
    ])('%i should return %s', (num, expected) => {
      expect(indonesianNumInWords(num)).toBe(expected);
    });
  });

  describe('Double digits', () => {
    test.each<readonly [number, string]>([
      [10, 'sepuluh'],
      [11, 'sebelas'],
      [12, 'dua belas'],
      [21, 'dua puluh satu'],
      [99, 'sembilan puluh sembilan'],
    ])('%i should return %s', (num, expected) => {
      expect(indonesianNumInWords(num)).toBe(expected);
    });
  });

  describe('Triple digits', () => {
    test.each<readonly [number, string]>([
      [100, 'seratus'],
      [101, 'seratus satu'],
      [111, 'seratus sebelas'],
      [321, 'tiga ratus dua puluh satu'],
      [999, 'sembilan ratus sembilan puluh sembilan'],
    ])('%i should return %s', (num, expected) => {
      expect(indonesianNumInWords(num)).toBe(expected);
    });
  });

  describe('Thousands', () => {
    test.each<readonly [number, string]>([
      [1000, 'seribu'],
      [1001, 'seribu satu'],
      [2001, 'dua ribu satu'],
      [4321, 'empat ribu tiga ratus dua puluh satu'],
      [9999, 'sembilan ribu sembilan ratus sembilan puluh sembilan'],
    ])('%i should return %s', (num, expected) => {
      expect(indonesianNumInWords(num)).toBe(expected);
    });
  });

  describe('Millions', () => {
    test.each<readonly [number, string]>([
      [1000000, 'satu juta'],
      [2000001, 'dua juta satu'],
      [
        1234567,
        'satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh',
      ],
      [
        7654321,
        'tujuh juta enam ratus lima puluh empat ribu tiga ratus dua puluh satu',
      ],
      [
        9999999,
        'sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(indonesianNumInWords(num)).toBe(expected);
    });
  });

  describe('Billions', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'satu miliar'],
      [2000000001, 'dua miliar satu'],
      [
        1234567890,
        'satu miliar dua ratus tiga puluh empat juta lima ratus enam puluh tujuh ribu delapan ratus sembilan puluh',
      ],
      [
        9876543210,
        'sembilan miliar delapan ratus tujuh puluh enam juta lima ratus empat puluh tiga ribu dua ratus sepuluh',
      ],
      [
        9999999999,
        'sembilan miliar sembilan ratus sembilan puluh sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(indonesianNumInWords(num)).toBe(expected);
    });
  });

  describe('Trillions', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'satu triliun'],
      [2000000000001, 'dua triliun satu'],
      [
        1234567890123,
        'satu triliun dua ratus tiga puluh empat miliar lima ratus enam puluh tujuh juta delapan ratus sembilan puluh ribu seratus dua puluh tiga',
      ],
      [
        9876543210987,
        'sembilan triliun delapan ratus tujuh puluh enam miliar lima ratus empat puluh tiga juta dua ratus sepuluh ribu sembilan ratus delapan puluh tujuh',
      ],
      [
        9999999999999,
        'sembilan triliun sembilan ratus sembilan puluh sembilan miliar sembilan ratus sembilan puluh sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan puluh sembilan',
      ],
    ])('%i should return %s', (num, expected) => {
      expect(indonesianNumInWords(num)).toBe(expected);
    });
  });
});
