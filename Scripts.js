let optionPlayer;
let countWin = 0;
let countLose = 0;
let btnRock = document.querySelector('.Buttons__Rock');
let btnPaper = document.querySelector('.Buttons__Paper');
let btnScissor = document.querySelector('.Buttons__Scissors');
let btnPlay = document.querySelector('.Buttons__Play')
let scorePlayer = document.querySelector('.scorePlayer');
let scoreAI = document.querySelector('.scoreAI');
let screenResultPlayer = document.querySelector('.Scores__Results--Player');
let screenResultAI = document.querySelector('.Scores__Results--Bot');
let textResult = document.querySelector('.result');

btnPlay.addEventListener('click',rockPaperScissors)
btnRock.addEventListener('click',playerChooseRock)
btnPaper.addEventListener('click',playerChoosePaper)
btnScissor.addEventListener('click',playerChooseScissor)

function playerChooseRock() {
    optionPlayer = 1;
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/DZwcY8Y2/Rock.png)'
}
function playerChoosePaper() {
    optionPlayer = 2;
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/4ytwpjSt/paper.png)'
}
function playerChooseScissor() {
    optionPlayer = 3;
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/Ss1G0kwc/Scissors.png)'
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* 
function compareResult(choosePlayer,chooseAI) {
    if ((choosePlayer == 1 && chooseAI == 3) || (choosePlayer == 2 && chooseAI == 1) || (choosePlayer == 3 && chooseAI == 2)) {
        optionPlayer = 0;
        countWin = countWin + 1;
        scorePlayer.innerHTML = "Score: " + countWin
        screenResultPlayer.classList.remove('inactive');
        screenResultAI.classList.remove('inactive');
        textResult.classList.remove('inactive');
    } else if ((choosePlayer == 1 && chooseAI == 2) || (choosePlayer == 2 && chooseAI == 3) || (choosePlayer == 3 && chooseAI == 1)) {
        optionPlayer = 0;
        countLose = countLose + 1;
        scoreAI.innerHTML = "Score: " + countLose;
        screenResultPlayer.classList.remove('inactive');
        screenResultAI.classList.remove('inactive');
        textResult.classList.remove('inactive');
    } else if ((choosePlayer == 1 && chooseAI == 1) || (choosePlayer == 2 && chooseAI == 2) || (choosePlayer == 3 && chooseAI == 3)) {
        optionPlayer = 0;
        btnPlay.innerHTML = "Draw! Try again";
        screenResultPlayer.classList.remove('inactive');
        screenResultAI.classList.remove('inactive');
        textResult.classList.remove('inactive');
    } else {
        alert('Please select an option');
    }
    btnPlay.innerHTML = "Play again!"
}
 */

function compareResult(choosePlayer,chooseAI) {
    if (btnPlay.innerHTML == "Play again!") {
        btnPlay.innerHTML = "Play"
        screenResultPlayer.classList.add('inactive');
        screenResultAI.classList.add('inactive');
        textResult.classList.add('inactive');
    } else {
        if ((choosePlayer == 1 && chooseAI == 3) || (choosePlayer == 2 && chooseAI == 1) || (choosePlayer == 3 && chooseAI == 2)) {
            optionPlayer = 0;
            countWin = countWin + 1;
            scorePlayer.innerHTML = "Score: " + countWin
            screenResultPlayer.classList.remove('inactive');
            screenResultAI.classList.remove('inactive');
            textResult.classList.remove('inactive');
            textResult.innerHTML = 'YOU WON!'
        } else if ((choosePlayer == 1 && chooseAI == 2) || (choosePlayer == 2 && chooseAI == 3) || (choosePlayer == 3 && chooseAI == 1)) {
            optionPlayer = 0;
            countLose = countLose + 1;
            scoreAI.innerHTML = "Score: " + countLose;
            screenResultPlayer.classList.remove('inactive');
            screenResultAI.classList.remove('inactive');
            textResult.classList.remove('inactive');
            textResult.innerHTML = 'AI WON, BETTER LUCK NEXT TIME!'
        } else if ((choosePlayer == 1 && chooseAI == 1) || (choosePlayer == 2 && chooseAI == 2) || (choosePlayer == 3 && chooseAI == 3)) {
            optionPlayer = 0;
            btnPlay.innerHTML = "Draw! Try again";
            screenResultPlayer.classList.remove('inactive');
            screenResultAI.classList.remove('inactive');
            textResult.classList.remove('inactive');
            textResult.innerHTML = 'DRAW!'
        } else {
            alert('Please select an option');
        }
        btnPlay.innerHTML = "Play again!"
    }
}

function rockPaperScissors(event) {
    event.preventDefault;
    let optionAI = getRandomIntInclusive(1,3)
    if (optionAI == 1) {
        optionAI = 1
        screenResultAI.style.backgroundImage='url(https://i.postimg.cc/zXTLCKGQ/Rock-Bot.png)'
    } else if (optionAI == 2) {
        optionAI = 2
        screenResultAI.style.backgroundImage='url(https://i.postimg.cc/WpBFqXTr/Paper-Bot.png)'
    } else if (optionAI == 3) {
        optionAI = 3
        screenResultAI.style.backgroundImage='url(https://i.postimg.cc/J7DHh9VM/Scissors-Bot.png)'
    }
    compareResult(optionPlayer,optionAI)
}

/*
https://i.postimg.cc/zXTLCKGQ/Rock-Bot.png
https://i.postimg.cc/WpBFqXTr/Paper-Bot.png
https://i.postimg.cc/J7DHh9VM/Scissors-Bot.png
*/

