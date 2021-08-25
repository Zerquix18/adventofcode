import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day1.txt').toString();

const part1 = () => {
  let floor = 0;

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (letter === '(') {
      floor++;
    } else {
      floor--;
    }
  }

  console.log({ floor });
};

const part2 = () => {
  let floor = 0;
  let position = 0;

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (letter === '(') {
      floor++;
    } else {
      floor--;
    }

    if (floor === -1) {
      position = i + 1;
      break
    }
  }

  console.log({ position });
};

part1();
part2();
