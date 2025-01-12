let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgeContainer = document.querySelector(".msg-container");
let msge = document.querySelector("#msg");
let container = document.querySelector(".container");
let draw = false;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn = true;
  enableBoxes();
  msgeContainer.classList.add("hide");
  count = 0;
  nowin.remove();
};

let turn = true;
let count = 0;
let nowin;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button clicked");
    box.disabled = true;

    if (turn == true) {
      turn = false;
      box.innerText = "O";
      count++;
    } else {
      turn = true;
      box.innerText = "X";
      count++;
    }
    checkWinner();
    if (count == "9" && draw == false) {
      console.log("Match was Draw");

      nowin = document.createElement("h1");
      nowin.innerText = "Drow match";
      container.after(nowin);
      draw = true;
    }
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const shoWinner = (winner) => {
  msge.innerText = `Congratulation, Winner is ${winner}`;
  msgeContainer.classList.remove("hide");
  disableBoxes();
  draw = false;
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    (pos1Val = boxes[pattern[0]].innerText),
      (pos2Val = boxes[pattern[1]].innerText),
      (pos3Val = boxes[pattern[2]].innerText);

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        draw === false;
        console.log("Winner", pos1Val);

        window.scrollTo({
          top: -1000,
          behavior: "smooth",
        });
        shoWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 1000,
    bahavior: "smooth",
  });
  resetGame;
  count = 0;
});
resetBtn.addEventListener("click", resetGame);
