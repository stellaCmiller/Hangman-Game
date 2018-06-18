
//Writing the game as an object
gaem = {
    lives: 5,
    wordBank: ["succulent", "prickly pear", "dehydration", "oasis", "rattlesnake", "mirage", "pyramid", "outlaw", "gallows", "tumbleweeds", "sand dunes", "camel", "tarantula"],
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    guessedLetters: [],
    secretWord: "",
    secretWordCharArray: [],
    winCounter: 0,
    loseCounter: 0,
    getRandomWord: function randomWord(bank) {
        randomIndex = Math.floor(Math.random() * Math.floor(bank.length));
        return bank[randomIndex];
    }

}

MyGame = new gaem;

