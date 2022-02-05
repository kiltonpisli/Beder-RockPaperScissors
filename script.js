var win_lose = document.getElementById("win_lose");
var pE = document.getElementById("player");
var cE = document.getElementById("computer");
var pScoreE = document.getElementById("pScoreE");
var cScoreE = document.getElementById("cScoreE");
var resultE = document.getElementById("result");
var rulesModal = document.getElementById("rules_modal");
var gameE = document.getElementById("game");

var pScore, cScore, computerOptions;

function init(){
    computerOptions = ["r", "p", "s"];
    pScore = 0;
    cScore = 0;
    
    pScoreE.innerHTML = pScore;
    cScoreE.innerHTML = cScore;
}
init();

function play(player){
    var rn = Math.floor(Math.random() * 3);
    var computer = computerOptions[rn];
    var output;

    if(player == "r"){
        if(computer == "p"){
            output = "computer wins";
            cScore++;
        }else if(computer == "s"){
            output = "you win";
            pScore++;
        }else{
            output = "tie";
        }
    }else if(player == "p"){
        if(computer == "s"){
            output = "computer wins";
            cScore++;
        }else if(computer == "r"){
            output = "you win";
            pScore++;
        }else{
            output = "tie";
        }
    }else{ //s
        if(computer == "r"){
            output = "computer wins";
            cScore++;
        }else if(computer == "p"){
            output = "you win";
            pScore++;
        }else{
            output = "tie";
        }
    }

    pE.innerHTML = "player choice: " + player;
    cE.innerHTML = "computer choice: " + computer;
    pScoreE.innerHTML = pScore;
    cScoreE.innerHTML = cScore;
    win_lose.innerHTML = "result: " + output;

    resultE.style.display = "block";
    gameE.style.display = "none";
    // console.log(rn);
}

function playAgain(){
    gameE.style.display = "inline-block";
    resultE.style.display = "none";
}

function show_hide_modal(action){
    if(action == "show"){
        rulesModal.style.display = "block";
    }else{
        rulesModal.style.display = "none";
    }
}
