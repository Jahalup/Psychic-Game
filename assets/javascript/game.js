
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and guesses
var wins = 0;
var losses = 0;
var guesses = 10;


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)

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
        document.getElementById('previousg').innerHTML += userGuess;
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

};

function setGameOver() {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
    document.getElementById('previousg').innerHTML =" ";
    guesses=10;
}