import { describe, expect, test } from 'bun:test';
import { portugueseNumInWords } from './pt';

describe.todo('Português', () => {
  describe('Dígitos individuais', () => {
    test.each<readonly [number, string]>([
      [0, 'zero'],
      [1, 'um'],
      [2, 'dois'],
      [3, 'três'],
      [4, 'quatro'],
      [5, 'cinco'],
      [6, 'seis'],
      [7, 'sete'],
      [8, 'oito'],
      [9, 'nove'],
    ])('%i deve retornar %s', (num, expected) => {
      expect(portugueseNumInWords(num)).toBe(expected);
    });
  });

  describe('Dígitos duplos', () => {
    test.each<readonly [number, string]>([
      [10, 'dez'],
      [11, 'onze'],
      [12, 'doze'],
      [21, 'vinte e um'],
      [99, 'noventa e nove'],
    ])('%i deve retornar %s', (num, expected) => {
      expect(portugueseNumInWords(num)).toBe(expected);
    });
  });

  describe('Dígitos triplos', () => {
    test.each<readonly [number, string]>([
      [100, 'cem'],
      [101, 'cento e um'],
      [111, 'cento e onze'],
      [321, 'trezentos e vinte e um'],
      [999, 'novecentos e noventa e nove'],
    ])('%i deve retornar %s', (num, expected) => {
      expect(portugueseNumInWords(num)).toBe(expected);
    });
  });

  describe('Milhares', () => {
    test.each<readonly [number, string]>([
      [1000, 'mil'],
      [1001, 'mil e um'],
      [2001, 'dois mil e um'],
      [4321, 'quatro mil trezentos e vinte e um'],
      [9999, 'nove mil novecentos e noventa e nove'],
    ])('%i deve retornar %s', (num, expected) => {
      expect(portugueseNumInWords(num)).toBe(expected);
    });
  });

  describe('Milhões', () => {
    test.each<readonly [number, string]>([
      [1000000, 'um milhão'],
      [2000001, 'dois milhões e um'],
      [
        1234567,
        'um milhão duzentos e trinta e quatro mil quinhentos e sessenta e sete',
      ],
      [
        7654321,
        'sete milhões seiscentos e cinquenta e quatro mil trezentos e vinte e um',
      ],
      [
        9999999,
        'nove milhões novecentos e noventa e nove mil novecentos e noventa e nove',
      ],
    ])('%i deve retornar %s', (num, expected) => {
      expect(portugueseNumInWords(num)).toBe(expected);
    });
  });

  describe('Bilhões', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'um bilhão'],
      [2000000001, 'dois bilhões e um'],
      [
        1234567890,
        'um bilhão duzentos e trinta e quatro milhões quinhentos e sessenta e sete mil oitocentos e noventa',
      ],
      [
        9876543210,
        'nove bilhões oitocentos e setenta e seis milhões quinhentos e quarenta e três mil duzentos e dez',
      ],
      [
        9999999999,
        'nove bilhões novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove',
      ],
    ])('%i deve retornar %s', (num, expected) => {
      expect(portugueseNumInWords(num)).toBe(expected);
    });
  });

  describe('Trilhões', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'um trilhão'],
      [2000000000001, 'dois trilhões e um'],
      [
        1234567890123,
        'um trilhão duzentos e trinta e quatro bilhões quinhentos e sessenta e sete milhões oitocentos e noventa mil cento e vinte e três',
      ],
      [
        9876543210987,
        'nove trilhões oitocentos e setenta e seis bilhões quinhentos e quarenta e três milhões duzentos e dez mil novecentos e oitenta e sete',
      ],
      [
        9999999999999,
        'nove trilhões novecentos e noventa e nove bilhões novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove',
      ],
    ])('%i deve retornar %s', (num, expected) => {
      expect(portugueseNumInWords(num)).toBe(expected);
    });
  });
});
