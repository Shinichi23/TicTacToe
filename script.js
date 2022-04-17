const cells = document.querySelectorAll(".cell");
const gameStart = document.getElementById("gameStart");

function startG() {
  document.getElementById("content").style.display = "block";
  document.getElementById("gameStart").style.display = "none";
}

gameStart.addEventListener("click", startG);

cells.forEach((cell) => {
  cell.addEventListener("click", cellClick, { once: true });
});

/* 
const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  return { board };
})();
*/

let winCombo = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

let Player = (name, symbol) => {
  return { name, symbol };
};

let playerOne = Player("Player 1", "X");
let playerTwo = Player("Player 2", "O");
let play1 = [];
let play2 = [];

var turnCount = 0;

function cellClick(e) {
  turnCount++;

  if (turnCount == 10) {
    return;
  }
  if (turnCount % 2 == 0) {
    document.getElementById(`${e.target.id}`).innerHTML = playerTwo.symbol;
    play2.push(e.target.id);
  } else {
    document.getElementById(`${e.target.id}`).innerHTML = playerOne.symbol;
    play1.push(e.target.id);
  }

  checkWinner();
}

// game play

function checkWinner() {
  for (let i = 0; i < winCombo.length; i++) {
    if (winCombo[i].every((value) => play1.includes(value)) === true) {
      console.log(winCombo[i].every((value) => play1.includes(value)));
      displayWinner();
    } else if (winCombo[i].every((value) => play2.includes(value)) === true) {
      console.log(winCombo[i].every((value) => play2.includes(value)));
      displayWinner();
    }
  }
}

// Restart Game

const restart = document.getElementById("restart");
const reset = document.getElementById("reset");

function restartGame() {
  window.location.reload(true);
}

restart.addEventListener("click", restartGame);
reset.addEventListener("click", restartGame);

function displayWinner() {
  document.getElementById("content").style.display = "none";
  document.getElementById("winner").style.display = "block";
}

// Start game style

var textWrapper = document.querySelector(".ml9 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
