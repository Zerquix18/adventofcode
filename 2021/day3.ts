import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day3.txt').toString();

// this one ain't so elegant

const day3 = () => {
  const binaryStrings = input.split("\n");
  
  // part 1

  let gammaRate = '';
  let elipson = '';

  for (let i = 0; i < binaryStrings[0].length; i++) {
    let zeroes = 0;
    let ones = 0;

    for (let j = 0; j < binaryStrings.length; j++) {
      if (binaryStrings[j][i] === '0') {
        zeroes++;
      } else {
        ones++;
      }
    }

    if (zeroes > ones) {
      gammaRate += '0';
      elipson += '1';
    } else {
      gammaRate += '1';
      elipson += '0';
    }
  }

  const decimalGammaRate = parseInt(gammaRate, 2);
  const decimalElipson = parseInt(elipson, 2);

  const powerConsumption = decimalGammaRate * decimalElipson;

  console.log({ powerConsumption });

  // part 2

  let numbersForOxygenGenerator = binaryStrings;
  for (let i = 0; i < binaryStrings[0].length; i++) {
    const zeroes = [];
    const ones = [];

    for (let j = 0; j < numbersForOxygenGenerator.length; j++) {
      if (numbersForOxygenGenerator[j][i] === '0') {
        zeroes.push(numbersForOxygenGenerator[j]);
      } else {
        ones.push(numbersForOxygenGenerator[j]);
      }
    }

    if (zeroes.length > ones.length) {
      numbersForOxygenGenerator = zeroes;
    } else {
      numbersForOxygenGenerator = ones;
    }

    if (numbersForOxygenGenerator.length === 1) {
      break;
    }
  }

  const oxygenGeneratorRating = parseInt(numbersForOxygenGenerator[0], 2);

  let numbersForCo2Scrabbing = binaryStrings;
  for (let i = 0; i < binaryStrings[0].length; i++) {
    const zeroes = [];
    const ones = [];

    for (let j = 0; j < numbersForCo2Scrabbing.length; j++) {
      if (numbersForCo2Scrabbing[j][i] === '0') {
        zeroes.push(numbersForCo2Scrabbing[j]);
      } else {
        ones.push(numbersForCo2Scrabbing[j]);
      }
    }

    if (zeroes.length > ones.length) {
      numbersForCo2Scrabbing = ones;
    } else {
      numbersForCo2Scrabbing = zeroes;
    }

    if (numbersForCo2Scrabbing.length === 1) {
      break;
    }
  }

  const co2Rating = parseInt(numbersForCo2Scrabbing[0], 2);

  const lifeSupportRating = oxygenGeneratorRating * co2Rating;
  console.log({ lifeSupportRating });
};

day3();
