import { replace, split, sumBy, sum } from 'lodash';

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

  const sortTotatCalories = elvesTotalCalories.sort((a, b) => b - a);

  return sortTotatCalories[0];
};

export const partTwo = input => {
  const data = split(replace(input, /[\n]/g, ','), ',,').map(value => {
    return split(value, ',');
  });

  const elvesTotalCalories = data.map(elf => {
    return sumBy(elf, value => Number(value));
  });

  const sortTotatCalories = elvesTotalCalories.sort((a, b) => b - a);
  const topThreeElvesCalories = sum(sortTotatCalories.slice(0, 3));

  return topThreeElvesCalories;
};
