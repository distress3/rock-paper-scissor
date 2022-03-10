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
function userPlay () {
    //create a variable called userInput that stores input from user
    let userInput = prompt('What is your move?');
    //create a variable called lowerCaseInput that converts userInput to lower case
    let lowerCaseInput = userInput.toLowerCase();
    //create an If-case that checks if the lowerCaseInput is either rock, paper or scissor
    if (lowerCaseInput === 'rock' && 'paper' && 'scissor') {
        //return lowerCaseInput
        return lowerCaseInput;
    } else { 
        //if lowerCaseInput is not a valid choice, print error message to the console
        console.log('Error! Please enter a valid move.');
    }

}

//print the returned value from computerPlay
//console.log(computerPlay());
console.log(userPlay())