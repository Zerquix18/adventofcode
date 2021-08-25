import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day2.txt').toString();

const part1 = () => {
  const v = input.split("\n");

  let totalSurface = 0;

  v.forEach(value => {
    const [l, w, h] = value.split('x').map(v => parseInt(v));
    const side1 = l * w;
    const side2 = w * h;
    const side3 = h * l;
  
    const surface = (2 * side1 + 2 * side2 + 2 * side3) + Math.min(side1, side2, side3);
    totalSurface += surface;
  })

  console.log({ totalSurface });
};


const part2 = () => {
  const v = input.split("\n");

  let totalRibbon = 0;

  v.forEach(value => {
    const [l, w, h] = value.split('x').map(v => parseInt(v));
    const ribbon = l + l + w + w + (l * w * h);
    totalRibbon += ribbon;
  });

  console.log({ totalRibbon });
};

part1();
part2();
