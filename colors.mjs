import colors from 'colors';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//   rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
//   });

rl.on('line', (input) => {
    console.log(`Received ${input}`.red);
    if (input == "exit") {
        rl.close();
    }
})

// const args = process.argv.slice(2);

// const [ name, age ] = args

// console.log(colors.blue('hello world' + " " + name));
// console.log(colors.red('hello world' + " " + age));