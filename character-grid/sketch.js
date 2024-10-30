// Grid Demo
// Oct 22, 2024

//Use something like this for hardcoding the grid
//let grid = [[1,0,1,0],
//           [0,0,1,1],
//           [1,1,1,0],
//           [0,1,1,0]];


let grid;
const GRID_SIZE = 40;
let cell_size;
let toggle = false;
const OPEN_TILE = 0;
const IMPASSABLE_TILE = 1;
const PLAYER_TILE = 10;
let player = {
  x: 10,
  y: 20,
};
let grassImg;
let pathImg;

function preload(){
  grassImg = loadImage("Grass_02.png");
  pathImg = loadImage("purple_path.png");
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

  if(key === "w"){
    //move up
    movePlayer(player.x,player.y-1);
  }

  if(key === "s"){
    //move down
    movePlayer(player.x,player.y+1);
  }

  if(key === "d"){
    //move right
    movePlayer(player.x+1,player.y);
  }

  if(key === "a"){
    //move left
    movePlayer(player.x-1,player.y);
  }
}

function movePlayer(x,y){

  //Do not run of the screen
  if (x>=0 && x < GRID_SIZE && y>=0 && y < GRID_SIZE && grid[y][x] === OPEN_TILE){
    //reset tile to open tile
    grid[player.y][player.x] = OPEN_TILE;
  
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
      if (grid[y][x] === IMPASSABLE_TILE){
        image(grassImg,x*cell_size,y*cell_size,cell_size,cell_size);
      }
      else if(grid[y][x] === OPEN_TILE){
        image(pathImg,x*cell_size,y*cell_size,cell_size,cell_size);
      }

      else if(grid[y][x] === PLAYER_TILE){
        fill("blue");
        square(x*cell_size,y*cell_size,cell_size);
      }
    }
  }
}

function generateRandomGrid(columns,rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < columns; x ++){
      //choose either 0,1 each 50% of the time
      if (random(100)<50){
        newGrid[y].push(IMPASSABLE_TILE);
      }
      else{
        newGrid[y].push(OPEN_TILE);
      }
    
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

function changecolor(some_x,some_y){
  //BS checker
  if (some_x >=0 && some_y >=0 && some_x < GRID_SIZE && some_y < GRID_SIZE){
    if(grid[some_y][some_x] === IMPASSABLE_TILE){
      grid[some_y][some_x] = OPEN_TILE;
    }
    else{
      grid[some_y][some_x] = IMPASSABLE_TILE;
    }
  }
}

