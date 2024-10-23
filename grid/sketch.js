// Grid Demo
// Oct 22, 2024

//Use something like this for hardcoding the grid
//let grid = [[1,0,1,0],
//       [0,0,1,1],
//        [1,1,1,0],
//        [0,1,1,0]];


let grid;
const GRID_SIZE = 10;
let cell_size;
let toggle = true;

function setup() {

  if(windowWidth < windowHeight){
    createCanvas(windowWidth,windowWidth);
  }

  else{
    createCanvas(windowHeight, windowHeight);
  }
  cell_size = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE,GRID_SIZE);
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
}

function displaygrid(){
  for (let y = 0; y < GRID_SIZE; y++){
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 1){
        fill("black");
      }
      else if(grid[y][x] === 0){
        fill("white");
      }

      square(x*cell_size,y*cell_size,cell_size);
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
        newGrid[y].push(1);
      }
      else{
        newGrid[y].push(0);
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
    if(grid[some_y][some_x] ===1){
      grid[some_y][some_x] = 0;
    }
    else{
      grid[some_y][some_x] = 1;
    }
  }
}

