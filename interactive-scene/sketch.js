// Shooting Practise
// Moiz Naqvi
// Sept 21, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const X_AXIS = 1;
const Y_AXIS = 2;
let mapp;
let crosshair;
let figuree;
let scalar = 0.3;
let button = false;
let theTime;
let enemyKilled;
let mouseCursor;
let state = "start";
let color1;
let color2;

function preload() {
  mapp = loadImage("Map.jpeg");
  crosshair = loadImage("crosshair.jpeg");
  figuree = loadImage("figure.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // hiding cursor
  if (state === "main") {
    noCursor();
  }
}

function draw() {
  background(220);
  image(mapp, 0, 0, windowWidth, windowHeight);

  keyIsDown();
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(mapp, 0, 0, windowWidth, windowHeight);
    image(figuree, 0, 0, 80, 80);
    image(crosshair, mouseX, mouseY, crosshair.width*scalar, crosshair.height*scalar);
  }
}

class figure {

}

function mousePressed() {
  if (state === "start" && mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
    state = "main";
  }
}

function startScreen() {
  if (mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
    fill("gray");
  }
  else {
    fill("black");
  }
  rect(width/2.5, height/2.5, 250, 150, 20);
  makeGradient(width/2.5, height/2.5, 250, 150, red, blue, 20);
  textSize(50);
  text("START", width/2.35, height/1.95);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function characterAppearence() {

}

function makeGradient(x, y, w, h, color1, color2, axis) {
  noFill();

  if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, windowWidth/2.5, windowWidth/2.5+250, 0, 1);
      let c = lerpColor(color1, color2, inter);
      stroke(c);
      line(i, windowHeight/2.5, i, windowHeight/2.5+150);
    }
  }
}

// eslint-disable-next-line no-redeclare
function keyIsDown() {
  if (key === UP_ARROW) {
    scalar = + 0.01;
    scalar = button;
  }
  else if (key === DOWN_ARROW) {
    scalar = - 0.01;
    scalar = button;
  }
}
