const gameBoard = document.getElementById("gameBoard");
const gameMenu = document.getElementById("gameMenu");
var X_pattern = [];
var O_pattern = [];
const winnerMark = document.getElementById("winner-mark");
var turn = document.getElementById('turn');
var allBox = document.getElementsByClassName("box");
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const cpuBtn = document.getElementById("cpuBtn");
const playerBtn = document.getElementById("playerBtn");


function newGameCPU() {
    gameBoard.style.display = "initial";
    gameMenu.style.display = "none";
    player1Name.innerHTML = "X (You)";
    player2Name.innerHTML = "0 (CPU)";
    cpuBtn.setAttribute("data-value", "active");
    playerBtn.setAttribute("data-value", "")
}

function newGamePlayer() {
    gameBoard.style.display = "initial";
    gameMenu.style.display = "none";
    player1Name.innerHTML = "X (P1)";
    player2Name.innerHTML = "0 (P2)";
    playerBtn.setAttribute("data-value", "active")
    cpuBtn.setAttribute("data-value", "")
}

function restartGame() {
    window.location.reload();
}

function hitBox(box) {
    var boxChoice = document.getElementById(box);
    var img = document.createElement('img');

    if (turn.getAttribute("data-value") === "X") {
        img.src = "./assets/icon-x.svg";
        img.setAttribute("class", "boxPlayed");
        boxChoice.classList.add("animation");
        boxChoice.appendChild(img);
        boxChoice.classList.remove("hoverClassX");
        boxChoice.setAttribute("data-value", "X");
        boxChoice.setAttribute("onclick", "");
        turn.setAttribute("data-value", "O");
        turn.src = "./assets/icon-o-turn.svg";
        X_pattern.push(boxChoice.id);
        X_pattern.sort();
        for (empty of allBox) {
            if (empty.getAttribute("data-value") === "") {
            empty.classList.add("hoverClassO");
            empty.classList.remove("hoverClassX");
            }
        }
        checkWin(X_pattern);
    } else {
        img.src = "./assets/icon-o.svg";
        img.setAttribute("class", "boxPlayed");
        boxChoice.classList.add("animation");
        boxChoice.appendChild(img);
        boxChoice.classList.remove("hoverClassO");
        boxChoice.setAttribute("data-value", "O");
        boxChoice.setAttribute("onclick", "");
        turn.setAttribute("data-value", "X");
        turn.src = "./assets/icon-x-turn.svg";
        O_pattern.push(boxChoice.id);
        O_pattern.sort();
        for (empty of allBox) {
            if (empty.getAttribute("data-value") === "") {
            empty.classList.add("hoverClassX");
            empty.classList.remove("hoverClassO");
            }
        }
        checkWin(O_pattern);
    }
};

function checkWin(currentPlayer) {
    const win_pattern = [
        ["box0", "box1", "box2"],
        ["box3", "box4", "box5"],
        ["box6", "box7", "box8"],
        ["box0", "box3", "box6"],
        ["box1", "box4", "box7"],
        ["box2", "box5", "box8"],
        ["box0", "box4", "box8"],
        ["box2", "box4", "box6"]
    ];

    for (some of win_pattern) {
        var isThereWinner = false;
        const isContainedIn = (a, b) => {
            for (const v of new Set(a)) {
              if (!b.some(e => e === v)) 
                return false;
            }
            for (empty of allBox) {
                if (empty.getAttribute("data-value") === "") {
                    empty.classList.remove("hoverClassX");
                    empty.classList.remove("hoverClassO");
                    empty.setAttribute("onclick", "");
                }
            }
            isThereWinner = true;
            results();
            return true;
        };
        isContainedIn(some, currentPlayer );
        }
        console.log(isThereWinner);

        if (isThereWinner === false && X_pattern.length === 5 && O_pattern.length === 4) {
            for (all of allBox) {
            all.classList.remove("hoverClassO");
            all.classList.remove("hoverClassX");
            all.setAttribute("onclick", "");
            }
            draw();
        }
};

//      Modal      //

