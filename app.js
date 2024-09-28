let gameSeq = [];
let userSeq = [];

let btns = ["red" , "green" , "yellow" , "purple"];

let started = false;
let level = 0;

let para = document.querySelector('p');

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game start");
        started = true;    
        
        levelUp();
    }   
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout( function() {
        btn.classList.remove("gameflash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    para.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3) +1 ;
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        } 
    }else{
        para.innerHTML =  `Game Over! Your Score Was <b>${level}</b> <br>Press Any Key To Start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = "white";  
        }, 100);
        reset();
    }
    
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}