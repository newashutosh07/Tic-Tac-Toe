//This is Tic Tac Toe game

let box = document.querySelectorAll(".box");
let turn = true;
const msg = document.querySelector(".msg");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      turn = false;
      box.innerText = "X";
    } else {
      turn = true;
      box.innerText = "O";
    }
    box.disabled = true;
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Winner: ${winner}`;
  document.querySelector(".winner").classList.remove("hide");
};

const checkWinner = () => {
  for (let win of winPatterns) {
    let pos1 = box[win[0]].innerText;
    let pos2 = box[win[1]].innerText;
    let pos3 = box[win[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return true;
      }
    }
  }
};
