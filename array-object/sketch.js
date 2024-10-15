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

let value_entered = false;

let vy;

let counter = 0;
let terrainGraphics;



function setup() {
  createCanvas(windowWidth, windowHeight);
  targetX = Math.round(random(width/2,width-100));
  targetY = Math.round(random(50,height-50));

  playerX = Math.round(random(50,width/2-50));
  playerY = Math.round(random(200,height-200));

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

  image(terrainGraphics,0,0);
  displayTarget();
  displayPlayer();
  displayPrompt();
  displayGameInfo();
  start_moving();
  //give_up();
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

function displayPrompt(){
  if (keyIsDown(70)){
    v0 = prompt("Please enter your launch speed");
    theta = prompt("Please enter your launch angle");
    value_entered = true;
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

// Game functions

function moveball(){
  playerX += 1;
  counter += 1;
  playerY -= G*counter*(v0*Math.cos(theta))**-2 + Math.tan(theta);
}

function start_moving(){
  if(value_entered){
    moveball();
  }
}

function give_up(){
  if (keyIsDown(76)){
    theta = 45;
    let x_interval = targetX+targetsize/2 - playerX;
    let y_interval = playerY - (targetY+targetsize/2);
    v0 = (1/Math.cos(35)) * ((-0.5* G* x_interval**2) / (y_interval-x_interval*Math.tan(theta)) )**0.5;
  }
  moveball();
}