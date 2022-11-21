// button clicker

class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "blue";
    this.hoverColor = "grey";
  }
  display() {
    if (this.isInside(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.color);
    }
    rect(this.x, this.y, this.width, this.height);
  }
  isInside(x, y) {
    return mouseX > this.x && mouseX < this.x+this.width && mouseY < this.y+this.height && mouseY > this.y;
  }
}

let buttonOne = new Button(200, 300, 150, 75);
let buttonTwo = new Button(200, 600, 150, 75);
let backgroundColor = "lightgrey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundColor);
  buttonOne.display();
  buttonTwo.display();
}

function mousePressed() {
  if (buttonOne.isInside(mouseX, mouseY)) {
    backgroundColor = "white";
  }
  if (buttonTwo.isInside(mouseX, mouseY)) {
    backgroundColor = "black";
  }
}
