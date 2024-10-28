// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const CELL_SIZE = 25;
let grid;
let rows;
let columns;


function setup() {
  createCanvas(windowWidth, windowHeight);
  columns = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(columns, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function generateRandomGrid(columns,rows){
  let newGrid = [];
  for(let y = 0; y < rows; y ++){
    newGrid.push([]);
    for (let x = 0; x < columns; x ++){
      someNumber = Math.round(random(0,1));
      newGrid[y].push(someNumber);
    }
  }

  return newGrid;

}

function displayGrid(){
  for (let y = 0; y < rows; y ++){
    for(let x = 0; x < columns; x ++){
      if (x+ y > 10 && x+ y < 30 || x+y > 50 && x+y <75){
        fill(random(0,255),random(0,255),random(0,255));
      }

      else{
        fill("white");
      }
      noStroke();
      square(x*CELL_SIZE,y*CELL_SIZE,CELL_SIZE);
    }
  }
}