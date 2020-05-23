//This is the code
var num ;

function setup() {
  createCanvas(400, 1260);
num = prompt("enter a number");
}

function draw() {
  background(220);
for (var num1 = 1; num1 <= 50; num1 = num1+1){
textSize(30);
textFont("Georgia");
text(num + "*" + num1 + "=" + num*num1, 50,25*num1);
}
  drawSprites();
}


