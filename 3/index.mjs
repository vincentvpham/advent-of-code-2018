import fs from 'fs';
import readline from 'readline';

const cloth = [];
let counter = 0;

for (let x = 0; x < 1000; x++) {
  cloth.push([]);
}


const parseClaim = claim => {
  const claimArray = claim.slice(1).replace(/(( @ )|,|: |x)/g, ' ').split(' ');
  const [id, x, y, width, length] = claimArray;
  return {
    id,
    x: Number.parseInt(x),
    y: Number.parseInt(y),
    width: Number.parseInt(width),
    length: Number.parseInt(length),
  }
}

const mapClaim = parsedClaim => {
  const { id, x: startX, y: startY, width, length } = parsedClaim;
  // row
  for (let y = 0; y < length; y++) {
    // column
    for (let x = 0; x < width; x++) {
      if (cloth[startY + y][startX + x]) {
        cloth[startY + y][startX + x].push(id)
        if (cloth[startY + y][startX + x].length === 2) {
          counter++;
        }
      } else {
        cloth[startY + y][startX + x] = [id]
      }
    }
  }
}

const mapClaims = () => {

  const rl = readline.createInterface({
    input: fs.createReadStream('./data')
  });

  rl.on('line', line => {
    mapClaim(parseClaim(line));
  });

  rl.on('close', () => {
    console.log(counter);
  });

}

mapClaims()
