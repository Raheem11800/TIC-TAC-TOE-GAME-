let boxes = document.querySelectorAll(".bx");
let rstbtn = document.querySelectorAll(".rb");
let winnermsg = document.querySelector(".winmsg");
let counter = 0;
let turnO = true;
const winingpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((bx) => {
  bx.addEventListener("click", () => {
    console.log(counter);
    counter++;
    if (turnO === true) {
      bx.innerText = "O";
      bx.style.color = "#F5A623";
      turnO = false;
      bx.disabled = true;
    } else {
      bx.innerText = "X";
      bx.style.color = "#62C2E3";
      turnO = true;
      bx.disabled = true;
    }

    winnercheck();
  });
});

const showwinner = (winner) => {
  winnermsg.innerText = `Congratulation ! Winner is Player ${winner}`;
  winnermsg.classList.remove("hide");
};

const drawer = () => {
  if (counter === 9) {
    winnermsg.innerText = `Game is Draw Restart`;
    winnermsg.classList.remove("hide");
  }
};

const winnercheck = () => {
  for (let i = 0; i < winingpattern.length; i++) {
    let pos1Val = boxes[winingpattern[i][0]].innerText;
    let pos2Val = boxes[winingpattern[i][1]].innerText;
    let pos3Val = boxes[winingpattern[i][2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        for (let i = 0; i < boxes.length; i++) {
          boxes[i].disabled = true;
        }
        showwinner(pos1Val);
      } else {
        drawer();
      }
    }
  }
};

rstbtn.forEach((rb) => {
  rb.addEventListener("click", () => {
    turnO = true;
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].disabled = false;
      boxes[i].innerText = "";
    }
    winnermsg.classList.add("hide");
  });
});
