// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let another_terrain = [];
let yet_another_terrain = [];
const NUMBER_OF_RECTS = 10000;

let targetX;
let targetY;

let targetsize = 100;

let playerX;
let playerY;

let playerSize = 20;

let v0; //intial speed
let theta; //launch angle

const G = -9.81;

let time = 0;
let terrainGraphics;

let langle; //program generated launch angle
let lspeed;// program generated launch speed

let screenState = "homescreen";
let struck_target = false;
let decision = "nothing";



function setup() {
  createCanvas(windowWidth, windowHeight);
  targetX = Math.round(random(width/2,width-100));
  targetY = Math.round(random(50,height-50));

  playerX = Math.round(random(50,width/2-50));
  playerY = Math.round(random(200,height-200));

  x = targetX+targetsize/2 - playerX;
  y = playerY - (targetY+targetsize/2);

  angleMode(DEGREES);

  // Generate terrain
  let how_wide = width/NUMBER_OF_RECTS;
  generate_terrain(how_wide);


  // Create off-screen graphics buffer

  terrainGraphics = createGraphics(windowWidth, windowHeight);
  terrainGraphics.background("lightgreen");
  terrainGraphics.noStroke();

  // Draw terrain to the buffer

  for (let otherRect of another_terrain) {
    terrainGraphics.fill("skyblue");
    terrainGraphics.rect(otherRect.x, otherRect.y, otherRect.w, otherRect.h);
  }
  for (let anotherRect of yet_another_terrain) {
    terrainGraphics.fill("lightblue");
    terrainGraphics.rect(anotherRect.x, anotherRect.y, anotherRect.w, anotherRect.h);

  }
}

function draw() {
  GameState();
  ChangeState();
}


// Display functions
function displayTarget(){
  fill("white");
  square(targetX,targetY,targetsize);
}

function displayPlayer(){
  fill("red");
  circle(playerX,playerY,playerSize*2);
}

function player_Decision(){
  if (keyIsDown(70)){
    let prompt1 = prompt("Please enter your launch speed");
    let prompt2 = prompt("Please enter your launch angle");
    v0 = parseFloat(prompt1);
    theta = parseFloat(prompt2);
    decision = "play";
  }

  if(keyIsDown(76)){
    decision = "give up";
  }
}

function displayGameInfo(){
  fill("black");
  textSize(30);
  text(targetX+targetsize/2,width-100,50);
  text(targetY+targetsize/2,width-100,85);
  
  fill("red");
  textSize(30);
  text(playerX,100,50);
  text(playerY,100,85);
}




// Terrain generation functions

function generate_terrain(theWidth){

  let time = 0;
  let deltaTime = 0.0001;
  for (let x = 0; x < width; x+= theWidth){
    let theHeight = noise(time)*height*0.5;
    let otherRect = spawnRectangle(x,theHeight+200,theWidth);
    let anotherRect = spawnRectangle(x,theHeight,theWidth);
    another_terrain.push(otherRect);
    yet_another_terrain.push(anotherRect);
    time += deltaTime;
  }
}


function spawnRectangle(leftside, rectHeight, rectWidth){
  let theRect = {
    x: leftside,
    y: 0,
    w: rectWidth,
    h: rectHeight,
  };
  return theRect;
}



// Ball movement functions

function moveball(launch_angle,launch_speed){

  time += 1/6;
  playerX += cos(launch_angle)*launch_speed/6;
  playerY -= (launch_speed*sin(launch_angle) + G*time)/6;
}

function start_moving(){
  if(decision === "play"){
    moveball(theta,v0);
  }

  else if(decision === "give up"){
    give_up();
  }
}

function give_up(){
  langle = 60;
  lspeed = 1/cos(langle) * Math.sqrt(0.5*G*x*x/(y-x*tan(langle)));
  moveball(langle,lspeed);
}

// Gamestate functions

function GameState(){

  if (screenState === "homescreen"){
    background(0);
    textSize(50);
    fill("white");
    text("So you think you know Physics?", 400, 250);

    let color1 = "white";
    let color2 = "red";

    if(mouseX > 600 && mouseX < 850 && mouseY > 350 && mouseY < 450){
      color1 = "red";
      color2 = "white";
    }

    fill(color1);
    rect(600,350,250,100);

    fill(color2);
    textSize(70);
    text("PLAY",635,420);
  }

  if(screenState === "gamescreen"){
    image(terrainGraphics,0,0);
    displayTarget();
    displayPlayer();
    player_Decision();
    displayGameInfo();
    start_moving();
    hit_target();
  }

  if (screenState === "winscreen"){
    background(0);
    fill("white");
    textSize(100);
    text("You Won!",600,300);
  }

  if(screenState === "losescreen"){
    background(0);
    fill("white");
    textAlign(CENTER,TOP);
    textSize(100);
    text("You Lost!",700,300);
    textSize(70);
    textAlign(CENTER,BASELINE);
    text("It's back to Physical Science 20 for you.",750,500);
  }

}

function ChangeState(){
  if (screenState === "homescreen" && mouseIsPressed && (mouseX > 600 && mouseX < 850 && mouseY > 350 && mouseY < 450)){
    screenState = "gamescreen";
  }

  if (screenState === "gamescreen" && struck_target && (playerX > windowWidth || playerY > windowHeight) && decision === "play"){
    screenState = "winscreen";
  }

  if(screenState === "gamescreen" && !struck_target && (playerX > windowWidth || playerY > windowHeight)){
    screenState = "losescreen";
  }

  if(screenState === "gamescreen" && struck_target && (playerX > windowWidth || playerY > windowHeight) && decision === "give up"){
    screenState = "losescreen";
  }
}

function hit_target(){
  if (playerX+playerSize >= targetX && playerX+playerSize <= targetX+targetsize 
    && playerY+playerSize >= targetY && playerY+playerSize <= targetY+targetsize){
    struck_target = true;
  }
}