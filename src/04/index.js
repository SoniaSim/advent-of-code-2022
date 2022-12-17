import { split } from 'lodash';

export const parseInput = input => {
  return input
    .split('\n')
    .filter(Boolean)
    .map(value => {
      return split(value, ',').map(section => {
        return split(section, '-');
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
      (Number(sectionOne[0]) <= Number(sectionTow[0]) &&
        Number(sectionOne[1]) >= Number(sectionTow[1])) ||
      (Number(sectionOne[0]) === Number(sectionTow[0]) &&
        Number(sectionOne[1]) === Number(sectionTow[0])) ||
      (Number(sectionOne[0]) === Number(sectionTow[1]) &&
        Number(sectionOne[1]) === Number(sectionTow[1])) ||
      (Number(sectionOne[0]) === Number(sectionOne[1]) &&
        Number(sectionOne[0]) > Number(sectionTow[0]) &&
        Number(sectionOne[0]) < Number(sectionTow[1])) ||
      (Number(sectionOne[0]) >= Number(sectionTow[0]) &&
        Number(sectionOne[1]) <= Number(sectionTow[1]))
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
      (Number(sectionOne[0]) < Number(sectionTow[0]) &&
        Number(sectionOne[1]) < Number(sectionTow[0])) ||
      (Number(sectionOne[0]) > Number(sectionTow[0]) &&
        Number(sectionOne[0]) > Number(sectionTow[1]))
    ) {
      totalNotOverlap = totalNotOverlap + 1;
    }
  }
  return data?.length - totalNotOverlap;
};
