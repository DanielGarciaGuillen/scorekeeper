var color=[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255"
]

var squares = document.querySelectorAll(".square")
var pickedColor = color[3];
var colorDisplay = document.getElementById("colorDisplay")

colorDisplay.textContent = pickedColor;


for(var i = 0; i <squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = color[i];

    //add click listener to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked sqaure
        //compare to pickedColor
       var clickedColor=this.style.backgroundColor;
       if(clickedColor === pickedColor){
           alert("Correct!");
        } else{
            alert("Wrong!");
        }
       
    });
}

