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
    


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  moveBall();
  bounceBall();
  displayball();
  displaybar();
  movebar();

  if(lastswitch+waitTime < millis()){
    distractions();
    lastswitch = millis();
  }
}

function moveBall(){
  x+=dx;
  y +=dy;
}

function bounceBall(){

  if (x>= width-radius || x<= radius){
    dx = dx*-1;
    changecolor();
  }
  
  else if (y>= height-radius || y <= radius){
    dy = dy *-1; 
    changecolor();
  }
  
  else if ((x+radius > rx && x+radius < rx+rw) && (y +radius > windowHeight-rh && y+radius < windowHeight)){
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
  rect(rx,windowHeight-rh,rw,rh);
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
    rw = 125;
  }
  if (event.delta < 0 ){
    rw =  100;
  }
}

function distractions(){
  let colour = color(r,g,b);
  let ax = random(0,windowWidth);
  let ay = random(0,windowHeight/2);
  fill(colour);
  circle(ax, ay,radius*2);

  if (ay<=windowHeight){
    ay += 0.5;
  }

  else{
    ay -= 0.5;
  }

}
