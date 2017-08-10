var gameOver = false;
var winningScore = 5;

// Player 1 //
var score1 = 0;
var player1 = document.getElementById("player1");

player1.addEventListener("click", function(){
    if(!gameOver){  
score1++;
if(score1 == winningScore){
        sc1.classList.add("winner");
        gameOver = true;
}
sc1.textContent = score1;
    }
}); 

//Player 2 //
var score2 = 0;
var player2 = document.getElementById("player2");

player2.addEventListener("click", function(){
    if(!gameOver){   
score2++;
if(score2 == winningScore){    
    sc2.classList.add("winner"); 
    gameOver = true;   
    }
sc2.textContent = score2;
    }
}); 


//reset//
var reset = document.getElementById("rest");


reset.addEventListener("click", function(){
    sc2.classList.remove("winner");
    sc1.classList.remove("winner");
    score1 = 0;
    score2 = 0;
    sc1.textContent = 0;
    sc2.textContent = 0;
    gameOver = false;
    });

function set(){   
sc2.classList.remove("winner");
sc1.classList.remove("winner");
score1 = 0;
score2 = 0;
sc1.textContent = 0;
sc2.textContent = 0;
gameOver = false;
};



//Score limit//
var numInput = document.getElementById("scorelimit");
var scorelimit = document.getElementById("score");

numInput.addEventListener("change", function(){
    scorelimit.textContent = numInput.value;
    winningScore = Number(numInput.value);
    set();
})












