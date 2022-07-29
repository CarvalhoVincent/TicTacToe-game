const gameBoard = document.getElementById("gameBoard");
const gameMenu = document.getElementById("gameMenu");




function newGameCPU() {
    gameBoard.style.display = "initial";
    gameMenu.style.display = "none";
}

function newGamePlayer() {
    gameBoard.style.display = "initial";
    gameMenu.style.display = "none";
}

function restartGame() {
    gameBoard.style.display = "none";
    gameMenu.style.display = "initial";
}

function hitBox(box) {
    var boxChoice = document.getElementById(box);
    var img = document.createElement('img');
    var turn = document.getElementById('turn');
    var allBox = document.getElementsByClassName('box');

    if (turn.getAttribute("data-value") === "X") {
        img.src = "./assets/icon-x.svg";
        boxChoice.appendChild(img);
        boxChoice.classList.remove("hoverClassX")
        turn.setAttribute("data-value", "O")
        turn.src = "./assets/icon-O-turn.svg";
    } else {
        img.src = "./assets/icon-o.svg";
        boxChoice.appendChild(img);
        boxChoice.classList.remove("hoverClassO");
        turn.setAttribute("data-value", "X")
        turn.src = "./assets/icon-x-turn.svg";
    }

}


// for (all of allBox.getAttribute("data-value")=== "X" || allBox.getAttribute("data-value")=== "O")  {
//         all.classList.add("hoverClassX");
//      };