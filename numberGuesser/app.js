/* Game function:
- player can guess a number between a min and max
- player gets a number of guesses
- player is notified of remaining number of guesses
- player is notified of correct answer when player loses
- player is notified when answer is correct
- player can play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again? event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload(true);
  }
});

// Listen for guess (submit)
guessBtn.addEventListener("click", function () {
  guessesLeft--;
  let guess = parseInt(guessInput.value);

  // Validate input: not blank, not less than min or higher than max
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, "red");
  }
  // Check if winning number
  else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You win :-D`);
  } else if (guessesLeft === 0) {
    // Game over
    gameOver(false, `Game Over! The correct number was ${winningNum}.`);
  } else {
    // Game continues - answer wrong
    guessInput.style.borderColor = "red";
    setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`, "red");
    // Clear input
    guessInput.value = "";
  }
});

// Game over
function gameOver(won, mes) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(mes);

  // Play again
  guessBtn.value = "Play Again?";
  guessBtn.className += "play-again";
}

// Set message: variable for message text and variable for color of the message
function setMessage(mes, color) {
  message.style.color = color;
  message.textContent = mes;
}

function getRandomNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
