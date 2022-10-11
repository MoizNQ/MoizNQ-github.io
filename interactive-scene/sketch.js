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
let bulet;
let bulets = [];
let previousTime = 0;
let spawns = [(x, y)];
let spawn = random.spawns((226, 438), (446, 392), (862, 493), (862, 493), (1430, 472));

function preload() {
  mapp = loadImage("Map.jpeg");
  crosshair = loadImage("crosshair.jpeg");
  figuree = loadImage("figure.jpeg");
  gunn = loadImage("gun.jpeg");
  bulet = loadImage("bullet.png");
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
    image(figuree, spawn);
    image(crosshair, mouseX, mouseY, crosshair.width*scalar, crosshair.height*scalar);
  }
  for (let bulet of bulets){
    image(bulets.x, bulets.y, 10);
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
    state = "main";
  }
  let bulet = {
    x: mouseX,
    y: mouseY,
  };
  bulets.push(bulet);
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

function characterAppearence() {

}
