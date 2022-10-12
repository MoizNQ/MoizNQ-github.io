// Shooting Practise
// Moiz Naqvi
// Sept 21, 2022
//
// Extra for Experts:
// - Learning how to use gradient for background changes, 

let x;
let y;
let mapp;
let crosshair;
let figuree, figureeDirection, figureeWidth, figureeHeight, figureeX, figureeY;
let scalar = 0.3;
let button = false;
let theTime;
let enemyKilled;
let mouseCursor;
let state = "start";
let color1;
let color2;
let gunn;
let bullets = [];
let previousTime = 0;
let machine;

function preload() {
  mapp = loadImage("Map.jpeg");
  crosshair = loadImage("crosshair.jpeg");
  figuree = loadImage("figure.jpeg");
  gunn = loadImage("gun.jpeg");
  machine = loadImage("bullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  figureeWidth = windowWidth/8;
  figureeHeight = windowHeight/12;
  figureeDirection = 1;
}

function draw() {
  background(220);
  image(gunn, 0, 0, windowWidth, windowHeight);

  keyIsDown();
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    noCursor;
    image(mapp, 0, 0, windowWidth, windowHeight);
    image(figuree);
    figureMovement();
    image(crosshair, mouseX, mouseY, crosshair.width*scalar, crosshair.height*scalar);
  }
  for (let bullet of bullets){
    image(machine, mouseX + 18, mouseY -8, 15, 30);
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
    state = "main";
  }
  let bullet = {
    x: mouseX,
    y: mouseY 
  };
  bullets.push(bullet);
}

function data() {
  state = "main";
  theTime = round(millis()/1000) - round(previousTime/1000);
  textSize(20);
  stroke(255);
  fill(255);
  textAlign(RIGHT);
  text("TIME: " + theTime, 0.75 * windowWidth/3, windowHeight/20);
}


function startScreen() {
  let gradient = drawingContext.createLinearGradient(width/2.5-200, width/2.5-200, height/2.5+150, height/2.5+200);
  gradient.addColorStop(0, color(254, 60, 110, 65));
  gradient.addColorStop(1, color(172, 60, 110, 65));
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

function figureMovement() {
  figureeX += windowWidth/(400/6) * figureeDirection;
  
  if (figureeX + figureeWidth/2 >= windowWidth) {
    figureeDirection = -1;
  }

  else if (figureeX <= 0 -figureeWidth/2) {
    figureeDirection = 1;
  }
}