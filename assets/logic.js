var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wordBank = ["succulent", "prickly pear", "dehydration", "oasis", "rattlesnake", "mirage", "pyramid", "outlaw", "gallows", "tumbleweeds", "sand dunes", "camel", "tarantula"]


var secretWord = randomWord(wordBank);
createGameSpace(secretWord);
console.log(secretWord);

//Returns a random word from the wordbank array passed into it
function randomWord(bank){
    randomIndex = Math.floor(Math.random() * Math.floor(bank.length));
    return bank[randomIndex];
}

//Takes the secret word and represents it with underscores on the HTML page
function createGameSpace(secretWord) {
    for (i=0; i<secretWord.length; i++){
        if (secretWord.charAt(i) === " "){
            document.getElementById("gameSpace").textContent += "\xa0\xa0";
        } else {
        document.getElementById("gameSpace").textContent += "_ ";
        }
    }
}

document.onkeyup = function(event){
    var userGuess = event.key;

    if (alphabet.includes(userGuess)){
        checkGuess() 
    }
    else {
        alert("That is not a letter!")
    }
}

function checkGuess(guess) {
    if (userGuess.includes(secretWord)){
        dosomething();
    }
}
