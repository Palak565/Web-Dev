let gameseq = []; 
let userseq = [];

let started = false;
let level = 0;
let score = 0; // highest score

let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
// if game is not started, keypress -> start game
document.addEventListener('keypress',()=>{
    if (started == false){
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add('gameflash');

    setTimeout(function(){
        btn.classList.remove('gameflash');
    },200);
}

function userFlash(btn){
    btn.classList.add('userflash');

    setTimeout(function(){
        btn.classList.remove('userflash');
    },200);
}

// empty userseq, levelup, flash random button
function levelUp(){
    userseq = []; // empty userseq after level updation
    level++;
    h2.innerText = `Level ${level}`;


    //choose random btn
    let random = Math.floor((Math.random()*4))+1;
    let btn = document.querySelector(`#div${random}`);
    gameseq.push(btn);
    gameFlash(btn);
}

// check ans. If correct and complete -> levelUp. If incorrect, gameover & reset. If correct & incomplete -> don't do anything becoz with every btnPress, we are checking correctness of ans
function checkAns(idx){
    if (userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
            setTimeout(levelUp,300);
        }
    } else {
        gameOver();
        reset();
    }
}

// when user presses btn(clicks div), btn flashes. Check if currently added btn is correct in the seq
function btnPress(){
    let btn = this;
    userFlash(btn);
    userseq.push(btn);
    checkAns(userseq.length-1);
}

let btns = document.querySelectorAll('.btn');
for (let btn of btns){
    btn.addEventListener('click',btnPress);
}

// show 'game over' and print scores
function gameOver(){
    body.classList.add('gameover');
    setTimeout(()=>{
        body.classList.remove('gameover')
    },300);
    
    score = Math.max(score,level-1);
    h2.innerText = `Game over!\n Current score: ${level-1} \t Highest score: ${score}\n Press any key to restart.`;
    
}

// reset to initial values
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}