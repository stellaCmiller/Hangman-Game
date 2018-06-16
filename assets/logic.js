var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wordBank = ["succ ulent", "prickly pear", "dehyd ration", "oa sis", "rattle snake", "mir age"];


var secretWord = randomWord(wordBank);
createGameSpace(secretWord);
console.log(secretWord);

function randomWord(bank){
    randomIndex = Math.floor(Math.random() * Math.floor(bank.length));
    return bank[randomIndex];
}

function createGameSpace(secretWord) {
    let placeHolder = "_ ";
    let spaceHolder = "     ";
    for (i=0; i<secretWord.length; i++){
        if (secretWord[i] === " "){
            document.getElementById("gameSpace").innerHTML += spaceHolder;
        } else {
        document.getElementById("gameSpace").innerHTML += placeHolder;
        }
    }
}

document.onkeyup = function(event){
    var userGuess = event.key;

    if (userGuess.includes(alphabet.toLowerCase)){
        checkGuess() 
    }
}

function checkGuess(guess) {
    if (userGuess.includes(secretWord)){
        dosomething();
    }
}
