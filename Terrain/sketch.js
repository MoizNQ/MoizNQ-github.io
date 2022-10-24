// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theHeights = [];
let startingLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = generateBuildings(20000);
}

function draw() {
  background(0);
  for (let i = startingLocation; i < startingLocation + width; i++ ) {
    drawRect(i-startingLocation, theHeights[i], 50);
  }

  if (keyIsPressed) {
    startingLocation+= 20;
  }
}

function drawRect(x, rectHeight, rectWidth) {
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
  fill("gray");
}

function generateBuildings(howMany) {
  let tempArray = [];
  let time = random(10000);
  for(let i = 0; i < howMany; i++) {
    tempArray.push(noise(time) * height);
    time += 0.01;
  }
  return tempArray;
}


