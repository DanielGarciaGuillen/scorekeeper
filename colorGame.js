var colors=generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");




colorDisplay.textContent = pickedColor;

// Add colors and compate to pickec color
for(var i = 0; i <squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        //compare to pickedColor
       console.log(clickedColor, pickedColor);
       var clickedColor=this.style.backgroundColor;
       console.log(clickedColor, pickedColor);
       if(clickedColor === pickedColor){
           message.textContent = "Correct!";
           changeColors(clickedColor);
           h1.style.backgroundColor = pickedColor;
       } else{
            message.textContent = "Try Again"
        }       
    });
}


//change all squares to same color
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//random colors for squares
function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}


//generate random colors

function generateRandomColors(num){
    arr = []
    for(var i= 0 ; i<num; i++){
    arr.push(randomColor())
    }

    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}