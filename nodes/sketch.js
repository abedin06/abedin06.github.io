// Connected Nodes OOP Demo
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnpoint(width/2, height/2);
}

function draw() {
  background(0);
  //move and draw lines
  for(let point of points){
    // eslint-disable-next-line indent
      point.update(points);
  }

  //draw circles
  for(let point of points){
    point.display();
  }
}

function spawnpoint(x,y){
  let somepoint = new MovingPoint(x,y);
  points.push(somepoint);
}

class MovingPoint{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.radius = 15;
    this.color = color(random(255), 0, random(255));
    this.xtime = random(1000);
    this.ytime = random(1000);
    this.deltaTime = 0.001;
    this.reach = 150;
    this.MIN_RADIUS = 15;
    this.MAX_RADIUS = 50;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  update(thePoints){
    this.move();
    this.teleport();
    this.connectTo(thePoints);
    this.adjustSize();
  }

  adjustSize(){
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    if(mouseDistance < this.reach){
      let theSize = map(mouseDistance, 0, this.reach, this.MAX_RADIUS, this.MIN_RADIUS);
      this.radius = theSize;
    }

    else{
      this.radius = this.MIN_RADIUS;
    }
  }

  move(){
    //pick random direction movement
    let dx = noise(this.xtime);
    let dy = noise(this.ytime);

    //scale to the movement speed
    this.dx = map(dx, 0, 1, -this.speed, this.speed);
    this.dy = map(dy, 0, 1, -this.speed, this.speed);

    //move point
    this.x += this.dx;
    this.y += this.dy;

    //increment time
    this.xtime += this.deltaTime;
    this.ytime += this.deltaTime;
  }

  teleport(){
    //teleport across the screen if you fall off

    if(this.x > width){
      this.x = 0;
    }

    if(this.x < 0){
      this.x = width;
    }

    if(this.y > height){
      this.y = 0;
    }

    if(this.y < 0){
      this.y = height;
    }
  }

  connectTo(pointsArray){
    for (let otherpoint of pointsArray){
      //avoid self line drawing
      if(this !== otherpoint){
        let pointDistance = dist(this.x, this.y, otherpoint.x, otherpoint.y);
        if(pointDistance < this.reach){
          stroke(this.color);
          line(this.x, this.y, otherpoint.x, otherpoint.y);
        }
      }
    }
  }
}

function mousePressed(){
  spawnpoint(mouseX,mouseY);
}
