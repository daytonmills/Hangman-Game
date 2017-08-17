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
var winning=false;
var losing=false;

$('#game').hide();

document.getElementById("music").play();

function gameOver()
{
    running=false;
    losing=true;
    loss+=1;
    var taken = 12-guesses;
    $('#loss').html(loss);
    $('#loser').html("<div class='loser-wrapper'> <div class='loserbox'> <div class='row loserbox-header'> <div class='col-lg-12'> <h1 id='winh1'><i class='fa fa-bomb' aria-hidden='true'></i> loser <i class='fa fa-bomb' aria-hidden='true'></i></h1> </div> </div> <div class='row loserbox-header'> <div class='col-lg-12'> <h2 id='winh2'>You could not guess the word.</h2> <hr/> </div> </div> <div class='row'> <div class='col-lg-12'> <h3 id='winh3'><i class='fa fa-quote-left' aria-hidden='true'></i> Word Played: <span id='playedWord'>"+ wordObject.word +"</span></h3> </div> </div> <div class='row'> <div class='col-lg-12'> <h3 id='winh3'><i class='fa fa-question-circle' aria-hidden='true'></i> Guesses taken: <span id='playedWord'>"+ taken +"</span></h3> </div> </div> <div class='row'> <div class='col-lg-12'> <hr/> <h5>Press any key to continue...</h5> </div> </div> </div> </div>");
    $('#loser').slideDown("slow");
    document.getElementById("lostSound").play();
}

function gameWin()
{
    running=false;
    winning=true;
    wins+=1;
    var taken = 12-guesses;
    $('#wins').html(wins);
    $('#winner').html("<div class='winner-wrapper'> <div class='winnerbox'> <div class='row winnerbox-header'> <div class='col-lg-12'> <h1 id='winh1'><i class='fa fa-trophy' aria-hidden='true'></i> Winner <i class='fa fa-trophy' aria-hidden='true'></i></h1> </div> </div> <div class='row winnerbox-header'> <div class='col-lg-12'> <h2 id='winh2'>You guessed the word correctly.</h2> <hr/> </div> </div> <div class='row'> <div class='col-lg-12'> <h3 id='winh3'><i class='fa fa-quote-left' aria-hidden='true'></i> Word Played: <span id='playedWord'>"+ wordObject.word +"</span></h3> </div> </div> <div class='row'> <div class='col-lg-12'> <h3 id='winh3'><i class='fa fa-question-circle' aria-hidden='true'></i> Guesses taken: <span id='playedWord'>"+ taken +"</span></h3> </div> </div> <div class='row'> <div class='col-lg-12'> <hr/> <h5>Press any key to continue...</h5> </div> </div> </div> </div>");
    $('#winner').slideDown("slow");
    document.getElementById("winSound").play();
}

function gameReset()
{
    guesses=12;
    $('#game').show();
    $('#guesses').html(guesses);
    $('#letters-word').html('');
    $('#letters-guessed').html('');
    gameInit();
}

function gameInit()
{
    running=true;
    winning=false;
    losing=false;

    word = getWord();
    wordArray = getWordArray();
    wordObject = {
        word: word,
        wordArray: wordArray
    };

    function getWord()
    {
        const dictionary = ['Cowboy', 'Horse', 'Desert', 'Cactus', 'Saloon', 'Holster', 'Spurs', 'Lasso', 'Cattle', 'Wrangler', 'Rope', 'Horseshoe', 'Saddle', 'Wagon', 'Buckaroo', 'Gallop', 'Giddyup', 'Bronco', 'Indians', 'Ranch', 'Teepee', 'Stampede', 'Stallion', 'Mustang', 'Leather', 'Horns', 'Sand', 'Dust', 'Jeans', 'Boots'];
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
}

function drawSpaces()
{
    for(i = 0; i < wordObject.wordArray.length; i++)
    {
        $('#letters-word').append('<span id=letter-' + i + '>_</span>');
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
        $('#letters-guessed').append('<span id=wrong-' + letter + '>' + letter + ' </span>');
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

function letterSound(letter)
{
    document.getElementById(letter).play();
}

document.onkeyup = function(event) {
    if(running)
    {
        var input = String.fromCharCode(event.keyCode).toLowerCase();

        letterSound(input);

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
        if(winning)
        {
            $('#winner').slideUp("slow", gameReset());
        }
        else if(losing)
        {
            $('#loser').slideUp("slow", gameReset());
        }
        else if(!winning)
        {
            $('#welcome').slideUp("slow", gameReset());
        }
    }
}
