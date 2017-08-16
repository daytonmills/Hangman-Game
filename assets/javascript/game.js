/***************************************

        Wild-West Hangman Game

***************************************/
var word;
var wordObject;
var wordArray;
var wrongLetters=[];
var wrong=0;
var guesses=12;
var wins=0;
var loss=0;
var running;

function gameOver()
{
    console.log("Game Over");
    running=false;
    loss+=1;
    console.log(loss);
    $("#loss").html(loss);
    gameReset();
}

function gameWin()
{
    console.log("Game win")
    running=false;
    wins+=1;
    console.log(wins);
    $("#wins").html(wins);
    gameReset();
}

function gameReset()
{
    guesses=12;
    $('#guesses').html(guesses);
    $('#letters-word').html("");
    $('#letters-guessed').html("");
}

function gameInit()
{
    console.log("Game Init");
    running=true;

    word = getWord();
    wordArray = getWordArray();
    wordObject = {
        word: word,
        wordArray: wordArray
    };

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

    drawSpaces();
    console.log(wordObject);
}

function drawSpaces()
{
    for(i = 0; i < wordObject.wordArray.length; i++)
    {
        $('#letters-word').append("<span id=letter-" + i + ">_</span>");
    }
}

function drawLetter(letter, position)
{
    $('#letter-' + position).html(letter);

    var wordPlayed = $('#letters-word').text();
    if(wordPlayed == wordObject.word)
    {
        gameWin();
    }
}

function drawWrong(letter)
{
    var letterGuessed = $('#wrong-' + letter).text().indexOf(letter) > -1;
    if(wrongLetters.includes(letter) && !letterGuessed)
    {
        guesses--;
        $('#letters-guessed').append("<span class=wrong-" + letter + ">" + letter + " </span>");
        $('#guesses').html(guesses);

        if(guesses === 0)
        {
            gameOver();
        }
    }
}

function checkWrong(letter)
{
    if(wrong == wordObject.wordArray.length)
    {
        wrongLetters.push(letter);
        drawWrong(letter);
    }
}

document.onkeyup = function(event) {
    if(running)
    {
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
    else if(!running){
        gameInit();
        console.log("Game Key");
    }
}


//If user guesses all letters correctly, add a win and display winning animation (reset the board)
