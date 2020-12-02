import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day2.txt').toString();

const day2 = () => {
  const lines = input.split("\n");
  
  let validPart1 = 0;

  lines.forEach(line => {
    const tokens = line.split(' ');
    const minMax = tokens[0];
    const [minStr, maxStr] = minMax.split('-');
    const min = parseInt(minStr);
    const max = parseInt(maxStr);

    const letter = tokens[1][0];
    const password = tokens[2];


    let repetitions = 0;
    for (let i = 0; i < password.length; i++) {
      const letterInPassword = password[i];
      if (letterInPassword === letter) {
        repetitions++;
      }
    }

    if (repetitions >= min && repetitions <= max) {
      validPart1++;
    }
  });

  let validPart2 = 0;

  lines.forEach(line => {
    const tokens = line.split(' ');
    const minMax = tokens[0];
    const [minStr, maxStr] = minMax.split('-');
    const min = parseInt(minStr);
    const max = parseInt(maxStr);

    const letter = tokens[1][0];
    const password = tokens[2];

    const condition1 = password[min - 1] === letter && password[max - 1] !== letter;
    const condition2 = password[min - 1] !== letter && password[max - 1] === letter;

    if (condition1 || condition2) {
      validPart2++;
    }
  });
  
  console.log({ validPart1, validPart2 });
};

day2();
