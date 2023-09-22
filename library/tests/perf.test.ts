// TODO: Fix perf tests
// import { describe, expect, it } from 'bun:test';
// import { type Lang, type NumInWordsOptions } from 'mod';
// import { performance } from 'perf_hooks';

// //!SECTION - Create a time limit for the benchmark - START
// function calculateFactorial(n: number): number {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * calculateFactorial(n - 1);
//   }
// }

// function findHighestFactorialWithinTimeLimit(timeLimitMs: number): number {
//   let n = 0;
//   const startTime = Date.now();

//   while (true) {
//     calculateFactorial(n);
//     const currentTime = Date.now();

//     if (currentTime - startTime >= timeLimitMs) {
//       break; // Time limit exceeded
//     }

//     n++;
//   }

//   // We broke out of the loop due to the time limit, so n-1 is the highest factorial within the time limit.
//   return n - 1;
// }

// const timeLimitMs = 50; // 50 milliseconds
// const highestFactorial = findHighestFactorialWithinTimeLimit(timeLimitMs);
// const performanceFactor = 1 / highestFactorial; // reciprocal as the performance factor
// const timeLimit = performanceFactor * 2.5 * 100_000;
// //!SECTION - Create a time limit for the benchmark - END

// /** Helper function for benchmarking */
// const runBenchmark = (
//   fn: (num: number) => unknown,
//   label: string,
//   iterations: number
// ) => {
//   const start = performance.now();
//   for (let i = 0; i < iterations; ++i) {
//     fn(i);
//   }
//   const end = performance.now();
//   const result = end - start;
//   return result;
// };

// const runBenchmarkForLang = (
//   lang: Lang,
//   iterations: number,
//   options?: NumInWordsOptions<boolean>
// ) => {
//   return runBenchmark(
//     (i: number) => i18nNumInWords(i, { lang, ...options }),
//     `${lang} Performance`,
//     iterations
//   );
// };

// describe('Performance Tests', () => {
//   const languages: {
//     lang: Lang;
//     options?: NumInWordsOptions<boolean>;
//     todo?: boolean;
//   }[] = [
//     { lang: 'ar' },
//     { lang: 'en' },
//     { lang: 'id' },
//     { lang: 'zh' },
//     { lang: 'de', todo: true },
//     { lang: 'es', todo: true },
//     { lang: 'fr', todo: true },
//     { lang: 'hi', todo: true },
//     { lang: 'ja', todo: true },
//     { lang: 'mr', todo: true },
//     { lang: 'pt', todo: true },
//     { lang: 'ru', todo: true },
//     { lang: 'sw', todo: true },
//     { lang: 'ur', todo: true },
//   ];

//   languages.forEach(({ lang, options, todo }) => {
//     if (todo) {
//       it.todo(`should complete ${lang} within less than ${timeLimit}ms`);
//     } else {
//       it(`should complete ${lang} within less than ${timeLimit}ms`, () => {
//         const time = runBenchmarkForLang(lang, 100_000, options);
//         expect(time).toBeLessThan(timeLimit);
//       });
//     }
//   });
// });
