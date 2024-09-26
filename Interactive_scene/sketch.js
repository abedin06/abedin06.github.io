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

let lastswitch = 0;
let waitTime = 2000;

let ax;
let ay;
    


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  bounceballoffbar();
  displayball();
  moveBall();
  bounceBall(x,y);
  displaybar();
  movebar();

  for(let i = 0; i<5 ; i++){
    distractions();
  }
}

function moveBall(){
  x+=dx;
  y +=dy;
}

function bounceBall(xcor,ycor){

  if (xcor>= windowWidth-radius || xcor<= radius){
    dx = dx*-1;
    changecolor();
  }
  
  else if (ycor>= windowHeight-radius || ycor <= radius){
    dy = dy *-1; 
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

function displayball(){
  let colour = color(r,g,b);
  fill(colour);
  circle(x,y,radius*2);
}

function changecolor(){
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  
}

function displaybar(){
  fill(255);
  rect(rx,windowHeight-rh,rw,rh,5);
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

function mouseWheel(event){
  if (event.delta > 0 ){
    rw = 100;
  }
  if (event.delta < 0 ){
    rw =  125;
  }
}

function distractions(){
  let colour = color(r,g,b);
  let ax = random(0,windowWidth);
  let ay = random(0,windowHeight);
  fill(colour);
  circle(ax, ay,radius*2);

}
