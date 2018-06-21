
//Game related variables-----------------------------------------------------------------------------
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wordBankEasy = ["biome", "sand", "oasis", "mirage", "camel", "pyramid", "barren","outlaw", "bandit", "gallows"];
var wordBankHard = ["saguaro cactus", "desertification", "evapotranspiration", "dehydration", "prickly pear cactus"];
var wordBankMedium = ["desert iguana", "sandstorm", "tumbleweeds", "sand dunes", "rattlesnake", "sahara", "succulent", "tarantula", "erosion" ];
var difficulty = "Medium";
var secretWordCharArray = [];
var guessedLetters = [];
var numGuesses = 9;
var winCounter = 0;
var loseCounter = 0;
var secretWord = randomWord(wordBankMedium);

createGameSpace(secretWord);
console.log(secretWord);//test function, remove later


//Resets the game with a word from the corresponding word bank
function changeDifficultyEasy(){
    difficulty = "Easy";
    document.getElementById("difficulty").textContent = "Easy";
    reset(difficulty);
}
function changeDifficultyMedium(){
    difficulty = "Medium";
    document.getElementById("difficulty").textContent = "Medium";
    reset(difficulty);
}
function changeDifficultyHard(){
    difficulty = "Hard";
    document.getElementById("difficulty").textContent = "Hard";
    reset(difficulty);
}


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

//Resets all variables to their initial values to play the game again, with the medium difficulty set to default
function reset(difficulty = "Medium"){
    numGuesses = 9;
    guessedLetters = [];
    secretWordCharArray = [];
    document.getElementById("gameSpace").textContent = "";
    document.getElementById("guessedLetters").textContent = "";
    if (difficulty == "Easy"){
        secretWord = randomWord(wordBankEasy);
    } else if (difficulty == "Medium"){
        secretWord = randomWord(wordBankMedium);
    } else {
        secretWord = randomWord(wordBankHard);
    }
    document.getElementById("lives").textContent = numGuesses;
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

/*Checks whether the user has already guessed a letter, and if they have, checks whether the secret word contains the key pressed by the user and either reveals it on the page or decreases the number of lives accordingly, adding the character to the array of guesses already attempted.*/
function checkGuess(guess) {
    if (guessedLetters.includes(guess)) {
        alert("You have already guessed that letter");
    } else if (secretWord.includes(guess)) {
        replaceUnderscores(guess);
        guessedLetters.push(guess);
        document.getElementById("guessedLetters").textContent += guess;
    } else {
        alert("Sorry, you suck");
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
        reset(difficulty);
    } else if (!secretWordCharArray.includes("_")) {
        setTimeout(function () { alert("Congrats, you win!!") }, 300); //Delays alert dialog box
        winCounter++;
        document.getElementById("wins").textContent = winCounter;
        reset(difficulty);
    }
}



