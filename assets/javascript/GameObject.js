//Global variables
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var winCounter = 0;
var loseCounter = 0;

//Writing the game as an object literal
var HangmanGame = {
    difficulty: "Medium",
    wordBankMedium: ["desert iguana", "sandstorm", "tumbleweeds", "sand dunes", "rattlesnake", "sahara", "succulent", "tarantula", "erosion" ],
    secretWordCharArray: [],
    guessedLetters: [],
    numGuesses: 9,
    secretWord: "",
    setSecretWord() {
        randomIndex = Math.floor(Math.random() * Math.floor(this.wordBankMedium.length));
        this.secretWord = this.wordBankMedium[randomIndex];
    },
    createGameSpace() {
        for (let i = 0; i < this.secretWord.length; i++) {
            if (this.secretWord.charAt(i) === " ") {
                this.secretWordCharArray.push("\xa0");
            } else {
                this.secretWordCharArray.push("_");
            }
        } for (let character in this.secretWordCharArray) {
            document.getElementById("gameSpace").textContent += this.secretWordCharArray[character] + "\xa0";
        }
    }
}

HangmanGame.setSecretWord();
console.log(HangmanGame.secretWord);
HangmanGame.createGameSpace();
console.log(HangmanGame.secretWordCharArray);


