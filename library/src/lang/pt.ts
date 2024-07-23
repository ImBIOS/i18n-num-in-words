import { numInWordsFactory } from '~/utils/num-in-words-factory';

const portugueseMegasSingular = ['', 'mil', 'milhão', 'mil milhões', 'bilião'];
const portugueseMegasPlural = ['', 'mil', 'milhões', 'mil milhões', 'bilhões'];
const portugueseUnits = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
const portugueseHundreds = ['', 'cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos', 'cento'];
const portugueseTens = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const portugueseTeens = ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezasseis', 'dezasete', 'dezoito', 'dezanove'];

function integerToTriplets(input: number): number[] {
  const triplets: number[] = [];
  while (input > 0) {
    triplets.push(input % 1000);
    input = Math.floor(input / 1000);
  }
  return triplets;
}


const pt = (num: number): string => {
  let words: string[] = [];

  if (num < 0) {
    words.push('menos');
    num *= -1;
  }

  const triplets = integerToTriplets(num);
  if (triplets.length === 0) {
    return 'zero';
  }

  for (let idx = triplets.length - 1; idx >= 0; idx--) {
    const triplet = triplets[idx] as number

    if (triplet === 0) {
      continue;
    }

    const hundreds = Math.floor((triplet) / 100) % 10;
    const tens = Math.floor(triplet / 10) % 10;
    const units = triplet % 10;

    if (hundreds > 0 && units === 0 && tens === 0) {
      const word = idx === 0 && words.length !== 0
        ? `e ${portugueseHundreds[hundreds]}`
        : `${portugueseHundreds[hundreds]}`;
      words.push(word);
    } else if (hundreds > 0) {
      const hundredWord = hundreds === 1 ? portugueseHundreds[10] : portugueseHundreds[hundreds];
      words.push(`${hundredWord} e`);
    }

    if (tens === 0 && units === 0) {
      continue;
    }

    if (tens === 0) {
      words.push(portugueseUnits[units] as string);
    } else if (tens === 1) {
      words.push(portugueseTeens[units] as string);
    } else {
      const word = units > 0
        ? `${portugueseTens[tens]} e ${portugueseUnits[units]}`
        : `${portugueseTens[tens]}`;
      words.push(word);
    }

    const mega = triplet === 1 ? portugueseMegasSingular[idx] : portugueseMegasPlural[idx];
    if (mega) {
      if (idx === 4 && triplets.slice(0, triplets.length - 1).reduce((sum, num) => sum + num, 0) !== 0) {
        words.push('um');
      } else if (idx === 1 && portugueseUnits[idx] === words[0]) {
        words.shift();
      }
      words.push(mega);
    }
  }

  return words.join(' ');
};

export const portugueseNumInWords = numInWordsFactory(pt, {
  lang: 'pt',
  status: 'beta',
});
