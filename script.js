
//array of choices

let computerChoices=["Rock", "Paper", "Scissors"];
//variables that keep track of who won.
let playerWinner =0;
let computerWinner =0;
let ties=0;
let playerSelection="";
let computerSelection ="";
let round =0;
let playerWonRound=false;
let computerWonRound=false;
let tieHappened=false;

//this is a variable used to update rounds
let roundText=document.querySelector(".round");
// a variable to update computer choices
let playerChoiceText =document.querySelector(".playerChoice");
// a variable to update Player choices
let computerChoiceText =document.querySelector(".computerChoice");
// a variable to update the Winner
let winnerText=document.querySelector(".winner");
// a variable to track the player score
let playerScoreText=document.querySelector(".playerScore")
// a variable to track the computer score
let computerScoreText =document.querySelector(".computerScore")
// a variable to store the play again text




// a function to randomly generate what the computer plays (by passing computerChoices as an argument in the computerPlay function)
function computerPlay(arr){
    //this will randomly return rock, paper, or scissors
    const randomChoice = Math.floor(Math.random() * arr.length);

    const item = arr[randomChoice];

    return item;
    
}

// this tests and verifies computerPlay(computerChoices)... works...  console.log(computerPlay(computerChoices));


//code below plays a single round



function playRound(playerSelection, computerSelection){

if (playerSelection === computerSelection){
playerWonRound=false;
computerWonRound=false;
tieHappened=true;
winnerText.textContent="It's a tie, partner!"
return ties+=1;
}  else if (playerSelection === "Rock" && computerSelection === "Paper"){
    computerWonRound=true;
    playerWonRound=false;
    tieHappened=false;
    winnerText.textContent="Too bad so sad! You LOST!"   
    return computerWinner+=1;
}  else if(playerSelection ==="Rock"&& computerSelection ==="Scissors"){
    computerWonRound=false;
    playerWonRound=true;
    tieHappened=false;
    winnerText.textContent="Winner winner chicken dinner! Congrats";
    return playerWinner+=1;
}  else if(playerSelection ==="Paper"&& computerSelection ==="Rock"){
    computerWonRound=false;
    playerWonRound=true;
    tieHappened=false;
    winnerText.textContent="Winner winner chicken dinner! Congrats";
    return playerWinner+=1;
} else if(playerSelection ==="Paper"&& computerSelection ==="Scissors"){
    computerWonRound=true;
    playerWonRound=false;
    tieHappened=false;
    winnerText.textContent="Too bad so sad! You LOST!"   
    return computerWinner+=1;    
} else if(playerSelection ==="Scissors"&& computerSelection ==="Rock"){
    computerWonRound=true;
    playerWonRound=false;
    tieHappened=false;
    winnerText.textContent="Too bad so sad! You LOST!"   
    return computerWinner+=1;      
} else if(playerSelection ==="Scissors"&& computerSelection ==="Paper"){
    computerWonRound=false;
    playerWonRound=true;
    tieHappened=false;
    winnerText.textContent="Winner winner chicken dinner! Congrats";
    return playerWinner+=1;   
}
}




//code below plays 5 games... everything above works properly on its own, will probably have to refactor mostly below on adding UI



let clickRock = document.querySelector(".rockText");



clickRock.onclick = function (){
    //console.log("Rock was clicked!");

    if (round===5){
        playAgainText.textContent="Play Again?"

        return;
    }
    else{
    playerSelection ="Rock";
    computerSelection = computerPlay(computerChoices);
    playRound(playerSelection, computerSelection);
    round +=1;
    roundText.textContent ="Round: " + round;
    playerChoiceText.textContent="Player Selection: Rock";
    computerChoiceText.textContent="Computer Selection: " + computerSelection;
    playerScoreText.textContent=playerWinner;
    computerScoreText.textContent=computerWinner;
    }
       
};




let clickPaper = document.querySelector(".paperText");
clickPaper.onclick = function (){

    if (round ===5){
        playAgainText.textContent="Play Again?"
            if (playerWinner>computerWinner){
                winnerText.textContent="You won the most rounds!"
            }
            else if (playerWinner === computerWinner){
                winnerText.textContent="You tied a lot!"
            }
            else {
                winnerText.textContent="Computer won the most rounds!"
            }

        return;
    }
    else{
    playerSelection ="Paper";
    computerSelection = computerPlay(computerChoices);
    playRound(playerSelection, computerSelection);
    round +=1;
    roundText.textContent ="Round: " + round;
    playerChoiceText.textContent="Player Selection: Paper";
    computerChoiceText.textContent="Computer Selection: " + computerSelection;
    computerScoreText.textContent=computerWinner;
    playerScoreText.textContent=playerWinner;
    }
};



let clickScissors = document.querySelector(".scissorsText");
clickScissors.onclick = function (){
    if (round ===5){
        playAgainText.textContent="Play Again?"
            if (playerWinner>computerWinner){
                winnerText.textContent="You won the most rounds!"
            }
            else if (playerWinner === computerWinner){
                winnerText.textContent="You tied a lot!"
            }
            else {
                winnerText.textContent="Computer won the most rounds!"
            }

        return;
    }
    else{
    playerSelection ="Scissors";
    computerSelection = computerPlay(computerChoices);
    playRound(playerSelection, computerSelection);
    round +=1;
    roundText.textContent ="Round: " + round;
    playerChoiceText.textContent="Player Selection: Scissors";
    computerChoiceText.textContent="Computer Selection: " + computerSelection;
    playerScoreText.textContent=playerWinner;
    computerScoreText.textContent=computerWinner;
    }
};


let playAgainText=document.querySelector('.playAgain')
playAgainText.onclick = function (){
    round = 0;
    roundText.textContent=0;
    computerWinner=0;
    ties=0;
    playerWinner=0;
    playerChoiceText.textContent="Player Selection: _____";
    computerChoiceText.textContent="Computer Selection: _____";
    computerWonRound=false;
    playerWonRound=false;
    tieHappened=false;
    playerScoreText.textContent="0";
    computerScoreText.textContent="0";
    winnerText.textContent="Who's going to win?";
    playAgainText.textContent="";
}


/*
if (playerWonRound === true){
   
}
else if (tieHappened === true){
    winnerText.TextContent="It's a tie, partner!"
}
else {
    winnerText.TextContent="Too bad so sad! You LOST!"   
}
*/

/*

//function declaration that runs game
function game(){
    // plays for 5 rounds
for (let i=0; i<5; i++){
//prompts for player choice.
let getPersonChoice =prompt("Rock,Paper, or Scissors?")
// generates computer choice.
let getComputerChoice = computerPlay(computerChoices);
// plays a full round...
playRound(getPersonChoice, getComputerChoice);
//logs activity of round.
console.log("Player choice: " + getPersonChoice);
console.log("Computer choice: " + getComputerChoice);
console.log("Player score: " + playerWinner);
console.log("Computer score: " + computerWinner);
console.log("Ties score: " + ties);
}

}

// game();

// telling who won the match.

if (playerWinner>computerWinner){
    console.log("Player won the match!");
}

else if (computerWinner>playerWinner){
    console.log("Computer won the match!");
}

else if (playerWinner === computerWinner){
    console.log("You tied!");
}

else {
    console.log("Something went wrong!");
}
*/