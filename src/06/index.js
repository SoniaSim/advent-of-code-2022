export const parseInput = input => {
  return input;
};

export const partOne = input => {
  const data = parseInput(input);

  let markerPosition = 0;

  for (let i = 0; i < data.length; i++) {
    if ([...new Set(data.slice(i, i + 4).split(''))].length === 4) {
      return (markerPosition = i + 4);
    }
  }

  return markerPosition;
};

export const partTwo = input => {
  const data = parseInput(input);

  let markerPosition = 0;

  for (let i = 0; i < data.length; i++) {
    if ([...new Set(data.slice(i, i + 14).split(''))].length === 14) {
      return (markerPosition = i + 14);
    }
  }

  return markerPosition;
};
