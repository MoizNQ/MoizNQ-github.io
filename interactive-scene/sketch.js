// Shooting Practise
// Moiz Naqvi
// Sept 21, 2022
//
// Extra for Experts:
// - Learning how to use gradient for background changes, I wasn't able to finish up coding to make my thing work even after spending a lot of time
// I hope you understand, I will make sure my next project will be submitted on time and be better. I ave commented out what I wanted certain code to be like,
// Again I apologize to not complete the project at the given time  even after extension.

let x;
let y;
let mapp;
let crosshair;
let scalar = 0.3;
let button = false;
let theTime;
let enemy;
let enemies = [];
let mouseCursor;
let state = "start";
let color1;
let color2;
let gunn;
let bullet;
let bullets = [];
let previousTime = 0;
let machine;

function preload() {
  mapp = loadImage("Map.jpeg");
  crosshair = loadImage("crosshair.jpeg");
  gunn = loadImage("gun.jpeg");
  machine = loadImage("bullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  // Making the enemies to spawn at a specfic point.
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0 , width),
      y: random(-800, 0)
    };
  }
}

function draw() {
  background(220);
  image(gunn, 0, 0, windowWidth, windowHeight);

  // Mostly the Start page
  keyIsDown();
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    noCursor;
    image(mapp, 0, 0, windowWidth, windowHeight);
    image(machine, mouseX + 18, mouseY - 8, 15, 30);
    image(crosshair, mouseX, mouseY, crosshair.width*scalar, crosshair.height*scalar);
  }
  bulletSpawn();
  
  // The physical appearance of the enemies
  for (let enemy of enemies) {
    enemy.y += 5;
    rect(enemy.x, enemy.y, 5);
  }

  // The collision b/w the enemies and the bullets
  for(let enemy of enemies) {
    for(let bullet of bullets) {
      if(dist(enemy.x ,  enemy.y, bullet.x, bullet.y) < 5) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
      }
    } 
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
    state = "main";
  }
  console.log(mouseX, mouseY);
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

// Spawn bullets but since I was using the image, I wasn't able to get it work.

function bulletSpawn(){
  if (state === "main") {
    let machine = {
      x: mouseX,
      y: mouseY 
    };
    bullets.push(machine);
  }
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}