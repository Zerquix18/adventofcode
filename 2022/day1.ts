import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day1.txt').toString();

function day1() {
  const elvs = input.split("\n\n").map(elv => elv.split("\n").map(calories => parseInt(calories)));
  const totalByElv = elvs.map(elv => elv.reduce((total, current) => total + current, 0));

  totalByElv.sort((a, b) => b - a);

  console.log(totalByElv[0]);

  const top3 = totalByElv.slice(0, 3);

  const total = top3.reduce((total, current) => total + current, 0);

  console.log(top3, total);
}

day1();
