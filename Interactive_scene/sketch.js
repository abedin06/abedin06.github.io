// Interactive Game
// Araddho Abedin
// Sept 20


let x = 200;
let y = 200;

let dx = 10;
let dy = 5;
let radius = 25;

let r = 255;
let g = 255;
let b = 255;

let rx = 0;
let rs = 20;
let rw = 100;
let rh = 50;

let flash_on = 10000;

let screenState = "Homescreen";

let lives = 15;



    


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gameState();
  changeState();
}


// Movement Functions

function moveBall(){
  x+=dx;
  y+=dy;
}

function bounceBall(){

  if (x>= windowWidth-radius || x<= radius){
    dx = dx*-1;
    changecolor();
  }

  if (y>= windowHeight-radius){
    dy = dy *-1;
    lives -= 1;
    changecolor();
  }

  if(y<=radius){
    dy = dy*-1;
    changecolor();
  }
}

function bounceballoffbar(){
  if ((x+radius > rx && x+radius < rx+rw) && (y +radius > windowHeight-rh && y+radius < windowHeight)){
    dx = dx* 1.005;
    dy = dy*-1.005;
    changecolor();
  }

}

function movebar(){
  
  if (keyIsDown(37)){
    rx -= rs;
  }
  
  if (keyIsDown(39)){
    rx += rs;
  }

  if (rx+rw >= windowWidth && keyIsPressed){
    rx = windowWidth-rw;
  }

  if (rx<= 0 && keyIsPressed){
    rx = 0;
  }
}


//Display functions


function displaybar(){
  fill(255);
  rect(rx,windowHeight-rh,rw,rh,5);
}

function displayBall(){
  let colour = color(r,g,b);
  fill(colour);
  circle(x,y,radius*2);
}

function changecolor(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  
}

function distractions(){
  let ax = random(0,windowWidth);
  let ay = random(0,windowHeight);
  let colour = color(random(125,255),random(125,255),random(125,255));
  fill(colour);
  circle(ax, ay,radius*2);
}

//Mousewheel

function mouseWheel(event){
  if (event.delta > 0 ){
    rw = 100;
  }
  if (event.delta < 0 ){
    rw =  125;
  }
}

//Game state functions

function gameState(){
  if (screenState === "Homescreen"){
    background(255);
    textSize(50);
    textAlign(CENTER, TOP);
    text('Press S to start',windowWidth/2,windowHeight/2-75);


    textSize(30);
    textAlign(CENTER);
    text('Ball hitting bottom of screen leads to loss of lives',windowWidth/2,windowHeight/2);

    textSize(20)
    textAlign(CENTER,BASELINE);
    text('You get 15 lives',windowWidth/2,windowHeight/2 +50);
  }

  if(screenState === "Startgame"){
    background(0);
    displayBall();
    displaybar();
    moveBall()
    bounceBall();
    bounceballoffbar();
    movebar();

    if (millis() > flash_on){
      for (let i = 0; i < 5; i++){
        distractions();}}
  

    if(millis()> 3*flash_on){
      for (let i = 0; i < 10; i++){
        distractions();
      }}}

  if(screenState === "EndScreen"){
    background(255);
    textSize(50);
    textAlign(CENTER);
    text('Game Over',windowWidth/2,windowHeight/2);
  }
}

function changeState(){
  if (keyIsDown(83)){
    screenState = "Startgame";
  }

  if (lives<=0){
    screenState = "EndScreen";
  }
}

