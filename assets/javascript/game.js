/***************************************

        Wild-West Hangman Game

***************************************/

// Global Variables
var word, wordObject;

// Global Arrays
var wordArray;
var guessedLetters=[];

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
        $('#currentWord').append("<span id=letter" + i + ">_ </span>");
    }
}

function drawLetter(letter, position)
{
    console.log(letter,position);
    $('#letter' + position).html(letter + " ");
}

// Game input
document.onkeyup = function(event) {
    var input = String.fromCharCode(event.keyCode).toLowerCase();

    for(i = 0; i < wordObject.wordArray.length; i++)
    {
        if(input == wordObject.wordArray[i].toLowerCase())
        {
            drawLetter(wordObject.wordArray[i], i);
        }
        else {

        }
    }

}

//If input doesn't match add the letter to guessed, and decrement guesses remaining

//If run out of guesses declare the game over, add a loss, and pick a new word (reset the board)

//If user guesses all letters correctly, add a win and display winning animation (reset the board)
