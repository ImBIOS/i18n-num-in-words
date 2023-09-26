import { describe, expect, it, spyOn } from 'bun:test';
import { generateCacheKey } from './generate-cache-key';

describe('generateCacheKey', () => {
  it('should generate a cache key with the provided number and language', () => {
    const num = 42;
    const lang = 'en';
    const cacheKey = generateCacheKey(num, lang);

    // Check if the generated cache key matches the expected format
    expect(cacheKey).toMatch(/^\d+-[a-z]{2}$/);
  });

  it('should generate a cache key with debug message when debug is true', () => {
    const num = 42;
    const lang = 'en';
    const debug = true;

    // Mock the console.debug method to capture log messages
    const consoleDebugSpy = spyOn(console, 'debug');

    const cacheKey = generateCacheKey(num, lang, debug);

    // Check if the generated cache key matches the expected format
    expect(cacheKey).toMatch(/^\d+-[a-z]{2}$/);

    // Check if the console.debug method was called with the expected message
    expect(consoleDebugSpy.mock.calls[0]).toEqual([
      `[i18n-num-in-words] Generating cache key for ${num} in language ${lang}`,
    ]);

    // Restore the original console.debug method after the test
    consoleDebugSpy.mockRestore();
  });

  it('should generate a cache key without debug message when debug is not provided', () => {
    const num = 42;
    const lang = 'en';

    // Mock the console.debug method to capture log messages
    const consoleDebugSpy = spyOn(console, 'debug');

    const cacheKey = generateCacheKey(num, lang);

    // Check if the generated cache key matches the expected format
    expect(cacheKey).toMatch(/^\d+-[a-z]{2}$/);

    // Check if the console.debug method was not called
    expect(consoleDebugSpy).not.toHaveBeenCalled();

    // Restore the original console.debug method after the test
    consoleDebugSpy.mockRestore();
  });
});
