import { describe, expect, test } from 'bun:test';
import { germanNumInWords } from './de';

describe.todo('German', () => {
  describe('Einzeldigit', () => {
    test.each<readonly [number, string]>([
      [0, 'null'],
      [1, 'eins'],
      [2, 'zwei'],
      [3, 'drei'],
      [4, 'vier'],
      [5, 'fünf'],
      [6, 'sechs'],
      [7, 'sieben'],
      [8, 'acht'],
      [9, 'neun'],
    ])('%i sollte %s zurückgeben', (num, expected) => {
      expect(germanNumInWords(num)).toBe(expected);
    });
  });

  describe('Zweistellige Zahlen', () => {
    test.each<readonly [number, string]>([
      [10, 'zehn'],
      [11, 'elf'],
      [12, 'zwölf'],
      [21, 'einundzwanzig'],
      [99, 'neunundneunzig'],
    ])('%i sollte %s zurückgeben', (num, expected) => {
      expect(germanNumInWords(num)).toBe(expected);
    });
  });

  describe('Dreistellige Zahlen', () => {
    test.each<readonly [number, string]>([
      [100, 'einhundert'],
      [101, 'einhunderteins'],
      [111, 'einhundertelf'],
      [321, 'dreihunderteinundzwanzig'],
      [999, 'neunhundertneunundneunzig'],
    ])('%i sollte %s zurückgeben', (num, expected) => {
      expect(germanNumInWords(num)).toBe(expected);
    });
  });

  describe('Tausender', () => {
    test.each<readonly [number, string]>([
      [1000, 'eintausend'],
      [1001, 'eintausendeins'],
      [2001, 'zweitausendeins'],
      [4321, 'viertausenddreihunderteinundzwanzig'],
      [9999, 'neuntausendneunhundertneunundneunzig'],
    ])('%i sollte %s zurückgeben', (num, expected) => {
      expect(germanNumInWords(num)).toBe(expected);
    });
  });

  describe('Millionen', () => {
    test.each<readonly [number, string]>([
      [1000000, 'eine Million'],
      [2000001, 'zwei Millionen eins'],
      [
        1234567,
        'eine Million zweihundertdreiundvierzigtausendfünfhundertsiebenundsechzig',
      ],
      [
        7654321,
        'sieben Millionen sechshundertvierundfünfzigtausenddreihunderteinundzwanzig',
      ],
      [
        9999999,
        'neun Millionen neunhundertneunundneunzigtausendneunhundertneunundneunzig',
      ],
    ])('%i sollte %s zurückgeben', (num, expected) => {
      expect(germanNumInWords(num)).toBe(expected);
    });
  });

  describe('Milliarden', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'eine Milliarde'],
      [2000000001, 'zwei Milliarden eins'],
      [
        1234567890,
        'eine Milliarde zweihundertdreiundvierzig Millionen fünfhundertsechsundachtzigtausendneunhundertneunzig',
      ],
      [
        9876543210,
        'neun Milliarden achthundertsiebenundsechzig Millionen fünfhundertvierundfünfzigtausendzweihundertzehn',
      ],
      [
        9999999999,
        'neun Milliarden neunhundertneunundneunzig Millionen neunhundertneunundneunzigtausendneunhundertneunundneunzig',
      ],
    ])('%i sollte %s zurückgeben', (num, expected) => {
      expect(germanNumInWords(num)).toBe(expected);
    });
  });

  describe('Billionen', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'eine Billion'],
      [2000000000001, 'zwei Billionen eins'],
      [
        1234567890123,
        'eine Billion zweihundertdreiundvierzig Milliarden fünfhundertsechsundachtzig Millionen neuntausendneunhundertdreiundzwanzig',
      ],
      [
        9876543210987,
        'neun Billionen achthundertsiebenundsechzig Milliarden fünfhundertvierundfünfzig Millionen dreihundertzehntausendneunhundertachtundsiebzig',
      ],
      [
        9999999999999,
        'neun Billionen neunhundertneunundneunzig Milliarden neunhundertneunundneunzig Millionen neuntausendneunhundertneunundneunzig',
      ],
    ])('%i sollte %s zurückgeben', (num, expected) => {
      expect(germanNumInWords(num)).toBe(expected);
    });
  });
});
