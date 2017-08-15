/***************************************

        Wild-West Hangman Game

***************************************/

// Global Variables
var word, wordArray, guiWord;

initGame();

// Game Loops
function initGame()
{
    // Initializing variables.
    word = getWord();
    wordArray = getWordArray();

    guiWord = document.getElementById('currentWord');

    console.log(word);
    console.log(wordArray);

    // Run the game
    runGame();
}

function runGame()
{

}

// Game Functions
function getWord()
{
    // Dictionary of words for gameplay
    var dictionary = ["Cowboy", "Horse", "Desert", "Cactus", "Saloon", "Holster", "Spurs", "Lasso"];

    // Get a random word from the dictionary
    var randomIndex = Math.floor(Math.random() * dictionary.length);
    var randomWord = dictionary[randomIndex];

    return randomWord;
}

function getWordArray()
{
    var splitWordArray = word.split('');
    return splitWordArray;
}

//Display the word on screen as _'s

//Detect input from the user and see if character matches any in word (chartAt, word length)

//If input matches, display the letter on the screen

//If input doesn't match add the letter to guessed, and decrement guesses remaining

//If run out of guesses declare the game over, add a loss, and pick a new word (reset the board)

//If user guesses all letters correctly, add a win and display winning animation (reset the board)
