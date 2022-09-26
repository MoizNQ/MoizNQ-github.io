// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 100;
let x = 0;
let y = 0;
let speed = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  drawSquare();
  movingSquare();
}

function drawSquare() {
  square(x, y, squareSize);
}

function movingSquare() { 
  // down state
  if (x >= 0 && y <= 0 && x <= windowWidth-squareSize) {
    y = 0;
    x += speed;
  }
  // right state
  else if (x >= windowWidth-squareSize && y >= 0 && y <= windowHeight-squareSize) {
    x = windowWidth-squareSize;
    y += speed;
  }
  // left state
  else if (x <= windowWidth-squareSize && y >= windowHeight-squareSize && x>=0) {
    y = windowHeight-squareSize;
    x -= speed;
  }
  // up state
  else if (x<= 0 && y<= windowHeight-squareSize && y >=0) {
    x = 0;
    y -= speed;
  }
}