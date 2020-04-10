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
  winningNum = 2,
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

// Listen for guess (submit)
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate input: not blank, not less than min or higher than max
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  // Check if winning number
  if(guess === winningNum) {
    // Disable input: makes it impossible to enter another number after winning number
    guessInput.disabled = true
    guessInput.style.borderColor = 'green'
    setMessage(`${winningNum} is correct! You win :-D`, 'green')

  } else {

  }
});

// Set message: variable for message text and variable for color of the message
function setMessage(mes, color){
  message.style.color = color
  message.textContent = mes
}