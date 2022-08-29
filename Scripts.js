let optionPlayer;
let btnRock = document.querySelector('.Buttons__Rock');
let btnPaper = document.querySelector('.Buttons__Paper');
let btnScissor = document.querySelector('.Buttons__Scissors');
let btnPlay = document.querySelector('.Buttons__Play')
let scorePlayer = document.querySelector('.scorePlayer');
scorePlayer.innerHTML = 0;
let scoreAI = document.querySelector('.scoreAI');
scoreAI.innerHTML = 0;

btnPlay.addEventListener('click',rockPaperScissors)
btnRock.addEventListener('click',playerChooseRock)
btnPaper.addEventListener('click',playerChoosePaper)
btnScissor.addEventListener('click',playerChooseScissor)

function playerChooseRock() {
    optionPlayer = 1;
}
function playerChoosePaper() {
    optionPlayer = 2;
}
function playerChooseScissor() {
    optionPlayer = 3;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function compareResult(choosePlayer,chooseAI) {
    btnPlay.innerHTML = "Try again!"
    if ((choosePlayer == 1 && chooseAI == 3) || (choosePlayer == 2 && chooseAI == 1) || (choosePlayer == 3 && chooseAI == 2)) {
        scorePlayer = scorePlayer + 1;
        alert('Win Player')
    } else if ((choosePlayer == 1 && chooseAI == 2) || (choosePlayer == 2 && chooseAI == 3) || (choosePlayer == 3 && chooseAI == 1)) {
        scoreAI = scoreAI + 1;
        alert('Win AI')
    } else {
        btnPlay.innerHTML = "Draw!!"
        alert('Better luck next time')
    }
}

function rockPaperScissors(event) {
    event.preventDefault;
    let optionAI = getRandomIntInclusive(1,3)
    if (optionAI == 1) {
        optionAI = 1
    } else if (optionAI == 2) {
        optionAI = 2
    } else if (optionAI == 3) {
        optionAI = 3
    }
    compareResult(optionPlayer,optionAI)
    console.log(optionPlayer + optionAI);
}