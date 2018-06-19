
//Game related variables-----------------------------------------------------------------------------
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wordBank = ["succulent", "prickly pear", "dehydration", "oasis", "rattlesnake", "mirage", "pyramid", "outlaw", "gallows", "tumbleweeds", "sand dunes", "camel", "tarantula"]
var secretWordCharArray = [];
var guessedLetters = [];
var numGuesses = 5
var winCounter = 0;
var loseCounter = 0;

var secretWord = randomWord(wordBank);
createGameSpace(secretWord);
console.log(secretWord);//test function, remove later


//Registers only alphabetical guesses
document.onkeyup = function (event) {
        var userGuess = event.key;

        if (alphabet.includes(userGuess)) {
            checkGuess(userGuess);
        }
        else {
            alert("That is not a letter!")
        }
    }

//Resets all variables to their initial values to play the game again
function reset(){
    numGuesses = 5;
    guessedLetters = [];
    secretWordCharArray = [];
    document.getElementById("gameSpace").textContent = "";
    document.getElementById("guessedLetters").textContent = "";
    secretWord = randomWord(wordBank);
    createGameSpace(secretWord);  
    console.log(secretWord);//test function, remove later
}

//Returns a random word from the wordbank array passed into it
function randomWord(bank) {
    randomIndex = Math.floor(Math.random() * Math.floor(bank.length));
    return bank[randomIndex];
}

/*Takes the secret word, creates an underscore array representation of the word, and then prints it to the screen*/
function createGameSpace(secretWord) {
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord.charAt(i) === " ") {
            secretWordCharArray.push("\xa0");
        } else {
            secretWordCharArray.push("_");
        }
    }
    for (let character in secretWordCharArray) {
        document.getElementById("gameSpace").textContent += secretWordCharArray[character] + "\xa0";
    }
}

/*Checks whether the user has already guessed a letter, and if they have, checks whether the secret word contains the key pressed by the user and either reveals it on the page or decreases the number of lives accordingly, adding the character to the list of guesses already attempted.*/
function checkGuess(guess) {
    if (guessedLetters.includes(guess)) {
        alert("You have already guessed that letter");
    } else if (secretWord.includes(guess)) {
        replaceUnderscores(guess);
        guessedLetters.push(guess);
        document.getElementById("guessedLetters").textContent += guess;
    } else {
        alert("lol you suck");
        numGuesses--;
        document.getElementById("lives").textContent = numGuesses;
        guessedLetters.push(guess);
        document.getElementById("guessedLetters").textContent += guess;
    }
    checkWinCondition();
}

/*Updates the secret word character array and the underscore display whenever a user correctly guesses a letter */
function replaceUnderscores(character) {
    for (i = 0; i < secretWord.length; i++) {
        if (secretWord.charAt(i) == character) {
            secretWordCharArray[i] = character;
        }
    }
    let updatedGameSpace = "";
    for (let character in secretWordCharArray) {
        updatedGameSpace += secretWordCharArray[character] + "\xa0";
        document.getElementById("gameSpace").textContent = updatedGameSpace;
    }
}

/*After each guess, this functions checks if the player has won or lost and performs actions accordingly */
function checkWinCondition() {
    if (numGuesses == 0) {
        setTimeout(function () { alert("You lost! Better luck next time") }, 300);//Delays alert Box
        loseCounter++;
        document.getElementById("losses").textContent = loseCounter;
        reset();
    } else if (!secretWordCharArray.includes("_")) {
        setTimeout(function () { alert("Congrats, you win!!") }, 300); //Delays alert dialog box
        winCounter++;
        document.getElementById("wins").textContent = winCounter;
        reset();
    }
}



