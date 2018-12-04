import fs from 'fs';
import readline from 'readline';

const calculateFrequency = () => {

  let frequency = 0;

  const rl = readline.createInterface({
    input: fs.createReadStream('./data')
  });

  rl.on('line', line => {
    frequency += Number.parseInt(line);
  });

  rl.on('close', () => {
    console.log(frequency);
  });
}

const getRepeatedFrequency = () => {

  const tracker = {};
  let repeat;

  const readFile = (frequency) => {

    const rl = readline.createInterface({
      input: fs.createReadStream('./data')
    });

    rl.on('line', line => {
      frequency += Number.parseInt(line);
      if (tracker[frequency] === true) {
        // rl.close does not close the stream immediately
        if (!repeat) {
          repeat = frequency;
        }
        rl.close();
      } else {
        tracker[frequency] = true;
      }
    });

    rl.on('close', () => {
      if (!repeat) {
        readFile(frequency);
      } else {
        console.log(repeat);
      }
    });
  }

  readFile(0);
}

getRepeatedFrequency();
