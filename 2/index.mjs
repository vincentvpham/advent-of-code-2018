import fs from 'fs';
import readline from 'readline';


fs.readFile('./data', 'utf8', (err, data) => {
  let parsedData;

  if (err) {
    console.error(err)
    return
  }

  parsedData = data.split('\n');

  for (let i = 1; i < parsedData[0].length - 1; i++) {
    const current = parsedData.map(id => `${id.slice(0, i - 1)}${id.slice(i)}`);

    let tracker = {};

    current.forEach(id => {
      if (tracker[id]) {
        console.log(id, i);
      } else {
        tracker[id] = true;
      }
    })
  }
})
