// Shooting Practise
// Moiz Naqvi
// Sept 21, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mapp;
let crosshair;
let figuree;
let scalar = 0.3;
let button = false;
let theTime;
let enemyKilled;
let mouseCursor;

function preload() {
  mapp = loadImage("Map.jpeg");
  crosshair = loadImage("crosshair.jpeg");
  figuree = loadImage("figure.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // hiding cursor
  noCursor();
}

function draw() {
  background(220);
  image(mapp, 0, 0, windowWidth, windowHeight);
  image(figuree, 0, 0, 80, 80);
  image(crosshair, mouseX, mouseY, crosshair.width*scalar, crosshair.height*scalar);
  keyTyped();
}

function keyTyped() {
  if (key === UP_ARROW) {
    scalar = + 0.01;
  }
  else if (key === DOWN_ARROW) {
    scalar = - 0.01;
  }
}
