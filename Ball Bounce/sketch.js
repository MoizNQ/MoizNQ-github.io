// OOP Ball Bouce

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(25, 100),
    this.dx = random(-5, 5),
    this.dy = random(-5, 5),
    this.theColor = color(random(255), random(255), random(255), random(255));
  }
  
  move() {
    this.x += this.dx;
    this.y += this.dy;

    // left-right edges
    if(this.x + this.radius > width || this.x - this.radius < 0) {
      this.dx *= -1;
    }
    // top-bottom edges
    if(this.y + this.radius > height || this.y - this.radius < 0) {
      this.dy *= -1;
    }
  }

  display() {
    fill(this.theColor);
    noStroke();
    circle(this.x, this.y, this.radius*2);
  }

  collisonCheck(anotherObject) {
    // collision check
    let distanceBetween = dist(this.x, this.y, anotherObject.x, anotherObject.y);
    let radiiSum = this.radius + anotherObject.radius;
    if (distanceBetween < radiiSum) {
      let tempDx = this.dx;
      let tempDy = this.dy;
      this.dx = anotherObject.dx;
      this.dy = anotherObject.dy;
      anotherObject.dx = tempDx;
      anotherObject.dy = tempDy;
    }
  }
}

let theCircles= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let someCircle = new Ball(100, 100);
  theCircles.push(someCircle);
}

function draw() {
  background(0);
  for (let i = 0; i < theCircles.length; i++) {
    theCircles[i].move();
    for (let j = 0; j < theCircles.length; j++) {
      if (i !== j) { // dont check if hitting itself
        theCircles[i].collisonCheck(theCircles[j]);

      }
    }
    theCircles[i].display();
  }
}

function mousePressed() {
  let someCircle = new Ball(mouseX, mouseY);
  theCircles.push(someCircle);
}