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
    btnRock.setAttribute("id",'selectPlayer');
    btnPaper.removeAttribute("id",'selectPlayer');
    btnScissor.removeAttribute("id",'selectPlayer');
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/DZwcY8Y2/Rock.png)'
}
function playerChoosePaper() {
    optionPlayer = 2;
    btnPaper.setAttribute("id",'selectPlayer');
    btnRock.removeAttribute("id",'selectPlayer');
    btnScissor.removeAttribute("id",'selectPlayer');
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/4ytwpjSt/paper.png)'
}
function playerChooseScissor() {
    optionPlayer = 3;
    btnScissor.setAttribute("id",'selectPlayer');
    btnRock.removeAttribute("id",'selectPlayer');
    btnPaper.removeAttribute("id",'selectPlayer');
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/Ss1G0kwc/Scissors.png)'
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function compareResult(choosePlayer,chooseAI) {
    if (btnPlay.innerHTML == "Play again!") {
        btnPlay.innerHTML = "Play"
        btnRock.removeAttribute("id",'selectPlayer');
        btnPaper.removeAttribute("id",'selectPlayer');
        btnScissor.removeAttribute("id",'selectPlayer');
        screenResultPlayer.setAttribute("id","inactive");
        screenResultAI.setAttribute("id","inactive");
        textResult.setAttribute("id","inactive");
    } else {
        if ((choosePlayer == 1 && chooseAI == 3) || (choosePlayer == 2 && chooseAI == 1) || (choosePlayer == 3 && chooseAI == 2)) {
            optionPlayer = 0;
            btnPlay.innerHTML = "Play again!"
            countWin = countWin + 1;
            scorePlayer.innerHTML = "Score: " + countWin
            screenResultPlayer.removeAttribute("id",'inactive');
            screenResultAI.removeAttribute("id",'inactive');
            textResult.removeAttribute("id",'inactive');
            textResult.innerHTML = 'YOU WON!'
            btnRock.setAttribute("id","inactive");
            btnPaper.setAttribute("id","inactive");
            btnScissor.setAttribute("id","inactive");
        } else if ((choosePlayer == 1 && chooseAI == 2) || (choosePlayer == 2 && chooseAI == 3) || (choosePlayer == 3 && chooseAI == 1)) {
            optionPlayer = 0;
            btnPlay.innerHTML = "Play again!"
            countLose = countLose + 1;
            scoreAI.innerHTML = "Score: " + countLose;
            screenResultPlayer.removeAttribute("id",'inactive');
            screenResultAI.removeAttribute("id",'inactive');
            textResult.removeAttribute("id",'inactive');
            textResult.innerHTML = 'AI WON, BETTER LUCK NEXT TIME!'
            btnRock.setAttribute("id","inactive");
            btnPaper.setAttribute("id","inactive");
            btnScissor.setAttribute("id","inactive");
        } else if ((choosePlayer == 1 && chooseAI == 1) || (choosePlayer == 2 && chooseAI == 2) || (choosePlayer == 3 && chooseAI == 3)) {
            optionPlayer = 0;
            btnPlay.innerHTML = "Play again!"
            screenResultPlayer.removeAttribute("id",'inactive');
            screenResultAI.removeAttribute("id",'inactive');
            textResult.removeAttribute("id",'inactive');
            textResult.innerHTML = 'DRAW!'
            btnRock.setAttribute("id","inactive");
            btnPaper.setAttribute("id","inactive");
            btnScissor.setAttribute("id","inactive");
        } else {
            alert('Please select an option');
        }
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

