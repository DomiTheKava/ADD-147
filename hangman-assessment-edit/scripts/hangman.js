// declare and initialize array
let game = ["MAINECOONE", "POODLE", "GIRAFFE", "ELEPHANT",
            "TIGER", "SQUIRREL", "CHIPMUNK", "FROG", "DEER"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
var imgNum = 1;
var guessedLetters = [];

// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function (event) {
    
    if (attemptsLeft > 0 && document.getElementById("guess").value != '' && !guessedLetters.includes(document.getElementById("guess").value)) {

        event.preventDefault(); // not reload page
        output = '';
        userLetter = document.getElementById("guess").value; // get user value
        guessedLetters.push(userLetter); // add user letter to guessedLetters array
        document.getElementById("guess").value = ''; //would this reset value to null
        document.getElementById("guessed").innerHTML = "Guessed Letters: " + guessedLetters
        var found = false; // init 

        for (let c = 0; c < answer.length; c++) { // check through each letter in answer to see if user inputed it
            // alert(letters[c]);
        
            if (userLetter.toUpperCase() == letters[c]) { // if it does contain a letter
                display[c] = userLetter.toUpperCase();
                win--; // remove one from win
                found = true; // set found to true
            }

            output = output + display[c] + '';
        }

        if (!found) { // if the letter was not found
            // guessed wrong event here

            attemptsLeft--; // remove one from attempts left
            imgNum++; // increment hangman image number
            // hangman graphic here
            document.getElementById("hangman").src = `images/0${imgNum}.png`
        } else {
            found = false;
        }
    
        document.getElementById("word").innerHTML = output;
        output = '';
        // attemptsLeft--; // Reason why it removes one even on correct answer

        if (win < 1) {
            document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
        } else if (attemptsLeft < 1) {
            document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
        } else {
            document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
        }
    }
});

// function 

//scirpt connected fine somereason the button and the script are not registering.