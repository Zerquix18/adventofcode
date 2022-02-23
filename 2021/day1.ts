import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day1.txt').toString();

const day1 = () => {
  const numbers = input.split("\n").map(number => parseInt(number));

  // part 1

  const increases = numbers.reduce((total, currentNumber, index, array) => {
    if (index === 0) {
      return total;
    }

    const previousNumber = array[index - 1];

    if (previousNumber < currentNumber) {
      total++;
    }

    return total;
  }, 0);

  console.log({ increases });
  
  // part 2

  const windows = numbers.reduce<number[]>((windows, current, index, array) => {
    if (index >= (array.length - 2)) {
      return windows;
    }

    const nextThreeSum = numbers.slice(index, index + 3).reduce((sum, current) => sum + current, 0);
    windows.push(nextThreeSum);
    return windows;
  }, []);

  const increases2 = windows.reduce((total, currentNumber, index, array) => {
    if (index === 0) {
      return total;
    }

    const previousNumber = array[index - 1];

    if (previousNumber < currentNumber) {
      total++;
    }

    return total;
  }, 0);

  console.log({ increases2 })
};

day1();
