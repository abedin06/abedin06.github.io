// Visual Art Display
// Araddho Abedin
// November 13th, 2024
//
// Extra for Experts:
// -Copying image pixels from the source image using copy()

//Variables
let grid;
let mona_lisa;
let starry_night;
let last_supper;
let earring;
let Rows;
let Columns;
let art_choice;
let image_to_draw;


//Constants
const CELL_SIZE = 40;
const PLAYER_TILE = 10;

//Player Object
let player = {
  x: 0,
  y: 0,
};


//State Variables
let move = "right";
let ceaseMovement = false;
let something = false;
let errorDisplay = false;



function preload(){

  //Declare and Load the necessary images
  mona_lisa = loadImage('Mona_Lisa.jpg');
  starry_night = loadImage('Starry_night.jpg');
  last_supper = loadImage('Last_Supper.jpg');
  earring = loadImage('Earring.jpg');
  error = loadImage('error_image.jpg');
  moveSound = loadSound('soundeffect.wav');
}

function askUser(){

  // Choose which image to draw and canvas dimension based on the user choices

  if(art_choice === "Last Supper"){
    createCanvas(last_supper.width, last_supper.height);
    image_to_draw = last_supper;
  }

  else if(art_choice === "Mona Lisa"){
    createCanvas(mona_lisa.width, mona_lisa.height);
    image_to_draw = mona_lisa;
  }

  else if(art_choice === "Starry Night"){
    createCanvas(starry_night.width, starry_night.height);
    image_to_draw = starry_night;
  }

  else if(art_choice === "Girl with Earring"){
    createCanvas(earring.width, earring.height);
    image_to_draw = earring;
  }

  else{
    alert("Try again and type properly. Program is Case Sensitive. Refresh to startb again.");
    createCanvas(error.width, error.height);
    image_to_draw = error;
    errorDisplay = true;
  }

}

function setup() {

  //Ask the user which image he wants to see
  art_choice = prompt("What do You want to See? Choose from Mona Lisa, Girl with Earring, Last Supper or Starry Night");
  askUser();

  //Calculate the number of Rows and Columns for the grid
  Rows = Math.ceil(image_to_draw.height/CELL_SIZE);
  Columns = Math.ceil(image_to_draw.width/CELL_SIZE);
  grid = generateRandomGrid(Columns,Rows);

  // add player to the grid
  grid[player.y][player.x] = PLAYER_TILE;
}


function draw() {
  background(220);
  displaygrid();
  if (!ceaseMovement){
    dictateMovement();
    movement();
  }
}


function movePlayer(x,y){

  //Do not run of the screen
  if (x>=0 && x < Columns && y>=0 && y < Rows){
    //keep track of player location
  
    player.x = x;
    player.y = y;
  
    //put player in grid
    grid[player.y][player.x] = PLAYER_TILE;
  }
}

function displaygrid(){
  //Display either empty grid or the image to play
  for (let y = 0; y < Rows; y++){
    for (let x = 0; x < Columns; x++){
      if (grid[y][x] === 0){
        fill("white");
        square(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE);
      }

      if(grid[y][x] === PLAYER_TILE){
        rect(x*CELL_SIZE,y*CELL_SIZE,CELL_SIZE);
        copy_image(x, y, image_to_draw);
      }
    }
  }
}

function generateRandomGrid(cms,rws){
  //Generates new grid every time
  let newGrid = [];
  for (let y = 0; y < rws; y++){
    newGrid.push([]);
    for (let x = 0; x < cms; x ++){
      newGrid[y].push(0);
    }
  }

  return newGrid;
}

function dictateMovement(){

  //Dictate which direction the player moves

  if(player.x === Columns-1 && player.y === Rows-1){
    console.log('here');
    moveSound.play();
    ceaseMovement = !ceaseMovement;
  }
  if(move === "right" && player.x === Columns-1){
    movePlayer(player.x, player.y+1);
    move = "left";
  }

  if(move === "left" && player.x === 0){
    movePlayer(player.x, player.y+1);
    move = "right";
  }
}

function movement(){

  //Move the player depending on the state variable

  if(move === "right"){
    movePlayer(player.x+1,player.y);
  }

  if(move === "left"){
    movePlayer(player.x-1, player.y);
  }
}

function keyPressed(){
  
  //Click to change drawings you want to view

  if(key === "1" && !errorDisplay){
    createCanvas(mona_lisa.width, mona_lisa.height);
    image_to_draw = mona_lisa;
  }

  if(key === "2" && !errorDisplay){
    createCanvas(starry_night.width, starry_night.height);
    image_to_draw = starry_night;
  }

  if(key === "3" && !errorDisplay){
    createCanvas(earring.width, earring.height);
    image_to_draw = earring;
  }

  if(key === "4" && !errorDisplay){
    createCanvas(last_supper.width, last_supper.height);
    image_to_draw = last_supper;
  }
}


function copy_image(some_x,some_y,some_image){
  //Copies image from some source image onto the canvas
  
  copy(some_image, some_x*CELL_SIZE, some_y* CELL_SIZE, CELL_SIZE, CELL_SIZE, some_x*CELL_SIZE,
    some_y*CELL_SIZE, CELL_SIZE, CELL_SIZE);

}