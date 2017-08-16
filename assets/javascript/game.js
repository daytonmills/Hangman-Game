/***************************************

        Wild-West Hangman Game

***************************************/

// Global Variables
var word, wordObject, wrong=0;

// Global Arrays
var wordArray;
var wrongLetters=[];

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
    const dictionary = ["Cowboy", "Horse", "Desert", "Cactus", "Saloon", "Holster", "Spurs", "Lasso"];
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    const randomWord = dictionary[randomIndex];

    return randomWord;
}

function getWordArray()
{
    let splitWordArray = word.split('');
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
    $('#letter' + position).html(letter + " ");
}

function drawWrong(letter)
{
    var letterGuessed = $('#wrong-' + letter).text().indexOf(letter) > -1;

    if(wrongLetters.includes(letter) && !letterGuessed)
    {
        $('#letters').append("<span id=wrong-" + letter + ">" + letter + " </span>");
    }
}

function checkWrong(letter)
{
    if(wrong < wordObject.wordArray.length)
    {
    }
    else if(wrong == wordObject.wordArray.length)
    {
        wrongLetters.push(letter);
        drawWrong(letter);
    }
}

// Game input
document.onkeyup = function(event) {
    var input = String.fromCharCode(event.keyCode).toLowerCase();

    for(let i = 0; i < wordObject.wordArray.length; i++)
    {
        if(input === wordObject.wordArray[i].toLowerCase())
        {
            drawLetter(wordObject.wordArray[i], i);
            wrong = 0;
        }
        else
        {
            wrong = wrong+1;
            checkWrong(input);
        }
        if( i === wordObject.wordArray.length -1)
        {
            wrong = 0;
        }
    }
}

//If input doesn't match add the letter to guessed, and decrement guesses remaining

//If run out of guesses declare the game over, add a loss, and pick a new word (reset the board)

//If user guesses all letters correctly, add a win and display winning animation (reset the board)
