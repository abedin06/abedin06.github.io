// Project Title
// Generative Art Demo - Oct 4th


const TILE_SIZE = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(0);

  let tileArray = [];
  let waittime = 5000;
  

  for (let x = 0; x < width; x+= TILE_SIZE){
    for(let y = 0; y < height; y+= TILE_SIZE){
      let someTile = spawnTile(x,y);
      tileArray.push(someTile);
    }
  }

  for (let mytile of tileArray){
    stroke(random(0,255),random(0,255),random(0,255));
    line(mytile.x1,mytile.y1,mytile.x2,mytile.y2);
  }
}

function spawnTile(x,y){
  let tile;
  let choice = random(100);

  if(choice<50){
    //Negative slope line

    tile = {
      x1: x-TILE_SIZE/2,
      y1: y-TILE_SIZE/2,
      x2: x+TILE_SIZE/2,
      y2: y+TILE_SIZE/2,
    };
  }

  else{
    tile = {
      x1: x-TILE_SIZE/2,
      y1: y+TILE_SIZE/2,
      x2: x+TILE_SIZE/2,
      y2: y-TILE_SIZE/2,
    };
  }
  

  return tile;
}
