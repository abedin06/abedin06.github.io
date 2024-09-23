// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let spongebob;



function preload(){
  spongebob = loadImage("spongebob.jpg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(spongebob, mouseX, mouseY, 100,100)
}
