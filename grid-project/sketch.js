// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const CELL_SIZE = 20;
let grid;
let rows;
let columns;
let playerColor = "black";

const PLAYER_TILE = 10;
let player = {
  x: 10,
  y: 10,
};


function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(height/CELL_SIZE);
  columns = Math.floor(width/CELL_SIZE);
  grid = generateGrid(rows,columns);

  grid[player.y][player.x] = PLAYER_TILE;
}

function draw() {
  background(220);
  displaygrid();
}

function generateGrid(ROWS,COLS){
  let newGrid = [];
  for(let y = 0; y < ROWS; y++){
    newGrid.push([]);
    for(let x = 0; x < COLS; x++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function displaygrid(){
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < columns; x++){
      if(grid[y][x] === 0){
        fill("white");
        square(x*CELL_SIZE,y*CELL_SIZE,CELL_SIZE);
      }

      else if(grid[y][x] === PLAYER_TILE){
        fill(playerColor);
        square(x*CELL_SIZE,y*CELL_SIZE,CELL_SIZE);
      }
    }
  }
}

function keyPressed(){
  if(key === "r"){
    playerColor = "red";
  }

  if(key === "b"){
    playerColor = "blue";
  }

  if(key === "g"){
    playerColor = "green";
  }

  if(key === "w"){
    playerColor = "white";
  }

  if(key === "o"){
    playerColor = "black";
  }

  if(key === "UP_ARROW"){
    //move up
    movePlayer(player.x,player.y-1);
  }

  if(key === "DOWN_ARROW"){
    //move down
    movePlayer(player.x,player.y+1);
  }

  if(key === "RIGHT_ARROW"){
    //move right
    movePlayer(player.x+1,player.y);
  }

  if(key === "LEFT_ARROW"){
    //move left
    movePlayer(player.x-1,player.y);
  }
}

function movePlayer(x,y){
  if (x>=0 && x < GRID_SIZE && y>=0 && y < GRID_SIZE && grid[y][x] === OPEN_TILE){
    //keep track of player location
  
    player.x = x;
    player.y = y;
  
    //put player in grid
    grid[player.y][player.x] = PLAYER_TILE;
  }
}

