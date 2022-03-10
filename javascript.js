//hello

//create function computerPlay
function computerPlay {
    //create array "possibleMoves" with rock, paper, scissors
    let possibleMoves = ['rock', 'paper', 'scissors'];
    //create variable "randomNumber" with random number between 0 and 2
    let randomNumber = getRandNum(2,0);
    //create variable computerChoice with the string at position(randomNumber)
    let computerChoice = possibleMoves[randomNumber]
    //return computerChoice
    return computerChoice;
}

//create function getRandNum with parameters for max and min values
function getRandNum (max, min) {
    //return a random integer between max and min parameters
    return Math.floor(Math.random() * (max - min) ) + min;
}

//print the returned value from computerPlay
console.log(computerPlay);