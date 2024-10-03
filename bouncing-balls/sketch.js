// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  for (let someBall of ballArray){
    //move ball 
    someBall.x += someBall.dx;
    someBall.y += someBall.dy;

    //Bounce if needed
    if(someBall.x<=someBall.radius || someBall.x>=width-someBall.radius){
      someBall.dx *= -1;
    }

    if(someBall.y<=someBall.radius || someBall.y>=height-someBall.radius){
      someBall.dy *= -1;
    }

    //Display ball
    noStroke();
    fill(someBall.red,someBall.green,someBall.blue);
    circle(someBall.x,someBall.y,someBall.radius*2);
  }

  for (let i = 0; i < 200; i++){
    spawnBall(width/2,height/2);
  }

}

function spawnBall(theX,theY){
  let Ball = {
    x: theX,
    y: theY,
    radius: random(30,75),
    dx: random(100,200),
    dy: random(100,200),
    red: random(120,255),
    blue: random(120,255),
    green: random(125,255),
  };
  ballArray.push(Ball);
}

function mousePressed(){
  spawnBall(mouseX,mouseY);
}