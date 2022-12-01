import fs from 'fs';

const input = fs.readFileSync(__dirname + '/day4.txt').toString();

type BoardItem = { number: number; marked: boolean; }
type Board = BoardItem[][];

const day4 = () => {
  const lines = input.split("\n");

  const numbersToDraw = lines[0].split(',').map(number => parseInt(number));
  let boards: Board[] = [];

  for (let i = 2; i < lines.length; i = i + 6) {
    const board = lines.slice(i, i + 5).map(line => {
      const boardItem: BoardItem[] = line.trim().replace(/\s{2}/g, ' ').split(' ').map(number => {
        return {
          number: parseInt(number),
          marked: false,
        }
      });
      return boardItem;
    });

    boards.push(board);
  }

  const didBoardWin = (board: Board) => {
    const isOneRowMarked = !! board.find(row => row.every(cell => cell.marked));
    let isOneColumnMarked = false;
    for (let i = 0; i < board[0].length; i++) {
      const isThisMarked = board.every(row => row[i].marked);
      if (isThisMarked) {
        isOneColumnMarked = true;
      }
    }

    return isOneColumnMarked || isOneRowMarked;
  };

  // -----------------------------------------------------------------

  // part 1 - let's do some loops
  let winner: { board: Board; choice: number } | null = null;

  for (let i = 0; i < numbersToDraw.length; i++) {
    if (winner) {
      break;
    }

    const choice = numbersToDraw[i];

    for (let k = 0; k < boards.length; k++) {
      const board = boards[k];
      // ---
      for (let n = 0; n < board.length; n++) {
        const boardRow = board[n];
        for (let m = 0; m < boardRow.length; m++) {
          const cell = boardRow[m];
          if (cell.number === choice) {
            board[n][m].marked = true;
            if (! winner && didBoardWin(board)) {
              winner = { board, choice };
            }
          }
        }
      }
    }
  }

  if (! winner) {
    throw new Error('No winner detected');
  }

  const sumOfUnmarked = winner.board.reduce((total, current) => {
    const sumOfRow = current.reduce((total, current) => current.marked ? total : total + current.number, 0);
    return total + sumOfRow;
  }, 0);

  const result = sumOfUnmarked * winner.choice;
  console.log({ result });

  // part 2

  let winners: { board: number; choice: number }[] = [];

  for (let i = 0; i < numbersToDraw.length; i++) {
    const choice = numbersToDraw[i];

    for (let k = 0; k < boards.length; k++) {
      const board = boards[k];
      const isInWinners = winners.find(board => board.board === k);
      if (isInWinners) {
        continue;
      }

      // ---
      for (let n = 0; n < board.length; n++) {
        const boardRow = board[n];
        for (let m = 0; m < boardRow.length; m++) {
          const cell = boardRow[m];
          if (cell.number === choice) {
            board[n][m].marked = true;

            if (didBoardWin(board)) {
              winners.push({ board: k, choice });
            }
          }
        }
      }
    }
  }

  const newWinner = winners[winners.length - 1];

  const sumOfUnmarked2 = boards[newWinner.board].reduce((total, current) => {
    const sumOfRow = current.reduce((total, current) => current.marked ? total : total + current.number, 0);
    return total + sumOfRow;
  }, 0);

  const result2 = sumOfUnmarked2 * newWinner.choice;
  console.log({ result2 });
};

day4();
