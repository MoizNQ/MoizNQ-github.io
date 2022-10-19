// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let radius;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  radius = 75;
}

function draw() {
  background(0);
  fill("white");
  x = noise(time)* width;
  time += 0.01;
  circle(x, y, radius*2);
}
