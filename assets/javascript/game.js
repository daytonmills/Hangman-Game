/***************************************

        Wild-West Hangman Game

***************************************/

// Global Variables
var word, wordObject;

// Global Arrays
var wordArray, guessedLetters;

// Global Booleans
var revealed;

// Document Elements
var guiWord;

initGame();

function initGame()
{
    word = getWord();
    wordArray = getWordArray();
    wordObject = {
        word: word,
        wordArray: wordArray
    };

    runGame();
}

function runGame()
{
    console.log(wordObject);
    drawSpaces();
}

function getWord()
{
    var dictionary = ["Cowboy", "Horse", "Desert", "Cactus", "Saloon", "Holster", "Spurs", "Lasso"];
    var randomIndex = Math.floor(Math.random() * dictionary.length);
    var randomWord = dictionary[randomIndex];

    return randomWord;
}

function getWordArray()
{
    var splitWordArray = word.split('');
    return splitWordArray;
}

function drawSpaces()
{
    for(i = 0; i < wordObject.wordArray.length; i++)
    {
        $('#currentWord').append("_ ");
    }
}

//Display the word on screen as _'s

//Detect input from the user and see if character matches any in word (chartAt, word length)

//If input matches, display the letter on the screen

//If input doesn't match add the letter to guessed, and decrement guesses remaining

//If run out of guesses declare the game over, add a loss, and pick a new word (reset the board)

//If user guesses all letters correctly, add a win and display winning animation (reset the board)
