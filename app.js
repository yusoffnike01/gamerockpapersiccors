const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "Scissors";
const RESULT_DRAW = "Draw";
const RESULT_PLAYER_WIN = "Player_Win";
const RESULT_COMPUTER_Win = "Computer_Win";
const default_user_choice = ROCK;
let gameIsRunning = false;

const getPlayerChoice =  () =>{
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${default_user_choice} for you...`);
    return default_user_choice;
  } else {
    return selection;
  }
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getresult = (cChoice, pChoice) => {
  cChoice == pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice == PAPER) ||
      (cChoice === PAPER && pChoice == SCISSORS) ||
      (cChoice == ROCK && pChoice == SCISSORS)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_Win;
  //   if(cChoice==pChoice)
  //   {
  //       return RESULT_DRAW
  //   }
  //   else if(cChoice===ROCK && pChoice==PAPER|| cChoice===PAPER && pChoice==SCISSORS|| cChoice==ROCK && pChoice==SCISSORS){
  //       return RESULT_PLAYER_WIN;

  //   }

  //   else if (cChoice==PAPER && pChoice== ROCK || cChoice===SCISSORS&& pChoice==PAPER || cChoice===SCISSORS&& pChoice===ROCK)
  //   {
  //       return RESULT_COMPUTER_Win;
  //   }
};

const start = function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting.....");
  const selectionplayer = getPlayerChoice();
  const ComputerChoice = getComputerChoice();
  const winner = getresult(ComputerChoice, selectionplayer);
  let message;
  console.log(selectionplayer);
  console.log(winner);
  if (winner==RESULT_DRAW)
  {
      message="DRAW...."
  }
  else if (winner==RESULT_PLAYER_WIN)
  {
      message="Win..."
  }

  else 
  {
      message="Lost...."
  }
  alert(message)
};

// const person = {
//   name: "Max",
//   greet: function great() {
//     console.log("Hello word");
//   },
// };
// person.greet();

startGameBtn.addEventListener("click", start);


const sumUp=(resultHandler,...number)=>
{
    const check=(number)=>
    {
        return isNaN(number)? 0: number;
    }
    let sum=0;
    for (const num of number)
    {
        sum+=check(num);
    }
    return resultHandler(sum);
}


const showresult=result=>
{
    alert('The result after adding  of number is '+result);
}
const sum=sumUp(showresult,2,43,5,6,87,9,'dgfdgh',9);
console.log(sum)