'use strict';

let secretNumber, score;

// Initial settings of the game
const setGame = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
};

setGame();

let highscore = 0;

const displayMessage = function (text) {
  document.querySelector('.message').textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔No number');
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is not equal to the secret number
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      displayMessage('💥You lost...');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// To reset the game

document.querySelector('.again').addEventListener('click', function () {
  setGame();
});
