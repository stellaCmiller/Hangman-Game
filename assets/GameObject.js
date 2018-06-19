
//Writing the game as an object
HangmanGame = {
    lives: 5,
    wordBank: ["succulent", "prickly pear", "dehydration", "oasis", "rattlesnake", "mirage", "pyramid", "outlaw", "gallows", "tumbleweeds", "sand dunes", "camel", "tarantula"],
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    guessedLetters: [],
    secretWord: "",
    secretWordCharArray: [],
    winCounter: 0,
    loseCounter: 0,
    getRandomWord: function randomWord() {
        randomIndex = Math.floor(Math.random() * Math.floor(wordBank.length));
        this.secretWord = wordBank[randomIndex];
    }
}

console.log(HangmanGame.getRandomWord());



