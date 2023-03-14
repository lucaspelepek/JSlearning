const CHOICES = ["rock", "paper", "scissors"];

const WIN = [["rock", "paper", "scissors"],
["scissors", "rock", "paper"]];

document.addEventListener('DOMContentLoaded', addEventListenersToButtons);

function addEventListenersToButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', handleButtonClick);
    });
  }

  function handleButtonClick(event) {
    const buttonPressed = event.target.getAttribute('id');
    playRound(buttonPressed);
  }

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return (CHOICES[randomIndex]);
}

function getPlayerChoice() {
    const button = document.querySelector('button');
    let buttonPressed = button.getAttribute('id');
    //alert(buttonPressed);
  }

function playRound(player) {
    let computer = getComputerChoice();

    const index = WIN[0].indexOf(player);

    console.log("Player: " + player + " / Computer: " + computer);

    console.log("*Resultado*");
    if (player === computer) {
        console.log("Empate!");
        return 0;
    } else if (WIN[1][index] == computer) {
        console.log("You win!");
        return 1;
    } else {
        console.log("You lose!");
        return -1;
    }
}

function game() {
    let score = 0;

    for (let index = 0; index < 5; index++) {
       score += playRound(getPlayerChoice());
    }

    console.log("score final: " + score);

    if (score > 0) {
        console.log("VOCE GANHOU O JOGO!");
    } else if (score < 0) {
        console.log("VOCE PERDEU O JOGO!");
    } else
        console.log("O JOGO EMPATOU!");
}



