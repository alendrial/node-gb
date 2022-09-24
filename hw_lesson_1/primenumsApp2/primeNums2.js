require('colors')
const Colors = { GREEN: 0, YELLOW: 1, RED: 2}

let currentColor = Colors.GREEN;
const leftRest = process.argv[2];
const rightRest = process.argv[3];
let nonePrime = true;

if (isNaN(leftRest) || isNaN(rightRest)) {
  console.log('Incorrect number'.red);
  return;
}

const isPrime = (num) => {
  if (num <= 1)
    return false;
  for (let i = 0; i < num; i++)
    if(num % i === 0)
    return false;
    else return true;
}

const changeColor = () => {
  currentColor++;
  if (currentColor > Colors.RED)
  currentColor = Colors.GREEN;
}

const printColor = (num) => {
  if (nonePrime)
    nonePrime = false;
    switch (currentColor) {
      case Colors.RED:
        console.log(`${num}`.red);
        break;
      case Colors.GREEN:
        console.log(`${num}`.green);
        break;
      case Colors.YELLOW:
        console.log(`${num}`.yellow);
        break;
    }
    changeColor();
}

for (let i = leftRest; i <= rightRest; i++) {
  if (isPrime(i))
  printColor(i)
}
if(nonePrime)
  console.log(`There are primes[${leftRest},${rightRest}]`)