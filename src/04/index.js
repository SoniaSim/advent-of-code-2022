import { split } from 'lodash';

export const parseInput = input => {
  return input
    .split('\n')
    .filter(Boolean)
    .map(value => {
      return split(value, ',').map(section => {
        return split(section, '-').map(Number);
      });
    });
};

export const partOne = input => {
  const data = parseInput(input);

  let totalOverlap = 0;

  for (let pair = 0; pair < data?.length - 1; pair++) {
    const sectionOne = data[pair][0];
    const sectionTow = data[pair][1];
    if (
      (sectionOne[0] <= sectionTow[0] && sectionOne[1] >= sectionTow[1]) ||
      (sectionOne[0] === sectionTow[0] && sectionOne[1] === sectionTow[0]) ||
      (sectionOne[0] === sectionTow[1] && sectionOne[1] === sectionTow[1]) ||
      (sectionOne[0] === sectionOne[1] &&
        sectionOne[0] > sectionTow[0] &&
        sectionOne[0] < sectionTow[1]) ||
      (sectionOne[0] >= sectionTow[0] && sectionOne[1] <= sectionTow[1])
    ) {
      totalOverlap = totalOverlap + 1;
    }
  }

  return totalOverlap;
};

export const partTwo = input => {
  const data = parseInput(input);

  let totalNotOverlap = 0;

  for (let pair = 0; pair < data?.length - 1; pair++) {
    const sectionOne = data[pair][0];
    const sectionTow = data[pair][1];
    if (
      (sectionOne[0] < sectionTow[0] && sectionOne[1] < sectionTow[0]) ||
      (sectionOne[0] > sectionTow[0] && sectionOne[0] > sectionTow[1])
    ) {
      totalNotOverlap = totalNotOverlap + 1;
    }
  }
  return data?.length - totalNotOverlap;
};
