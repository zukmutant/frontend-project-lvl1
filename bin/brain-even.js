import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${name} `);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = () => Math.floor(Math.random() * 100);

let n = 0;

while (n < 3) {
  const numberForUser = getRandomInt();
  console.log(`Question: ${numberForUser}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === 'yes' || userAnswer === 'no') {
    if (numberForUser % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      n += 1;
    } else if (numberForUser % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
      n += 1;
    } else if (userAnswer === 'yes') {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.`)
        console.log(`Let's try again, ${name}!`);
        break;
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'Yes'.`)
        console.log(`Let's try again, ${name}!`);
        break;
      
    }
  } else { 
    console.log(`${userAnswer} is wrong answer ;(`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
};

if (n === 3) {
console.log(`Congratulations, ${name}!`);
};