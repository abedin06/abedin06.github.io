// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
let cell_size;
let mona_lisa;
let starry_night;


const GRID_SIZE = 50;
const PLAYER_TILE = 10;


let player = {
  x: 0,
  y: 0,
};

let playerColor = "red";

let move = "right";
let ceaseMovement = false;



function preload(){
  mona_lisa = loadImage('Mona_Lisa.jpg');
  starry_night = loadImage('Starry_night.jpg');
}

function setup() {

  if(windowWidth < windowHeight){
    createCanvas(windowWidth,windowWidth);
  }

  else{
    createCanvas(windowHeight, windowHeight);
  }
  cell_size = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE,GRID_SIZE);

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

function keyPressed(){
  if(key === "r"){
    grid = generateRandomGrid(GRID_SIZE,GRID_SIZE);
  }

}

function movePlayer(x,y){

  //Do not run of the screen
  if (x>=0 && x < GRID_SIZE && y>=0 && y < GRID_SIZE){
    //keep track of player location
  
    player.x = x;
    player.y = y;
  
    //put player in grid
    grid[player.y][player.x] = PLAYER_TILE;
  }
}

function displaygrid(){
  for (let y = 0; y < GRID_SIZE; y++){
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 0){
        fill("white");
        rect(x*cell_size,y*cell_size,cell_size);
      }

      if(grid[y][x] === PLAYER_TILE){
        rect(x*cell_size,y*cell_size,cell_size);
        copy_image(x,y,starry_night);
      }
    }
  }
}

function generateRandomGrid(columns,rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < columns; x ++){
      newGrid[y].push(0);
    }
  }

  return newGrid;
}

function windowResized(){
  if(windowWidth < windowHeight){
    resizeCanvas(windowWidth,windowWidth);
  }

  else{
    resizeCanvas(windowHeight, windowHeight);
  }
  cell_size = height/GRID_SIZE;
}

function dictateMovement(){
  if(player.x === GRID_SIZE-1 && player.y === GRID_SIZE-1){
    ceaseMovement = !ceaseMovement;
  }
  if(move === "right" && player.x === GRID_SIZE-1){
    movePlayer(player.x, player.y+1);
    move = "left";
  }

  if(move === "left" && player.x === 0){
    movePlayer(player.x, player.y+1);
    move = "right";
  }
}

function movement(){
  if(move === "right"){
    movePlayer(player.x+1,player.y);
  }

  if(move === "left"){
    movePlayer(player.x-1, player.y);
  }
}

function changecolor(){
  if(player.y > GRID_SIZE*0.25){
    playerColor = "blue";
  }
  if(player.y > GRID_SIZE*0.75){
    playerColor = "green";
  }
}

function copy_image(some_x,some_y,some_image){
  copy(some_image,some_x*cell_size, some_y* cell_size, cell_size, cell_size, some_x*cell_size,
    some_y*cell_size, cell_size, cell_size);
}





