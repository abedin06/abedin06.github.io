//OOP Inheritance demo


//Parent Class

class Shape{
  constructor(x, y, thecolor){
    this.x = x;
    this.y = y;
    this.thecolor = thecolor;
  }

  //Common display of all shapes
  display(){
    noStroke();
    fill(this.thecolor);
  }

  //common move function
  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

}

//Child class

class Circle extends Shape{
  constructor(x, y, thecolor, radius){
    super(x, y, thecolor);
    this.radius = radius;
  }

  //Override the display function
  display(){
    super.display();
    circle(this.x, this.y, this.radius*2);
  }
}

class Square extends Shape{
  constructor(x, y, thecolor, size){
    super(x, y, thecolor);
    this.size = size;
  }

  display(){
    super.display();
    square(this.x, this.y, this.size);
  }
}


let theshapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++){
    if(random(100) < 50){
      let theCircle = new Circle(random(width), random(height), color(random(255), random(255), random(255)), radius(20, 50));
      theshapes.push(theCircle);
    }

    else{
      let theSquare = new Square(random(width), random(height), color(random(255), random(255), random(255)), radius(20, 50));
      theshapes.push(theSquare);
    }
  }
}

function draw() {
  background(220);
  for (thing of theshapes){
    thing.move();
    thing.display();
  }
}
