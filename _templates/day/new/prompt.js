const process = require('process');

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise(resolve => {
      const day = process.argv.includes('--day')
        ? process.argv[process.argv.indexOf('--day') + 1]
        : undefined;
      const extension = process.argv.includes('--extension')
        ? process.argv[process.argv.indexOf('--extension') + 1]
        : undefined;

      if (
        process.argv.includes('--day') &&
        process.argv.includes('--extension')
      ) {
        return resolve({
          day: day.padStart(2, '0'),
          ext: extension.toLowerCase() === 'typescript' ? 'ts' : 'js',
        });
      }

      prompter
        .prompt([
          {
            type: 'input',
            name: 'day',
            message: 'Which day should we add?',
            initial: day
              ? day.padStart(2, '0')
              : `${new Date().getDate()}`.padStart(2, '0'),
          },
          {
            type: 'select',
            name: 'extension',
            message: 'Which language would you like?',
            choices: ['JavaScript', 'TypeScript'],
            initial:
              (extension || '').toLocaleLowerCase() === 'typescript'
                ? 'TypeScript'
                : 'JavaScript',
          },
        ])
        .then(({ day, extension }) => {
          resolve({
            day: day.padStart(2, '0'),
            ext: extension === 'TypeScript' ? 'ts' : 'js',
          });
        });
    });
  },
};
