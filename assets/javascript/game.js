
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var guessSubmit = document.querySelector('.guessSubmit');
var guessEntry= document.querySelector('.guessEntry');

var count = 10;
var counter = document.querySelector('.counter');
var resetButton;
guessEntry.focus();

function checkGuess() {
    var userGuess = guessEntry.value;
    if (count < 10) {
        
    guesses.textContent += userGuess + ' ';}

    if (userGuess === randomLetter) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        setGameOver();
    } 
    else if (count === 0) {
        lastResult.textContent = '!!GAME OVER!!';
        setGameOver();
    }
    else if (count===6) {
        lastResult.textContent = "You can't do it, can you??"
        lastResult.style.backgroundColor = 'blue';
    }
    else if (count===3) {
        lastResult.textContent = "Just a few more and I win!!"
        lastResult.style.backgroundColor = 'orange';
    }
    else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';

    }
    
counter.textContent = count--
guessEntry.value = " ";
guessEntry.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessEntry.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    counter.textContent = 10;
    
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    
    resetButton.parentNode.removeChild(resetButton);
    
    guessEntry.disabled = false;
    guessSubmit.disabled = false;
    guessEntry.value = '';
    guessEntry.focus();
    lastResult.style.backgroundColor = 'lightsalmon';
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    }

   