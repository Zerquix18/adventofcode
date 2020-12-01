import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day1.txt').toString();
const SUM_MUST_BE = 2020;

const day1 = () => {
  const numbers = input.split("\n").map(number => parseInt(number));

  // part 1
  const numbersPart1 = [...numbers];

  while (numbersPart1.length > 0) {
    const number = numbersPart1.pop()!;
  
    for (let i = 0; i < numbersPart1.length; i++) {
      const number2 = numbersPart1[i];
      const sum = number + number2;
      if (sum === SUM_MUST_BE) {
        const multiplication = number * number2;
        console.log(`${number} + ${number2} = ${sum} | ${number} * ${number2} = ${multiplication}`);
        break;
      }
    };
  }

  // part 2
  const numbersPart2 = [...numbers];

  while (numbersPart2.length > 0) {
    const number = numbersPart2.pop()!;
    const numbers2 = [...numbersPart2];

    while (numbers2.length > 0) {
      const number2 = numbers2.pop()!;

      for (let j = 0; j < numbers2.length; j++) {
        const number3 = numbers2[j];
        const sum = number + number2 + number3;
        if (sum === SUM_MUST_BE) {
          const multiplication = number * number2 * number3;
          console.log(`${number} + ${number2} + ${number3} = ${sum} | ${number} * ${number2} * ${number3} = ${multiplication}`);
          break;
        }
      }
    }
  }
};

day1();
