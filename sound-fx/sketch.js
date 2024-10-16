// Sound effects demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let bgMusicLoop;
let Clicksound;

function preload(){
  bgMusicLoop = loadSound("bgmusic.mp3");
  Clicksound = loadSound("potpickup.ogg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgMusicLoop.amp(0.3);
  Clicksound.amp(1);
}

function draw() {
  background(220);
}

function keyPressed(){
  if (!bgMusicLoop.isPlaying()){
    bgMusicLoop.loop();
  }
}

function mousePressed(){
  Clicksound.play();
}
