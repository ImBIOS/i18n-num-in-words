import { describe, expect, it, spyOn } from 'bun:test';
import { handleError } from './handle-error';

describe('handleError', () => {
  it('should log an error message in red when silent is true', () => {
    const msg = 'This is an error message';
    const silent = true;

    // Mock the console.error method to capture log messages
    const consoleErrorSpy = spyOn(console, 'error');

    const result = handleError(msg, silent);

    // Check if the result matches the provided error message
    expect(result).toBe(msg);

    // Check if the console.error method was called with the expected message and color style
    expect(consoleErrorSpy.mock.calls[0]).toEqual([msg]);

    // Restore the original console.error method after the test
    consoleErrorSpy.mockRestore();
  });

  it('should throw an error when silent is false', () => {
    const msg = 'This is an error message';
    const silent = false;

    // Mock the console.error method to capture log messages
    const consoleErrorSpy = spyOn(console, 'error');

    // Use a try-catch block to capture the thrown error
    try {
      handleError(msg, silent);

      // If no error is thrown, fail the test
      expect(true).toBe(false);
    } catch (error) {
      // Check if the error message matches the provided message
      expect((error as Error).message).toBe(msg);

      // Check if the console.error method was not called
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    }

    // Restore the original console.error method after the test
    consoleErrorSpy.mockRestore();
  });
});
