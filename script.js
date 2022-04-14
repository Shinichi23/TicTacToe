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

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  return { board };
})();

let Player = (name, symbol) => {
  return { name, symbol };
};

let playerOne = Player("Player 1", "X");
let playerTwo = Player("Player 2", "O");

var turnCount = 0;

function cellClick(e) {
  turnCount++;

  if (turnCount == 10) {
    return;
  }
  if (turnCount % 2 == 0) {
    document.getElementById(`${e.target.id}`).innerHTML = playerTwo.symbol;
  } else {
    document.getElementById(`${e.target.id}`).innerHTML = playerOne.symbol;
  }

  console.log(e.target.id);
  console.log(turnCount);
}

// Restart Game

/* const restart = document.getElementById("restart");

function restartGame() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
}

restart.addEventListener("click", restartGame); */

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
