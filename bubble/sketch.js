// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let theBubbles = [];
let deathLocations = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 5; i++){
    spawnBubble();
  }

  // create a new bubble every half second
  window.setInterval(spawnBubble,500);
}

function draw() {
  background(0);
  //moveRand();
  moveWithNoise();
  displayBubbles();
  displayGraves();
}

function displayBubbles(){
  for (let bubble of theBubbles){
    fill(bubble.r,bubble.g,bubble.b);
    circle(bubble.x,bubble.y,bubble.radius*2);
  }
}

function spawnBubble(){
  let someBubble = {
    x: random(0,width),
    y: height + random(0,50),
    speed: random(50,100),
    radius: random(20,50),
    r: random(255),
    g: random(255),
    b: random(255),
    timeX: random(10000000),
    timeY: random(10000000),
    deltaTime: 0.01,
  };

  theBubbles.push(someBubble);
}

function moveRand(){
  for (let bubble of theBubbles){
    let choice = random(100);
    if (choice < 50){
      //move up
      bubble.y -= bubble.speed;
    }
    else if(choice < 65){
      //move down
      bubble.y += bubble.speed;
    }

    else if(choice < 75){
      //move right
      bubble.x+=bubble.speed;
    }

    else{
      bubble.x -= bubble.speed;
    }
  }
}

function moveWithNoise(){
  for (let bubble of theBubbles){
    bubble.x = noise(bubble.timeX)*width;
    bubble.y = noise(bubble.timeY)*height;
    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble.deltaTime;
  }

}

function mousePressed(){
  for (let bubble of theBubbles){
    if(clickedOnBubble(mouseX, mouseY, bubble)){
      let theIndex = theBubbles.indexOf(bubble);
      theBubbles.splice(theIndex,1);
      undertaker(mouseX,mouseY);
    }
  }
}

function clickedOnBubble(x,y,theBubble){
  let distanceaway = dist(x,y,theBubble.x,theBubble.y);
  return distanceaway < theBubble.radius;
}

function undertaker(theX,theY){
  let grave = {
    x: theX,
    y: theY,
  };
  deathLocations.push(grave);
}

function displayGraves(){
  for (let grave of deathLocations){
    fill("white");
    textAlign: CENTER, CENTER;
    text("X",grave.x,grave.y);
  }
}
