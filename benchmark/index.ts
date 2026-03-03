import { numInWords } from 'i18n-num-in-words';
import numberToWords from 'number-to-words';

// Suppress debug output
const originalDebug = console.debug;
console.debug = () => {};

const ITERATIONS = 100000;

// Test data - various number ranges
const testCases = [
  0, 1, 5, 10, 15, 21, 99, 100, 101, 999, 1000, 1001, 9999, 10000, 100000,
  1000000, 10000000, 100000000, 1000000000, 1000000000000,
];

console.log('=== Benchmark: i18n-num-in-words vs number-to-words ===\n');

// Warm up
for (let i = 0; i < 1000; i++) {
  testCases.forEach((n) => {
    numInWords(n, { lang: 'en' });
    numberToWords.toWords(n);
  });
}

// Benchmark i18n-num-in-words
const i18nStart = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  testCases.forEach((n) => {
    numInWords(n, { lang: 'en' });
  });
}
const i18nTime = performance.now() - i18nStart;

// Benchmark number-to-words
const ntwStart = performance.now();
for (let i = 0; i < ITERATIONS; i++) {
  testCases.forEach((n) => {
    numberToWords.toWords(n);
  });
}
const ntwTime = performance.now() - ntwStart;

console.log(
  `i18n-num-in-words: ${i18nTime.toFixed(2)}ms for ${ITERATIONS * testCases.length} conversions`
);
console.log(
  `number-to-words:    ${ntwTime.toFixed(2)}ms for ${ITERATIONS * testCases.length} conversions`
);
console.log(`Ratio: ${(i18nTime / ntwTime).toFixed(2)}x`);

// Also test other languages
console.log('\n=== Other Languages (i18n-num-in-words) ===\n');

const languages = ['en', 'id'];
for (const lang of languages) {
  const start = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    testCases.forEach((n) => {
      numInWords(n, { lang: lang as any });
    });
  }
  const time = performance.now() - start;
  console.log(`${lang}: ${time.toFixed(2)}ms`);
}

// Test memory usage (bundle size comparison)
console.log('\n=== Bundle Size ===\n');
console.log('i18n-num-in-words (ESM): ~10.4KB');
console.log('number-to-words (UMD): ~16KB');

// Restore console.debug
console.debug = originalDebug;
