// Square Moving Around the Screen
// Sept 19. 20204

const speed = 10;
const max_size = 100;
const min_size = 10;
let size = 50;
const inc = 10;
const width = 500;
const height = 500;

let x = 0;
let y = 0;

let dirX = [1,0,-1,0];
let dirY = [0,1,0,-1];
let dir = 0;




function setup() {
  createCanvas(width, height);
}

function draw() {
  background(200);
  fill("black");
  square(x,y,size);
  check_turn();
  move_square();
  repos();
}

function move_square(){
  x += speed*dirX[dir];
  y += speed*dirY[dir];
}

function check_turn(){
  if (x <= 0 && y <= 0)
    dir = 0;
  if (x >= width-size && y <= 0)
    dir = 1;
  if (x >= width-size && y >= height-size)
    dir = 2;
  if (x<=0 && y>= height-size){
    dir = 3;
  }
}

function mouseWheel(){
  if (event.delta > 0){
    size = min(size+ inc, max_size);
  }
  else{
    size = max(size-inc, min_size);
  }
}

function repos() {
  if (dir === 0)
    y = 0;
  if (dir === 1 ){
    x = width-size;
  }
  if (dir === 2){
    y = height-size;
  }
  if (dir === 3)
    x = 0;
}


