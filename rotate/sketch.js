// Translate and rotate


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push();//save the transformation matrix
  translate(200,200);
  rotate(mouseY);
  fill("red");
  square(0,0,100);
  pop();//reset the transformation


  fill("green"),
  rect(width/2,height/2,width*2,height-600);
}
