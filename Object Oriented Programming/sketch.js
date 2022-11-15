// OOP intro && walker OOP demo
 
class Walker {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 25;
    this.radius = 2;
  }
  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }
  move () {
    let choice = random(100);

    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x += this.speed;
    }
    else {
      this.x -= this.speed;
    }
  }
}

let michael;
let kat;
let bae;

function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(width/2, height/2);
  kat = new Walker(300, 500);
  kat.color = "blue";
  bae = new Walker(width-50, height-50);
  bae.color = "green";

}

function draw() {
  michael.move();
  kat.move();
  bae.move();
  michael.display();
  kat.display();
  bae.display();

}
