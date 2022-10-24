// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theCircles= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  theCircles.push(spawnBall(100, 100));
}

function draw() {
  background(220);
  // move
  for (let i = 0; i < theCircles.length; i++) {
    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;

    if(theCircles[i]. x + theCircles[i].radius > width || theCircles[i].x - theCircles[i].radius < 0) {
      theCircles[i].dx *= -1;
    }
    
    if(theCircles[i]. y + theCircles[i].radius > height || theCircles[i].y - theCircles[i].radius < 0) {
      theCircles[i].dy *= -1;

    }
    //display
    for(let thisCircle of theCircles) {
      fill(thisCircle.theColor);
      noStroke();
      circle(thisCircle.x, thisCircle.y, thisCircle.radius*2);
    }
  }
}

function mousePressed() {
  theCircles.push(spawnBall(mouseX, mouseY));
}

function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX,
    y: tempX,
    radius: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    theColor: color(random(255), random(255), random(255), random(255),)
  };
  return newBall;

}