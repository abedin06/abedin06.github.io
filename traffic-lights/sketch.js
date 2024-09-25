// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let r;
let g;
let b;
let isgreen = true;
let isyellow = false;
let isred = false;

let rt = 3000;
let gt = 4000;
let yt = 2000;

let lastswitch = 0;



function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  dictatecolor();
  changecolor();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(r,g,b);
  ellipse(width/2, height/2 - 65, 50, 50); //top

  fill(r,g,b);
  ellipse(width/2, height/2, 50, 50); //middle

  fill(r,g,b);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function changecolor(){
  if (millis() > lastswitch+gt){
    isgreen = false;
    isyellow = true;
    isred = false;
  }
  if(millis() > lastswitch+yt+gt){
    isyellow = false;
    isred = true;
    isgreen = false;
  }

  if(millis()> lastswitch+yt+gt+rt){
    isred = false;
    isgreen = true;
    isyellow = false;
    lastswitch = millis();
  }

}

function dictatecolor(){
  if (isgreen){
    r = 0;
    g = 255;
    b = 0;
  }

  else if (isyellow){
    r = 255;
    g = 255;
    b = 0;

  }

  else if (isred){
    r = 255;
    g = 0;
    b = 0;
  }

}
