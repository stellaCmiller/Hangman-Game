var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wordBank = ["succulent", "prickly pear", "dehydration", "oasis", "rattlesnake", "mirage", "pyramid", "outlaw", "gallows", "tumbleweeds", "sand dunes", "camel", "tarantula"]


var secretWord = randomWord(wordBank);
var secretUnderscores = "";
var guessedLetters = [];
var numGuesses = 5;


createGameSpace(secretWord);
console.log(secretWord);

//Returns a random word from the wordbank array passed into it
function randomWord(bank){
    randomIndex = Math.floor(Math.random() * Math.floor(bank.length));
    return bank[randomIndex];
}

/*Takes the secret word and represents it with underscores on the HTML page and also adds it to a String to be iterated over later in order to replace characters*/
function createGameSpace(secretWord) {
    for (i=0; i<secretWord.length; i++){
        if (secretWord.charAt(i) === "\xa0"){
            secretUnderscores += "\xa0\xa0";
            document.getElementById("gameSpace").textContent += "\xa0\xa0";
        } else {
            secretUnderscores += "_";
            document.getElementById("gameSpace").textContent += "_ ";
        }
    }
}

document.onkeyup = function(event){
    var userGuess = event.key;

    if (alphabet.includes(userGuess)){
        checkGuess(userGuess); 
    }
    else {
        alert("That is not a letter!")
    }
}

/*Checks whether the user has already guessed a letter, and if they have, checks whether the secret word contains the key pressed by the user and either reveals it on the page or decreases the number of lives accordingly, adding the character to the list of guesses already attempted.*/
function checkGuess(guess) {
    if (guessedLetters.includes(guess)) {
        alert("You have already guessed that letter");
    } else if (secretWord.includes(guess)){
        replaceUnderscores(guess);
    } else {
        alert("lol you suck");
        numGuesses --;
        document.getElementById("lives").textContent = numGuesses;
        guessedLetters.push(guess);
        document.getElementById("guessedLetters").textContent += guess;
    }
}

function replaceUnderscores(character){
    for (i=0; i<secretWord.length; i++){
        if (secretWord.charAt(i) == character){
            secretUnderscores.charAt(i) = character;
        }
    }
    document.getElementById("gameSpace").textContent = secretUnderscores;
    console.log(secretUnderscores);
}
