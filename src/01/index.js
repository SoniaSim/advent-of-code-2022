import { replace, split, sumBy, sum, max } from 'lodash';

export const parseInput = input => {
  return input;
};

export const partOne = input => {
  const data = split(replace(input, /[\n]/g, ','), ',,').map(value => {
    return split(value, ',');
  });

  const elvesTotalCalories = data.map(elf => {
    return sumBy(elf, value => Number(value));
  });

  return max(elvesTotalCalories);
};

export const partTwo = input => {
  const data = split(replace(input, /[\n]/g, ','), ',,').map(value => {
    return split(value, ',');
  });

  const elvesTotalCalories = data.map(elf => {
    return sumBy(elf, value => Number(value));
  });

  const sortTotatCalories = elvesTotalCalories.sort((a, b) => b - a);

  return sum(sortTotatCalories.slice(0, 3));
};
