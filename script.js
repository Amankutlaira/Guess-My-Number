'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Numer! 🎊';

document.querySelector('.number').textContent = 5;
document.querySelector('.score').textContent = 12;

console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //No input enter
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }

  //when you guess correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 💥';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';

    if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if(guess !== secretNumber){
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Too High! 🙅‍♂️' : 'Too Low! ⏪' ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥲 You Lost The Game!!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when number is high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High! 🙅‍♂️';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥲 You Lost The Game!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // //when your number is low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low! ⏪';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🥲 You Lost The Game!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});


//Reset the game!
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('Hello World');

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
