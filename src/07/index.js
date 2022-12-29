import { forEach, fromPairs, isFinite, trim } from 'lodash';

export const parseInput = input => {
  return input
    .replaceAll(' ', '')
    .replaceAll('$ls', '-')
    .replaceAll('dir', '')
    .replaceAll('$cd..', '')
    .replaceAll('\n', ' ')
    .split('$cd')
    .filter(Boolean)
    .map(value => {
      let file = value.split('-');
      file[0] = trim(file[0]);
      file[1] = trim(file[1]);

      file[1] = file[1].split(' ').filter(Boolean);

      return file;
    });
};

export const partOne = input => {
  const data = fromPairs(parseInput(input));

  const explore = key => {
    let total = 0;
    for (let i = 0; i < data[key]?.length; i++) {
      if (isFinite(Number(data[key][i]?.match(/(\d+)/)?.[0]))) {
        total += Number(data[key][i]?.match(/(\d+)/)?.[0]);
      } else {
        total += explore(data[key][i]);
      }
    }

    return total;
  };

  let totalFiles = {};

  forEach(data, (value, key) => (totalFiles[key] = explore(key)));

  let total = 0;
  forEach(totalFiles, (value, key) => {
    if (value <= 100000) {
      total += value;
    }
  });
};

export const partTwo = input => {
  const data = parseInput(input);
};
