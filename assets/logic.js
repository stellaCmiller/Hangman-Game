var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wordBank = ["succulent", "prickly pear", "dehydration", "oasis", "rattlesnake", "mirage", "pyramid", "outlaw", "gallows", "tumbleweeds", "sand dunes", "camel", "tarantula"]


var secretWord = randomWord(wordBank);
var secretWordCharArray = [];
var guessedLetters = [];
var numGuesses = 5;


createGameSpace(secretWord);
console.log(secretWord);

//Returns a random word from the wordbank array passed into it
function randomWord(bank){
    randomIndex = Math.floor(Math.random() * Math.floor(bank.length));
    return bank[randomIndex];
}

/*Takes the secret word, creates an underscore array representation of the word, and then prints it to the screen*/
function createGameSpace(secretWord) {
    for (let i=0; i<secretWord.length; i++){
        if (secretWord.charAt(i) === " "){
            secretWordCharArray.push("\xa0");
        } else {
            secretWordCharArray.push("_");
        }
    }   
    console.log(secretWordCharArray); //test function
    for (let character in secretWordCharArray){
        document.getElementById("gameSpace").textContent += secretWordCharArray[character] + "\xa0";
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
        guessedLetters.push(guess);
        document.getElementById("guessedLetters").textContent += guess;
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
            secretWordCharArray[i] = character;
            console.log(secretWordCharArray);
        }
    }
    // document.getElementById("gameSpace").textContent = secretUnderscores;
    
}
