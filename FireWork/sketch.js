// FireWorks OOP

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(random(-5, 0), random(5, 0));
    this.dy = random(random(-5, 0), random(5, 0));
    this.diameter = 2;
    this.alpha = 255;
    this.color = color(random(255), random(255), random(255), this.alpha);
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.alpha--;
    this.color = color(random(255), random(255), random(255), this.alpha);

  }
  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
  }
}

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < theFireworks.length; i++) {
    theFireworks[i].update();
    theFireworks[i].display();
  }
}

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    theFireworks.push(someParticle);
  }
}