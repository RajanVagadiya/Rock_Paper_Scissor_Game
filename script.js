let userScore = 0;
let oppScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const oppScorepara = document.querySelector("#opp-score");


const genComputerChoice = ()=> {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Match was Draw! Play Again";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin,userChoice,oppChoice)=>{
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! ${userChoice} beats ${oppChoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        oppScore++;
        oppScorepara.innerText = oppScore;
        console.log("you lose");
        msg.innerText = `You Lose! ${oppChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
   console.log("user choice = ",userChoice);
   //Generate computer choice -> modular
   const oppChoice = genComputerChoice();
   console.log("Oppositon choice :", oppChoice);

   if (userChoice == oppChoice) {
        //Draw Game
        drawGame();
   }
   else{
      let userWin = true;
      if (userChoice === "rock") {
        //scisssor,paper
       userWin = oppChoice === "paper"?false:true;
      }
      else if (userChoice === "paper") {
        //rock,scissor
       userWin = oppChoice === "scissor"?false:true;
      }
      else{
        //rock,paper
        userWin = oppChoice === "rock"?false:true;
      }
      showWinner(userWin,userChoice,oppChoice);
   }
};

choices.forEach((choice)=>{
    console.log(choices);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});