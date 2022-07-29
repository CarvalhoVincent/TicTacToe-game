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