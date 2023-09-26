import { describe, expect, test } from 'bun:test';
import { spanishNumInWords } from './es';

describe.todo('Español', () => {
  describe('Dígitos individuales', () => {
    test.each<readonly [number, string]>([
      [0, 'cero'],
      [1, 'uno'],
      [2, 'dos'],
      [3, 'tres'],
      [4, 'cuatro'],
      [5, 'cinco'],
      [6, 'seis'],
      [7, 'siete'],
      [8, 'ocho'],
      [9, 'nueve'],
    ])('%i debería devolver %s', (num, expected) => {
      expect(spanishNumInWords(num)).toBe(expected);
    });
  });

  describe('Doble dígito', () => {
    test.each<readonly [number, string]>([
      [10, 'diez'],
      [11, 'once'],
      [12, 'doce'],
      [21, 'veintiuno'],
      [99, 'noventa y nueve'],
    ])('%i debería devolver %s', (num, expected) => {
      expect(spanishNumInWords(num)).toBe(expected);
    });
  });

  describe('Triple dígito', () => {
    test.each<readonly [number, string]>([
      [100, 'cien'],
      [101, 'ciento uno'],
      [111, 'ciento once'],
      [321, 'trescientos veintiuno'],
      [999, 'novecientos noventa y nueve'],
    ])('%i debería devolver %s', (num, expected) => {
      expect(spanishNumInWords(num)).toBe(expected);
    });
  });

  describe('Miles', () => {
    test.each<readonly [number, string]>([
      [1000, 'mil'],
      [1001, 'mil uno'],
      [2001, 'dos mil uno'],
      [4321, 'cuatro mil trescientos veintiuno'],
      [9999, 'nueve mil novecientos noventa y nueve'],
    ])('%i debería devolver %s', (num, expected) => {
      expect(spanishNumInWords(num)).toBe(expected);
    });
  });

  describe('Millones', () => {
    test.each<readonly [number, string]>([
      [1000000, 'un millón'],
      [2000001, 'dos millones uno'],
      [
        1234567,
        'un millón doscientos treinta y cuatro mil quinientos sesenta y siete',
      ],
      [
        7654321,
        'siete millones seiscientos cincuenta y cuatro mil trescientos veintiuno',
      ],
      [
        9999999,
        'nueve millones novecientos noventa y nueve mil novecientos noventa y nueve',
      ],
    ])('%i debería devolver %s', (num, expected) => {
      expect(spanishNumInWords(num)).toBe(expected);
    });
  });

  describe('Miles de millones', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'mil millones'],
      [2000000001, 'dos mil millones uno'],
      [
        1234567890,
        'mil doscientos treinta y cuatro millones quinientos sesenta y siete mil ochocientos noventa',
      ],
      [
        9876543210,
        'nueve mil ochocientos setenta y seis millones quinientos cuarenta y tres mil doscientos diez',
      ],
      [
        9999999999,
        'nueve mil novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve',
      ],
    ])('%i debería devolver %s', (num, expected) => {
      expect(spanishNumInWords(num)).toBe(expected);
    });
  });

  describe('Billones', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'un billón'],
      [2000000000001, 'dos billones uno'],
      [
        1234567890123,
        'un billón doscientos treinta y cuatro mil quinientos sesenta y siete billones ochocientos noventa mil ciento veintitrés',
      ],
      [
        9876543210987,
        'nueve billones ochocientos setenta y seis mil quinientos cuarenta y tres billones doscientos diez mil novecientos ochenta y siete',
      ],
      [
        9999999999999,
        'nueve billones novecientos noventa y nueve mil novecientos noventa y nueve billones novecientos noventa y nueve mil novecientos noventa y nueve',
      ],
    ])('%i debería devolver %s', (num, expected) => {
      expect(spanishNumInWords(num)).toBe(expected);
    });
  });
});
