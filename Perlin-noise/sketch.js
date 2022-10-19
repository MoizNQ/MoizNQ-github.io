// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let allCircle = [];

function keyPressed() {
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(5000),
  };
  allCirlces.push(theBall);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill("white");
  
  for (let i = 0; i < allCirlces.length, i++){
    allCircle[i].x = noise(allCircle[i].time)* width;
    allCircle[i].y = noise(allCircle[i].time)* height;
    allCircle[i].time += 0.01;
    circle(allCircle[i].x, allCircle[i].y, allCircle[i].radius*2);
  
  }

}