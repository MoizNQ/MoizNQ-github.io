// Local Stoage Demo

let numberOfClicks = 0;
let highestEver = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  if(getItem("highscore") !== null) {
    highestEver = getItem("highscore");
  }
  else {
    storeItem("highscore" , 0);
  }
}

function draw() {
  background(255);

  fill(0);
  textSize(50);
  text(numberOfClicks, width/2, height/2);

  fill("red");
  text(highestEver, 50, height - 100);
}

function mousePressed() {
  numberOfClicks++;

  if (numberOfClicks > getItem("highscore")) {
    storeItem("highscore", numberOfClicks);
    highestEver = numberOfClicks;
  }
}
