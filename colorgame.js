
var numberOfSquares=6;
var colors= generateRandomColors(numberOfSquares);


var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");




easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares=3;
    colors=generateRandomColors(numberOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<squares.length;i++){
        if(colors[i]){
        squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    isEasy=true;
})

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares=6;

    colors=generateRandomColors(numberOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<squares.length;i++){      
            squares[i].style.backgroundColor=colors[i];     
            squares[i].style.display="block";
    }
})

resetButton.addEventListener("click", function(){
    // generate all new colors
     colors=generateRandomColors(numberOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<squares.length;i++){
        squares[i].style.background=colors[i];
    }  
    h1.style.backgroundColor="steelblue";
    // pick new randm color from array
   
})
colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){

    squares[i].style.backgroundColor=colors[i]

    squares[i].addEventListener("click", function(){
       //grab color of clicked square
       var clickedColor=this.style.backgroundColor;
       //compare color to the color on the top
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again";
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try again";
        }
    })
}

function changeColors(color){
    //loop through all squares change eahc color to match given colo
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
   var random= Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColors(num){
    // make an array
    var arr=[];

    // add num random color to array
    for(var i=0; i<num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
   var r= Math.floor( Math.random()*256);
    //pick "green" from 0-255
    var g= Math.floor( Math.random()*256);
    //pick "blue "0-255
    var b= Math.floor( Math.random()*256);

    return "rgb(" +r+", "+g+", "+b+")";
}