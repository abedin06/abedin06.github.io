// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
const GRID_SIZE = 40;
let cell_size;

let toggle = false;

const PLAYER_TILE = 10;
let player = {
  x: 0,
  y: 0,
};

let playerColor = "red";
let moveThisWay = "right";

let autoPlayIson = true;




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
  changeState();
  updateGrid();
  displaygrid();
}

function keyPressed(){
  if(key === "r"){
    grid = generateRandomGrid(GRID_SIZE,GRID_SIZE);
  }

  if(key === "e"){
    grid = generateEmptyGrid(GRID_SIZE,GRID_SIZE);
  }

  if(key === "n"){
    toggle = !toggle;
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
      }

      else if(grid[y][x] === PLAYER_TILE){
        fill(playerColor);
      }

      rect(x*cell_size,y*cell_size,cell_size);
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

function generateEmptyGrid(columns,rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < columns; x ++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function mousePressed(){
  let x = Math.floor(mouseX/cell_size);
  let y = Math.floor(mouseY/cell_size);


  //Toggle self
  changecolor(x,y);

  //Toggle neighboursr
  if(toggle){
    changecolor(x+1,y);
    changecolor(x,y+1);
    changecolor(x,y-1);
    changecolor(x-1,y);
  }
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


function updateGrid(){
  if (moveThisWay === "right"){
    grid[player.y][player.x+1] = PLAYER_TILE;
  }

  if(moveThisWay === "left"){
    grid[player.y][player.x-1] = PLAYER_TILE;
  }
}



function changeState(){
  if (moveThisWay === "right" && player.x === GRID_SIZE){
    movePlayer(player.x,player.y+1);
    moveThisWay = "left";
  }

  if(moveThisWay === "left" && player.x === 0){
    movePlayer(player.x,player.y+1);
    moveThisWay = "right";
  }
}