const modal = document.getElementById("modal");
const endGame = document.getElementById("endGameModal");
const restartingGame = document.getElementById("restartGame");
const winnerTakes = document.getElementById("winnerTakes");
const winnerName = document.getElementById("winnerName");
const Xscore = document.getElementById("Xscore");
const drawScore = document.getElementById("draw");
const Oscore = document.getElementById("Oscore");
const XradioBtn = document.getElementById("X-mark");
const OradioBtn = document.getElementById("O-mark");


function results() {

    modal.style.display = "initial";
    endGame.style.display = "flex";
    restartingGame.style.display = "none";

    if (turn.getAttribute("data-value") === "O") {

        winnerName.style.display = "initial";

        if (playerBtn.getAttribute("data-value") === "active") {
            if (XradioBtn.checked === true) {
                winnerName.innerHTML = "Player 1 wins!";
            } 
            if (OradioBtn.checked === true) {
                winnerName.innerHTML = "Player 1 wins!"; 
            }
        } 
        if (cpuBtn.getAttribute("data-value") === "active") {
            if (XradioBtn.checked === true) {
                winnerName.innerHTML = "You won!";
            } 
            if (OradioBtn.checked === true) {
                winnerName.innerHTML = "Oh no, you lost..."; 
            }
        }

        winnerMark.src = "./assets/icon-x.svg";
        winnerMark.style.display = "initial";
        winnerTakes.style = "color: hsl( var(--clr-lightBlue) );";
        winnerTakes.innerHTML = "takes the round";
        Xscore.innerHTML++;

    } else {
        winnerName.style.display = "initial";
        if (playerBtn.getAttribute("data-value") === "active") {
            if (OradioBtn.checked === true) {
                winnerName.innerHTML = "Player 2 wins!";
            } 
            if (XradioBtn.checked === true) {
                winnerName.innerHTML = "Player 2 wins!"; 
            }
        } 
        if (cpuBtn.getAttribute("data-value") === "active") {
            if (OradioBtn.checked === true) {
                winnerName.innerHTML = "You won!";
            } 
            if (XradioBtn.checked === true) {
                winnerName.innerHTML = "Oh no, you lost..."; 
            }
        }
        winnerMark.src = "./assets/icon-o.svg";
        winnerMark.style.display = "initial";
        winnerTakes.style = "color: hsl( var(--clr-orange) );";
        winnerTakes.innerHTML = "takes the round";
        Oscore.innerHTML++;
    }
}

function draw() {
    modal.style.display = "initial";
    endGame.style.display = "flex";
    restartingGame.style.display = "none";
    winnerMark.style.display = "none";
    winnerTakes.innerHTML = "round tied";
    winnerTakes.style = "color: hsl( var(--clr-silver) );";
    winnerName.style.display = "none";
    drawScore.innerHTML++;
}

function nextRound() {
    var boxPlayed = document.querySelectorAll(".boxPlayed");
    const box0 = document.getElementById("box0");
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");
    const box4 = document.getElementById("box4");
    const box5 = document.getElementById("box5");
    const box6 = document.getElementById("box6");
    const box7 = document.getElementById("box7");
    const box8 = document.getElementById("box8");

    modal.style.display = "none";
    endGame.style.display = "none";
    restartingGame.style.display = "none";
    for (all of boxPlayed) {
        all.parentNode.removeChild(all);
    }

    for (all of allBox) {
        all.setAttribute("data-value", "");
        all.classList.add("hoverClassX");
        all.classList.remove("animation");
    }
    turn.setAttribute("data-value", "X");
    turn.src = "./assets/icon-x-turn.svg";
    box0.setAttribute("onclick", "hitBox('box0')");
    box1.setAttribute("onclick", "hitBox('box1')");
    box2.setAttribute("onclick", "hitBox('box2')");
    box3.setAttribute("onclick", "hitBox('box3')");
    box4.setAttribute("onclick", "hitBox('box4')");
    box5.setAttribute("onclick", "hitBox('box5')");
    box6.setAttribute("onclick", "hitBox('box6')");
    box7.setAttribute("onclick", "hitBox('box7')");
    box8.setAttribute("onclick", "hitBox('box8')");
    X_pattern = [];
    O_pattern = [];
}

function displayModalRestart() {
    modal.style.display = "initial";
    endGame.style.display = "none";
    restartingGame.style.display = "flex";
};

function cancelReset() {
    modal.style.display = "none";
    checkWin(O_pattern);
    checkWin(X_pattern);
};
