// Shooting person

class Bullet {
  constructor(bulletX, bulletY) {
    this.x = bulletX+10;
    this.y = bulletY+10;
    this.radius = 4;
    this.dx = 3;
  }
  move() {
    this.x += this.dx;
  }
  display() {
    circle(this.x, this.y, this.radius);
  }
  isDead() {
    return this.x <= 0 || this.x >= width;
  }
}

let character = {
  x: 100,
  y: 0
};

let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  character.x = height/2;
  character.y = width/2;
}

function draw() {
  background(220);
  rect(character.x, character.y, 25, 25);
  for(let i = 0; i < bullets.length;i++) {
    bullets[i].move();
    bullets[i].display();
    if (bullets[i].isDead()) {
      bullets.splice(i, 1);
    }
  }
}

function mousePressed() {
  let gunBullet = new Bullet(character.x, character.y);
  bullets.push(gunBullet);
}