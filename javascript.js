const CHOICES = ["rock", "paper", "scissors"];

const WIN = [["rock", "paper", "scissors"],
["scissors", "rock", "paper"]];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return (CHOICES[randomIndex]);
}

function getPlayerChoice() {
    return prompt("rock, paper or scissors?").toLowerCase();
}

function playRound() {
    let computer = getComputerChoice();
    let player = getPlayerChoice();

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
       score += playRound();
    }

    console.log("score final: " + score);

    if (score > 0) {
        console.log("VOCE GANHOU O JOGO!");
    } else if (score < 0) {
        console.log("VOCE PERDEU O JOGO!");
    } else
        console.log("O JOGO EMPATOU!");
}



