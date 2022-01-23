var computerOptions = ["r", "p", "s"];
var win_lose = document.getElementById("win_lose");
var pE = document.getElementById("player");
var cE = document.getElementById("computer");

var pScoreE = document.getElementById("pScoreE");
var pScore = 0;
var cScoreE = document.getElementById("cScoreE");
var cScore = 0;


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

    pE.innerHTML = player;
    cE.innerHTML = computer;
    pScoreE.innerHTML = pScore;
    cScoreE.innerHTML = cScore;
    win_lose.innerHTML = output;
    // console.log(rn);
}
