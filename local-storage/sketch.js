// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let number_of_clicks = 0;
let highestClick = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //only get the highest score if it exists
  if (getItem("highest")){
    highestClick = getItem("highest");
  }
}

function draw() {
  background(220);
  displayClicks();
  displayHighest();
}

function mousePressed(){
  number_of_clicks++;
  if(number_of_clicks > highestClick){
    highestClick = number_of_clicks;
    storeItem("highest", highestClick);
  }
}

function displayClicks(){
  fill("black");
  textSize(75);
  text(number_of_clicks, 100, height/2);
}

function displayHighest(){
  fill("red");
  textSize(75);
  text(highestClick, 400, height/2);
}