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
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/59SNgv4T/Rock.png)'
}
function playerChoosePaper() {
    optionPlayer = 2;
    btnPaper.setAttribute("id",'selectPlayer');
    btnRock.removeAttribute("id",'selectPlayer');
    btnScissor.removeAttribute("id",'selectPlayer');
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/vThYmR2b/paper.png)'
}
function playerChooseScissor() {
    optionPlayer = 3;
    btnScissor.setAttribute("id",'selectPlayer');
    btnRock.removeAttribute("id",'selectPlayer');
    btnPaper.removeAttribute("id",'selectPlayer');
    screenResultPlayer.style.backgroundImage='url(https://i.postimg.cc/MTkKPmj2/Scissors.png)'
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pad(n, width, z) {
    z = z || '0';
    n = n + ''; 
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n; 
}

function compareResult(choosePlayer,chooseAI) {
    if (btnPlay.innerHTML == "Play again!") {
        screenResultPlayer.style.backgroundImage=screenResultPlayer.getAttribute("url");
        screenResultAI.style.backgroundImage=screenResultAI.getAttribute("url");
        btnPlay.innerHTML = "Play"
        btnRock.removeAttribute("id",'selectPlayer');
        btnPaper.removeAttribute("id",'selectPlayer');
        btnScissor.removeAttribute("id",'selectPlayer');
        textResult.setAttribute("id","inactive");
    } else {
        if ((choosePlayer == 1 && chooseAI == 3) || (choosePlayer == 2 && chooseAI == 1) || (choosePlayer == 3 && chooseAI == 2)) {
            optionPlayer = 0;
            btnPlay.innerHTML = "Play again!"
            countWin = countWin + 1;
            countWinCeros = pad(countWin,3);
            scorePlayer.innerHTML = "Score: " + countWinCeros
            screenResultPlayer.removeAttribute("id",'inactive');
            screenResultAI.removeAttribute("id",'inactive');
            textResult.removeAttribute("id",'inactive');
            textResult.setAttribute("id","Won");
            textResult.innerHTML = 'YOU WON!'
            btnRock.setAttribute("id","inactive");
            btnPaper.setAttribute("id","inactive");
            btnScissor.setAttribute("id","inactive");
        } else if ((choosePlayer == 1 && chooseAI == 2) || (choosePlayer == 2 && chooseAI == 3) || (choosePlayer == 3 && chooseAI == 1)) {
            optionPlayer = 0;
            btnPlay.innerHTML = "Play again!"
            countLose = countLose + 1;
            countLoseCeros = pad(countLose,3);
            scoreAI.innerHTML = "Score: " + countLoseCeros;
            screenResultPlayer.removeAttribute("id",'inactive');
            screenResultAI.removeAttribute("id",'inactive');
            textResult.removeAttribute("id",'inactive');
            textResult.setAttribute("id","Lose");
            textResult.innerHTML = 'YOU LOSE, BETTER LUCK NEXT TIME!'
            btnRock.setAttribute("id","inactive");
            btnPaper.setAttribute("id","inactive");
            btnScissor.setAttribute("id","inactive");
        } else if ((choosePlayer == 1 && chooseAI == 1) || (choosePlayer == 2 && chooseAI == 2) || (choosePlayer == 3 && chooseAI == 3)) {
            optionPlayer = 0;
            btnPlay.innerHTML = "Play again!"
            screenResultPlayer.removeAttribute("id",'inactive');
            screenResultAI.removeAttribute("id",'inactive');
            textResult.removeAttribute("id",'inactive');
            textResult.setAttribute("id","Draw");
            textResult.innerHTML = 'DRAW!'
            btnRock.setAttribute("id","inactive");
            btnPaper.setAttribute("id","inactive");
            btnScissor.setAttribute("id","inactive");
        } else {
            alert('Please select an option');
            screenResultAI.style.backgroundImage='url(https://i.postimg.cc/85kWKwVX/Bot.png)'
        }
    }
}
function rockPaperScissors(event) {
    event.preventDefault;
    let optionAI = getRandomIntInclusive(1,3)
    if (optionAI == 1) {
        optionAI = 1
        screenResultAI.style.backgroundImage='url(https://i.postimg.cc/HsW-Whxjx/Rock-Bot.png)'
    } else if (optionAI == 2) {
        optionAI = 2
        screenResultAI.style.backgroundImage='url(https://i.postimg.cc/50w9ZQwH/Paper-Bot.png)'
    } else if (optionAI == 3) {
        optionAI = 3
        screenResultAI.style.backgroundImage='url(https://i.postimg.cc/tJpRyR5B/Scissors-Bot.png)'
    }
    compareResult(optionPlayer,optionAI)
}


