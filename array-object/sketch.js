// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let terrain = [];
let another_terrain = [];
const NUMBER_OF_RECTS = 10000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  let how_wide = width/NUMBER_OF_RECTS;
  generate_terrain(how_wide);
}

function draw() {
  background(220);

  for(let otherRect of another_terrain){
    stroke("skyblue");
    rect(otherRect.x,otherRect.y,otherRect.w,otherRect.h);
  }
  for (let someRect of terrain){
    stroke("green");
    rect(someRect.x,someRect.y,someRect.w,someRect.h);
  }

}

function generate_terrain(theWidth){

  let time = 0;
  let deltaTime = 0.0001;
  for (let x = 0; x < width; x+= theWidth){
    let theHeight = noise(time)*height;
    let someRect = spawnRectangle(x,theHeight,theWidth);
    let otherRect = spawnRectangle(x,theHeight+200,theWidth);
    terrain.push(someRect);
    another_terrain.push(otherRect);
    time += deltaTime;
  }
}



function spawnRectangle(leftside, rectHeight, rectWidth){
  let theRect = {
    x: leftside,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };
  return theRect;
}
