import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day5.txt').toString();

const day5 = () => {
  const lines = input.split("\n").map(line => {
    const pairOfCoordinates = line.replace(' -> ', ',');
    const [x1, y1, x2, y2] = pairOfCoordinates.split(',').map(number => parseFloat(number));
    return { x1, x2, y1, y2 };
  });

  const straightLines = lines.filter(line => (line.x1 === line.x2) || (line.y1 === line.y2));

  const allNumbers = straightLines.reduce<number[]>((result, current) => {
    return result.concat([current.x1, current.x2, current.y1, current.y2]);
  }, []);
  const maxNumber = Math.max(...allNumbers);

  const grid = [];
  for (let y = 0; y < maxNumber; y++) {
    const gridRow = [...new Array(maxNumber)].map((_, x) => {
      let count = 0;
      const number1 = straightLines.find(line => line.x1 === x && line.y1 === y);
      const number2 = straightLines.find(line => line.x2 === x && line.y1 === y);
      if (number1) {
        count++;
      }
      if (number2) {
        count++;
      }

      return count;
    });

    grid.push(gridRow);
  }

  console.log(grid)
}

day5();
