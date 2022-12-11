import { chunk, flatten, intersection, split } from 'lodash';
import { alphabetValues } from './alphabetValues';

export const parseInput = input => {
  return split(input, /[\n]/g).filter(Boolean);
};

export const partOne = input => {
  const data = parseInput(input).map(value => {
    return (
      value.slice(0, value.length / 2) +
      ' ' +
      value.slice(value.length / 2, value.length)
    ).split(' ');
  });

  const itemShared = flatten(
    data.map(value => {
      return intersection(split(value[0], ''), split(value[1], ''));
    }),
  );

  let total = 0;

  for (let item = 0; item < itemShared?.length; item++) {
    for (let point = 0; point < alphabetValues?.length; point++) {
      if (itemShared[item] === alphabetValues[point]) {
        total = total + point + 1;
      }
    }
  }

  return total;
};

export const partTwo = input => {
  const data = chunk(parseInput(input), 3);

  let itemShared = flatten(
    data.map(value => {
      return intersection(
        split(value[0], ''),
        split(value[1], ''),
        split(value[2], ''),
      );
    }),
  );

  let total = 0;

  for (let item = 0; item < itemShared?.length; item++) {
    for (let point = 0; point < alphabetValues?.length; point++) {
      if (itemShared[item] === alphabetValues[point]) {
        total = total + point + 1;
      }
    }
  }

  return total;
};
