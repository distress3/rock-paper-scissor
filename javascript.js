//hello

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
    if (userPlay === 'rock') {
        if (computerPlay === 'rock') {
            console.log('It\'s a draw.');
        } else if (computerPlay === 'paper') {
            console.log('You loose!');
        } else {
            console.log('You win!');
        }
    } else if (userPlay === 'paper') {
        if (computerPlay === 'rock') {
            console.log('You win!');
        } else if (computerPlay === 'paper') {
            console.log('It\'s a draw.');
        } else {
            console.log('You loose!');
        }
    } else if (userPlay === 'scissors') {
        if (computerPlay === 'rock') {
            console.log('You loose!');
        } else if (computerPlay === 'paper') {
            console.log('You win!');
        } else {
            console.log('It\'s a draw.');
        }        
    }
}

console.log(singleRound(userSelection(), computerPlay()));


//create IF case, if userSelection is rock
    //create IF case, if computerPlay is rock
        //print "Its a draw."
    //else if computerPlay is paper
        //print "You lose!"
    //else
        //print "You win!"
//else if userSelection is paper
    //create IF case, if computerPlay is rock
        //print "You win!"
    //else if computerPlay is paper
        //print "Its a draw."
    //else
        //print "You lose!"
//else if userSelection is scissors
    //create IF case, if computerPlay is rock
        //print "You lose!"
    //else if computerPlay is paper
        //print "You win!"
    //else
        //print "Its a draw."


//print the returned value from computerPlay
//console.log(computerPlay());
