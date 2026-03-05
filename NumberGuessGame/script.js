const targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const guessInput = document.getElementById('userGuess');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        feedback.style.color = "orange";
    } else if (userGuess === targetNumber) {
        feedback.textContent = `🎉 Correct! You got it in ${attempts} tries!`;
        feedback.style.color = "green";
        submitBtn.disabled = true; 
    } else if (userGuess > targetNumber) {
        feedback.textContent = "Too high! Try a lower number.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Too low! Try a higher number.";
        feedback.style.color = "red";
    }

    guessInput.value = '';
    guessInput.focus();
}

submitBtn.addEventListener('click', checkGuess);