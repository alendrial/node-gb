import colors from 'colors';
import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
});

const primeNums: number[] = [];

colors.setTheme({
  green: 'green',
  yellow: 'yellow',
  red: 'red',
});

export function foundPrimeNums(n: number): number[] {
  for (let i = 2; i <= n; i++) {
    let found = 1;
    for (let j = 2; j <= i / 2 && found === 1; j++) {
      if (i % j === 0) {
        found = 0;
      }
    }
    if (found === 1) primeNums.push(i);
  }
  return primeNums;
}

function renderNums(arr: number[]) {
  for (let i = 0; i < arr.length; i += 3) {
    console.log(`${arr[i]}`.green, '\u0007');
    if (arr[i + 1]) {
      console.log(`${arr[i + 1]}`.yellow,'\u0007');
      if (arr[i + 2]) {
        console.log(`${arr[i + 2]}`.red, '\u0007');
      } else break;
    } else break;
  }
}

export const appPrimeNums = () => {
  console.log('Введите число:  ');
  rl.on('line', (answer: string) => {
    const num = Math.round(Number(answer));
    if (isNaN(num)) {
      console.log(colors.red('Число не определено'));
      rl.close();
    }
    if (num === 1 || num <= 0) {
      console.log(colors.red('Простых чисел в указанном диапазоне нет'));
      rl.close();
    } else {
      foundPrimeNums(num);
      console.log(primeNums);
      renderNums(primeNums);
    }
    rl.close();
  });
};

