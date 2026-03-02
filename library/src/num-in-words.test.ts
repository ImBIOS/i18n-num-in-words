import { describe, expect, it, spyOn, afterEach, afterAll } from 'bun:test';
import { numInWords } from './num-in-words';

describe('numInWords', () => {
  const errorSpy = spyOn(console, 'error');

  afterEach(() => {
    errorSpy.mockReset();
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  it('should convert numbers to English words', () => {
    expect(numInWords(1, { lang: 'en' })).toBe('one');
    expect(numInWords(42, { lang: 'en' })).toBe('forty two');
  });

  it('should convert numbers to Indonesian words', () => {
    expect(numInWords(1, { lang: 'id' })).toBe('satu');
    expect(numInWords(42, { lang: 'id' })).toBe('empat puluh dua');
  });

  it('should return error message for unsupported languages (silent mode)', () => {
    const result = numInWords(1, { lang: 'de', silent: true });
    expect(result).toBe('Unsupported language or not stable yet: de');
  });

  it('should throw for unsupported languages when silent is false', () => {
    expect(() =>
      numInWords(1, { lang: 'fr', silent: false })
    ).toThrow('Unsupported language or not stable yet: fr');
  });
});
