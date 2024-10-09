// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let another_terrain = [];
let yet_another_terrain = [];
const NUMBER_OF_RECTS = 10000;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

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

}

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
