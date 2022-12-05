import { replace, split, sumBy, sum, max } from 'lodash';

export const parseInput = input => {
  return split(replace(input, /[\n]/g, ','), ',,').map(value => {
    return split(value, ',');
  });
};

export const partOne = input => {
  const data = parseInput(input);

  const elvesTotalCalories = data.map(elf => {
    return sumBy(elf, value => Number(value));
  });

  return max(elvesTotalCalories);
};

export const partTwo = input => {
  const data = parseInput(input);

  const elvesTotalCalories = data.map(elf => {
    return sumBy(elf, value => Number(value));
  });

  return sum(elvesTotalCalories.sort((a, b) => b - a).slice(0, 3));
};
