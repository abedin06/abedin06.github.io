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

let playerSpeed;
let playerAngle;


function setup() {
  createCanvas(windowWidth, windowHeight);
  targetX = random(width/2,width-100);
  targetY = random(50,height-50);

  playerX = random(50,width/2-50);
  playerY = random(200,height-200);

}

function draw() {
  background("lightgreen");



  // Generate terrain
  let how_wide = width/NUMBER_OF_RECTS;
  generate_terrain(how_wide);

  for(let otherRect of another_terrain){
    stroke("skyblue");
    rect(otherRect.x,otherRect.y,otherRect.w,otherRect.h);
  }

  for (let anotherRect of yet_another_terrain){
    stroke("lightblue");
    rect(anotherRect.x,anotherRect.y,anotherRect.w,anotherRect.h);
  }


  displayTarget();
  displayPlayer();

  playerSpeed = prompt("Please enter your launch speed");
  playerAngle = prompt("Please enter your launch angle");
}


function displayTarget(){
  fill("white");
  square(targetX,targetY,targetsize);
}

function displayPlayer(){
  fill("red");
  circle(playerX,playerY,playerSize*2);
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
