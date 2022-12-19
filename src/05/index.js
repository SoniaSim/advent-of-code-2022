import { stacksOne } from './stacksOne';
import { stacksTwo } from './stacksTwo';
import { takeRight } from 'lodash';

export const parseInput = input => {
  return input
    .split('\n')
    .filter(Boolean)
    .map(value => {
      return value
        .replace('from', ',')
        .replace('to', ',')
        .replace('move', '')
        .split(',')
        .map(Number);
    });
};

export const partOne = input => {
  parseInput(input).map(stack => {
    const move = stack[0];
    const from = stack[1] - 1;
    const to = stack[2] - 1;

    for (let i = 0; i < move; i++) {
      stacksOne[to].push(stacksOne[from].pop());
    }
  });

  let letters = '';

  for (let i = 0; i < stacksOne.length; i++) {
    letters = letters + stacksOne[i][stacksOne[i].length - 1];
  }
  return letters;
};

export const partTwo = input => {
  const data = parseInput(input);

  data.map(stack => {
    const move = stack[0];
    const from = stack[1] - 1;
    const to = stack[2] - 1;

    const arrayToPop = takeRight(stacksTwo[from], move).reverse();

    for (let i = 0; i < move; i++) {
      stacksTwo[to].push(arrayToPop.pop());
      stacksTwo[from].pop();
    }
  });

  let letters = '';

  for (let i = 0; i < stacksTwo.length; i++) {
    letters = letters + stacksTwo[i][stacksTwo[i].length - 1];
  }

  return letters;
};
