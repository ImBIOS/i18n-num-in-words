import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  mock,
  spyOn,
  type Mock,
} from 'bun:test';
import { numInWordsFactory } from './num-in-words-factory';

describe('numInWordsFactory', () => {
  type ConsoleChildSpy = Mock<{
    (...data: unknown[]): void;
    (message?: unknown, ...optionalParams: unknown[]): void;
  }>;

  // Mock console.warn and console.debug
  let warnSpy: ConsoleChildSpy;
  let debugSpy: ConsoleChildSpy;

  beforeEach(() => {
    warnSpy = spyOn(console, 'warn');
    debugSpy = spyOn(console, 'debug');
  });

  afterEach(() => {
    warnSpy.mockRestore();
    debugSpy.mockRestore();
  });

  it('should return a function when called', () => {
    const lang = 'en';
    const fn = (num: number) => `${num}`;
    const factory = numInWordsFactory(fn, { lang });
    expect(typeof factory).toBe('function');
  });

  it('should warn when experimental is true', () => {
    const lang = 'en';
    const fn = () => `one`;
    const factory = numInWordsFactory(fn, { lang });

    factory(1, { experimental: true });

    expect(warnSpy).toHaveBeenCalled();
  });

  it('should handle experimental false and non-stable status', () => {
    const lang = 'en';
    const fn = () => `two`;
    const factory = numInWordsFactory(fn, { lang, status: 'alpha' });

    const result = factory(2, {
      experimental: false,
    });

    expect(result).toBe(
      `The ${fn.name} (${lang}) feature is not stable yet. Please enable the experimental flag to use it.`
    );
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it('should handle experimental false and stable status', () => {
    const staticNum = 3;
    const staticWord = 'three';
    const lang = 'en';
    const fn = () => staticWord;
    const factory = numInWordsFactory(fn, { lang, status: 'stable' });

    const result = factory(staticNum, {
      experimental: false,
    });

    expect(result).toBe(staticWord);
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it('should handle experimental false and default status', () => {
    const lang = 'en';
    const fn = () => `four`;
    const factory = numInWordsFactory(fn, { lang });

    const result = factory(4, { experimental: false });

    expect(result).toBe(
      `The ${fn.name} (${lang}) feature is not stable yet. Please enable the experimental flag to use it.`
    );
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it('should return an error when experimental false and non-stable status', () => {
    const lang = 'en';
    const fn = () => 'five';
    const factory = numInWordsFactory(fn, { lang });

    const result = factory(5, {
      experimental: false,
    });

    expect(result).toBe(
      `The ${fn.name} (${lang}) feature is not stable yet. Please enable the experimental flag to use it.`
    );
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it('should handle large numbers', () => {
    const lang = 'en';
    const fn = (num: number) => `${num}`;
    const factory = numInWordsFactory(fn, { lang });

    const result = factory(Number.MAX_SAFE_INTEGER + 1);

    expect(result).toBe(
      'The number 9007199254740992 is too large to be converted.'
    );
  });

  it('should handle memoization', () => {
    const staticNum = 6;
    const staticWord = 'six';
    const lang = 'en';
    const fn = mock(() => staticWord);
    const factory = numInWordsFactory(fn, { lang });

    let res = factory(staticNum);

    // Call the factory again with the same number
    res = factory(staticNum);

    expect(res).toBe(staticWord);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should handle debug mode', () => {
    const lang = 'en';
    const fn = () => 'seven';
    const factory = numInWordsFactory(fn, { lang });

    factory(7, { debug: true });

    expect(debugSpy).toHaveBeenCalled();
  });

  it('should output debug message when debug is true, memoize is true, and cache is hit', () => {
    const staticNum = 8;
    const lang = 'en';
    const fn = mock(() => 'eight');
    const factory = numInWordsFactory(fn, { lang });

    // Call the factory twice with the same number
    factory(staticNum, { debug: true });
    factory(staticNum, { debug: true });

    expect(fn).toHaveBeenCalledTimes(1);
    expect(debugSpy).toHaveBeenCalledTimes(3);
  });
});
