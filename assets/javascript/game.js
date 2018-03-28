

// Alphabet array
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and guesses
var wins = 0;
var losses = 0;
var guesses = 10;

// Random letter generator
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)

// Function when user presses key
document.onkeyup = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
        setGameOver();
        }
        

    else if (guesses === 0){
        losses++;
        setGameOver();
    }
    else {
        guesses--;
        document.getElementById('previousg').innerHTML += userGuess + " ";
    }

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guesses;
   
};

// Game Over Function to Reset
function setGameOver() {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
    document.getElementById('previousg').innerHTML =" ";
    guesses=10;
}

