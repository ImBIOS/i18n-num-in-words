import { describe, expect, test } from 'bun:test';
import { frenchNumInWords } from './fr';

describe.todo('Français', () => {
  describe('Chiffres simples', () => {
    test.each<readonly [number, string]>([
      [0, 'zéro'],
      [1, 'un'],
      [2, 'deux'],
      [3, 'trois'],
      [4, 'quatre'],
      [5, 'cinq'],
      [6, 'six'],
      [7, 'sept'],
      [8, 'huit'],
      [9, 'neuf'],
    ])('%i devrait retourner %s', (num, expected) => {
      expect(frenchNumInWords(num)).toBe(expected);
    });
  });

  describe('Chiffres doubles', () => {
    test.each<readonly [number, string]>([
      [10, 'dix'],
      [11, 'onze'],
      [12, 'douze'],
      [21, 'vingt et un'],
      [99, 'quatre-vingt-dix-neuf'],
    ])('%i devrait retourner %s', (num, expected) => {
      expect(frenchNumInWords(num)).toBe(expected);
    });
  });

  describe('Chiffres triples', () => {
    test.each<readonly [number, string]>([
      [100, 'cent'],
      [101, 'cent un'],
      [111, 'cent onze'],
      [321, 'trois cent vingt et un'],
      [999, 'neuf cent quatre-vingt-dix-neuf'],
    ])('%i devrait retourner %s', (num, expected) => {
      expect(frenchNumInWords(num)).toBe(expected);
    });
  });

  describe('Milliers', () => {
    test.each<readonly [number, string]>([
      [1000, 'mille'],
      [1001, 'mille un'],
      [2001, 'deux mille un'],
      [4321, 'quatre mille trois cent vingt et un'],
      [9999, 'neuf mille neuf cent quatre-vingt-dix-neuf'],
    ])('%i devrait retourner %s', (num, expected) => {
      expect(frenchNumInWords(num)).toBe(expected);
    });
  });

  describe('Millions', () => {
    test.each<readonly [number, string]>([
      [1000000, 'un million'],
      [2000001, 'deux millions un'],
      [
        1234567,
        'un million deux cent trente-quatre mille cinq cent soixante-sept',
      ],
      [
        7654321,
        'sept millions six cent cinquante-quatre mille trois cent vingt et un',
      ],
      [
        9999999,
        'neuf millions neuf cent quatre-vingt-dix-neuf mille neuf cent quatre-vingt-dix-neuf',
      ],
    ])('%i devrait retourner %s', (num, expected) => {
      expect(frenchNumInWords(num)).toBe(expected);
    });
  });

  describe('Milliards', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'un milliard'],
      [2000000001, 'deux milliards un'],
      [
        1234567890,
        'un milliard deux cent trente-quatre millions cinq cent soixante-sept mille huit cent quatre-vingt-dix',
      ],
      [
        9876543210,
        'neuf milliards huit cent soixante-seize millions cinq cent quarante-trois mille deux cent dix',
      ],
      [
        9999999999,
        'neuf milliards neuf cent quatre-vingt-dix-neuf millions neuf cent quatre-vingt-dix-neuf mille neuf cent quatre-vingt-dix-neuf',
      ],
    ])('%i devrait retourner %s', (num, expected) => {
      expect(frenchNumInWords(num)).toBe(expected);
    });
  });

  describe('Billions', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'un billion'],
      [2000000000001, 'deux billions un'],
      [
        1234567890123,
        'un billion deux cent trente-quatre milliards cinq cent soixante-sept millions huit cent quatre-vingt-dix mille cent vingt-trois',
      ],
      [
        9876543210987,
        'neuf billions huit cent soixante-seize milliards cinq cent quarante-trois millions deux cent dix mille neuf cent quatre-vingt-sept',
      ],
      [
        9999999999999,
        'neuf billions neuf cent quatre-vingt-dix-neuf milliards neuf cent quatre-vingt-dix-neuf millions neuf cent quatre-vingt-dix-neuf mille neuf cent quatre-vingt-dix-neuf',
      ],
    ])('%i devrait retourner %s', (num, expected) => {
      expect(frenchNumInWords(num)).toBe(expected);
    });
  });
});
