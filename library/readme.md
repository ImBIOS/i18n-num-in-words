# i18n-num-in-words

## Convert Numbers to Words in Multiple Languages

A small, zero-dependency JavaScript library for converting numbers to words in multiple languages. Optimized for both Node.js and browser environments. Star us on GitHub for more updates:

[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/i18n-num-in-words)
[![NPM Downloads](https://img.shields.io/npm/dm/i18n-num-in-words?&style=flat-square)](https://www.npmjs.com/package/i18n-num-in-words)
[![GitHub stars](https://img.shields.io/github/stars/ImBIOS/i18n-num-in-words.svg?style=social)](https://github.com/ImBIOS/i18n-num-in-words)

- [i18n-num-in-words](#i18n-num-in-words)
  - [Convert Numbers to Words in Multiple Languages](#convert-numbers-to-words-in-multiple-languages)
  - [Features](#features)
  - [Installation](#installation)
    - [npm](#npm)
    - [yarn](#yarn)
    - [pnpm](#pnpm)
    - [bun](#bun)
  - [Usage Example](#usage-example)
    - [Indonesian](#indonesian)
    - [English](#english)
    - [Arabic](#arabic)

## Features

- **Internationalized**: 95% of the world speaks languages other than English. We got you covered.
- **Fully type safe**: Leverage TypeScript's type inference and static type safety.
- **Small bundle size**: Zero dependencies make `i18n-num-in-words` lightweight.
- **Test Coverage**: Nearly 100% test coverage guarantees reliability.
- **Tree-shaking**: Import only the languages you use to optimize your bundle size.

## Installation

To start, choose the package manager you are most comfortable with:

### npm

```sh
npm install i18n-num-in-words
```

### yarn

```sh
yarn add i18n-num-in-words
```

### pnpm

```sh
pnpm add i18n-num-in-words
```

### bun

```sh
bun add i18n-num-in-words
```

## Usage Example

To convert numbers to words, first import the relevant function from the package.

### Indonesian

```ts
import { indonesianNumInWords } from 'i18n-num-in-words';
console.log(indonesianNumInWords(1234567890));
```

Outputs: `'satu miliar dua ratus tiga puluh empat juta lima ratus enam puluh tujuh ribu delapan ratus sembilan puluh'`

### English

```ts
import { englishNumInWords } from 'i18n-num-in-words';
console.log(englishNumInWords(1234567890));
```

Outputs: `'one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety'`

### Arabic

```ts
import { arabicNumInWords } from 'i18n-num-in-words';
console.log(arabicNumInWords(1234567890));
```

Outputs: `'مليار واحد ومائتان وأربعة وثلاثون مليون وخمسمائة وستة وسبعون ألف وثمانمائة وتسعون'`

For details, check out our [full documentation](#).

---

Feel free to star us on GitHub and contribute: [i18n-num-in-words GitHub Repo](https://github.com/ImBIOS/i18n-num-in-words)
