import fs from 'fs';
import readline from 'readline';

const getFrequency = () => {

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

getFrequency();
