// Shooting Practise
// Moiz Naqvi
// Sept 21, 2022
//
// Extra for Experts:
// - Learning how to use gradient for background changes, 

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
let gunn;
let previousTime = 0;

function preload() {
  mapp = loadImage("Map.jpeg");
  crosshair = loadImage("crosshair.jpeg");
  figuree = loadImage("figure.jpeg");
  gunn = loadImage("gun.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // hiding cursor
  if (state === "main") {
    noCursor();
  }
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(220);
  image(gunn, 0, 0, windowWidth, windowHeight);

  keyIsDown();
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(mapp, 0, 0, windowWidth, windowHeight);
    image(figuree, 0, 0, 80, 80);
    image(crosshair, mouseX, mouseY, crosshair.width*scalar, crosshair.height*scalar);
  }


  class figure {

  }

  function mousePressed() {
    if (state === "start" && mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
      state = "main";
      data();
    }
  }

  function data() {
    theTime = round(millis()/1000) - round(previousTime/1000);
    textSize(20);
    stroke(255);
    fill(255);
    textAlign(RIGHT);
    text("TIME: " + theTime, 0.75 * windowWidth/3, windowHeight/20);
  }
}

function startScreen() {
  let gradient = drawingContext.createLinearGradient(width/2.5-200, width/2.5-200, height/2.5+200, height/2.5+200);
  gradient.addColorStop(0, color(200, 50, 100, 150));
  gradient.addColorStop(1, color(250, 100, 50, 50));
  rect(width/2.5, height/2.5, 250, 150, 20);
  stroke(255);
  strokeWeight(1);

  if (mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
    drawingContext.strokeStyle = gradient;
    textSize(50);
    text("START", width/2.35, height/1.95,);
  }
  else {
    drawingContext.fillStyle = gradient;
    textSize(50);
    text("START", width/2.35, height/1.95,);  
  }
  
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function characterAppearence() {

}
