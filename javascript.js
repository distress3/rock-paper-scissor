//create function computerPlay with no parameters
function computerPlay () {
    //create array "possibleMoves" with rock, paper, scissors
    let possibleMoves = ['rock', 'paper', 'scissors'];
    //create variable "randomNumber" with random number between 0 and 2
    let randomNumber = getRandNum(3,0);
    //create variable computerChoice with the string at position(randomNumber)
    let computerChoice = possibleMoves[randomNumber];
    //return computerChoice
    return computerChoice;
}

//create function getRandNum with parameters for max and min values
function getRandNum (max, min) {
    //return a random integer between max and min parameters
    return Math.floor(Math.random() * (max - min) ) + min;
}

//create function userPlay with no parameters ???
function userSelection () {
    //create a variable called userInput that stores input from user
    let userInput = prompt('What is your move?');
    //create a variable called lowerCaseInput that converts userInput to lower case
    let lowerCaseInput = userInput.toLowerCase();
    //create an If-case that checks if the lowerCaseInput is either rock, paper or scissor
    if (lowerCaseInput == 'rock' || lowerCaseInput == 'paper' || lowerCaseInput == 'scissors') {
        //return lowerCaseInput
        return lowerCaseInput;
    } else { 
        //if lowerCaseInput is not a valid choice, print error message to the console
        console.log('Error! Please enter a valid move.');
    }

}

//create function called singleRound with two parameters, one for the computers move and one for the users move
function singleRound (userPlay, computerPlay) {
    //create variable called result, 0 for loss, 1 for win and 2 for draw
    let result = 0;
    if (userPlay == 'rock') {
        if (computerPlay == 'rock') {
            result =  2;
        } else if (computerPlay == 'paper') {
            result = 0;
        } else {
            result = 1;
        }
    } else if (userPlay == 'paper') {
        if (computerPlay == 'rock') {
            result = 1;
        } else if (computerPlay == 'paper') {
            result = 2;
        } else {
            result = 0;
        }
    } else if (userPlay == 'scissors') {
        if (computerPlay == 'rock') {
            result = 0;
        } else if (computerPlay == 'paper') {
            result = 1;
        } else {
            result = 2;
        }        
    }
    return result;
}

//create a function named game()
function game (userButton) {
    //create a variable called gameResult and set it to 0
    let gameResult = 0;
    //run the singleRound function and store the returned result in gameResult
    gameResult = singleRound(userButton, computerPlay());
    //create a switch statement that
    switch (gameResult) {
        //case (gameresult === 0): print you loose
        case 0:
            winComputer();
            break;
        //case (gameresult === 1): print you win
        case 1:
            winUser();
            break;
        //case (gameresult === 2): print its a draw
        case 2:
            resultsSection.innerText = 'It\'s a draw.'
            break;
    }
}

function winUser() {
    resultsSection.innerText = 'You win the round!'
    userScore++
    scoreSection.innerText = 'Current human score: ' + userScore;
    if (userScore >= 5) {
        matchResult.innerText = 'Match won by: You!';
        rockButton.style.display = 'none';
        paperButton.style.display = 'none';
        scissorsButton.style.display = 'none';
    }
}

function winComputer() {
    resultsSection.innerText = 'You loose this round!'
    computerScore++
    computerScoreSection.innerText = 'Current computer score: ' + computerScore;
    if (computerScore >= 5) {
        matchResult.innerText = 'Match won by: Computer!';
        rockButton.style.display = 'none';
        paperButton.style.display = 'none';
        scissorsButton.style.display = 'none';
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsSection = document.querySelector('.result');
const scoreSection = document.querySelector('.score');
const computerScoreSection = document.querySelector('.computer-score');
const matchResult = document.querySelector('.match-result');
let gameScore = 0;
let userScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", function(e) {
    game('rock');
});

paperButton.addEventListener("click", function(e) {
    game('paper');
});

scissorsButton.addEventListener("click", function(e) {
    game('scissors');
});

//scoreSection.innerText = 'Current score: ' + gameScore;


