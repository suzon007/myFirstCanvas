//By Zahidul Islam Suzon

window.onload = function (){
  var button = document.getElementById("previewButton");
  button.onclick = previewHandler;

};

function fillBackgroundColor(canvas, context) {
var selectObj = document.getElementById("backgroundColor");
var index = selectObj.selectedIndex;
var bgColor = selectObj.options[index].value;
context.fillStyle = bgColor;
context.fillRect(0, 0, 600, 200);
}


function previewHandler(){
  var canvas = document.getElementById("tshirtCanvas");
  var context = canvas.getContext("2d");
  fillBackgroundColor(canvas, context);

  var selectObj = document.getElementById("shape"); //we need to see what shape you choose to in interface.
  var index = selectObj.selectedIndex;
  var shape = selectObj[index].value;

  if (shape == "squares"){
    for(var squares = 0; squares < 20; squares++){
      drawSquare(canvas, context);
    }
  }
  else {
    for(var circles = 0; circles < 20; circles++){
      drawCircle(canvas, context);
    }
  }
}
//function for circle

function drawCircle(canvas, context){
  var w = Math.floor(Math.random()*40);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = "lightblue";
  context.beginPath();
  context.arc(x,y,w,0,2*Math.PI);
  context.fillStyle = 'lightblue';
  context.fill();


}

//function for squares
function drawSquare(canvas, context){
  var w = Math.floor(Math.random()*40);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = "lightblue";
  context.fillRect(x, y, w, w);
}
