import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day2.txt').toString();

type HorizontalMove = 'forward';
type VerticalMove = 'up' | 'down';
type Move = {
  type: HorizontalMove | VerticalMove;
  units: number;
}

const day2 = () => {
  const moves: Move[] = input.split("\n").map(string => {
    const [move, units] = string.split(' ');
    
    return {
      type: move as HorizontalMove | VerticalMove,
      units: parseFloat(units)
    };
  });

  // part 1

  const finalHorizontalPosition = moves.reduce((total, move) => {
    return move.type === 'forward' ? total + move.units : total;
  }, 0);
  const finalDepth = moves.reduce((total, move) => {
    if (move.type === 'forward') {
      return total;
    }

    return move.type === 'up' ? total - move.units : total + move.units;
  }, 0);

  const result = finalHorizontalPosition * finalDepth;

  console.log({ result });

  // part 2

  let depth = 0;
  let aim = 0;
  let horizontalPosition = 0;
  
  moves.forEach(move => {
    if (move.type === 'down') {
      aim += move.units;
    }
    if (move.type === 'up') {
      aim -= move.units;
    }
    if (move.type === 'forward') {
      horizontalPosition += move.units;
      depth += move.units * aim;
    }
  });

  const result2 = horizontalPosition * depth;
  console.log({ result2 });
};

day2();
