function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

//This is a user defined function for drawing a dice with the value one.
function diceValueOne(){
  strokeWeight(1);
  square(20, 20, 40);
  strokeWeight(5);
  point(40,40, 10);
}
