// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let color1;
let color2;
let color3;
let isgreen = true;
let isyellow = false;
let isred = false;

let rt = 3000;
let gt = 3500;
let yt = 1500;

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
  fill(color1);
  ellipse(width/2, height/2 - 65, 50, 50); //top

  fill(color2)
  ellipse(width/2, height/2, 50, 50); //middle

  fill(color3)
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function changecolor(){
  if (millis() > lastswitch+gt){
    isyellow = !isyellow
  }
  if(millis() > lastswitch+yt+gt){
    isred = !isred;
  }

  if(millis()> lastswitch+yt+gt+rt){
    isgreen = !isgreen;
    lastswitch = millis();
  }

}

function dictatecolor(){
  if (isgreen){
    color1 = 0,255,0;
    color2 = 0,0,0;
    color3 = 0,0,0;
  }

  if (isyellow){
    color1= 0,0,0;
    color2= 255,255,0;
    color3= 0,0,0;
  }

  if (isred){
    color1= 0,0,0;
    color2= 0,0,0;
    color3= 255,0,0;
  }

}
