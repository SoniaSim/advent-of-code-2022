import { split } from 'lodash';

export const parseInput = input => {
  return input;
};

export const partOne = input => {
  const data = input
    .replace(/[AX]/g, 1)
    .replace(/[BY]/g, 2)
    .replace(/[CZ]/g, 3)
    .split('\n')
    .map(value => {
      return split(value, ' ').map(Number);
    });

  let score = 0;

  const checkTheWin = (PlayerTwo, playerOne) => {
    if (
      (PlayerTwo === 1 && playerOne === 3) ||
      (PlayerTwo === 3 && playerOne === 2) ||
      (PlayerTwo === 2 && playerOne === 1)
    ) {
      return true;
    }
  };

  for (let game = 0; game < data?.length - 1; game++) {
    if (data[game][1] === data[game][0]) {
      score = score + 3 + data[game][1];
    } else if (checkTheWin(data[game][1], data[game][0])) {
      score = score + 6 + data[game][1];
    } else {
      score = score + data[game][1];
    }
  }

  return score;
};

export const partTwo = input => {
  const data = input
    .replace(/[X]/g, 0)
    .replace(/[Y]/g, 3)
    .replace(/[Z]/g, 6)
    .split('\n')
    .map(value => {
      return split(value, ' ');
    });

  let score = 0;

  const pointForShape = (shape, result) => {
    if (Number(result) === 0) {
      if (shape === 'A') return 3;
      if (shape === 'B') return 1;
      if (shape === 'C') return 2;
    }
    if (Number(result) === 3) {
      if (shape === 'A') return 1;
      if (shape === 'B') return 2;
      if (shape === 'C') return 3;
    }

    if (Number(result) === 6) {
      if (shape === 'A') return 2;
      if (shape === 'B') return 3;
      if (shape === 'C') return 1;
    }
  };

  for (let game = 0; game < data?.length - 1; game++) {
    score =
      score +
      Number(data[game][1]) +
      pointForShape(data[game][0], data[game][1]);
  }

  return score;
};
