import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day1.txt').toString();
const SUM_MUST_BE = 2020;

const day1 = () => {
  const numbers = input.split("\n").map(number => parseInt(number));

  while (numbers.length > 0) {
    const number = numbers.pop()!;
  
    for (let i = 0; i < numbers.length; i++) {
      const number2 = numbers[i];
      const sum = number + number2;
      if (sum === SUM_MUST_BE) {
        const multiplication = number * number2;
        console.log(`${number} + ${number2} = ${sum} | ${number} * ${number2} = ${multiplication}`);
        return;
      }
    };
  }

  console.log('Did not find any match.');
};

day1();
