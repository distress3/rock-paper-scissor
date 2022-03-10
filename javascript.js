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
function game () {
    //create a variable called gameResult and set it to 0
    let gameResult = 0;
    //create a for loop that runs 5 times
    for (let i = 0; i < 5; i++) {
        //run the singleRound function and store the returned result in gameResult
        gameResult = singleRound(userSelection(), computerPlay());
        //create a switch statement that
        switch (gameResult) {
            //case (gameresult === 0): print you loose
            case 0:
                console.log('You loose!');
                break;
            //case (gameresult === 1): print you win
            case 1:
                console.log('You win!');
                break;
            //case (gameresult === 2): print its a draw
            case 2:
                console.log('It\'s a draw.');
                break;
        }
    }
}

game();