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
let state = "start";

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

function mousePressed() {
  if (state === "start" && mouseInsideRect(450, 700,450, 550)) {
    state = "main";
  }
}

function startScreen() {
  if (mouseInsideRect(width/2.5, height/2.5, 250, 150)) {
    fill("gray");
  }
  else {
    fill("black");
  }
  rect(width/2.5, height/2.5, 250, 150);
  fill("white");
  textSize(50);
  text("START", 425, 425);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
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
