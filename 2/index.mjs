import fs from 'fs';
import readline from 'readline';

let twos = 0;
let threes = 0;

const rl = readline.createInterface({
  input: fs.createReadStream('./data')
});

rl.on('line', line => {
  const map = {};
  for (let i = 0; i < line.length; i++) {
    const current = line[i];
    if (map[current]) {
      map[current]++;
    } else {
      map[current] = 1;
    }
  }
  const values = Object.values(map);
  if (values.indexOf(2) > -1) {
    twos++;
  }

  if (values.indexOf(3) > -1) {
    threes++;
  }
});

rl.on('close', () => {
  console.log(twos * threes);
});
