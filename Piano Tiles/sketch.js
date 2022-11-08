let tileWidth = 100; /* setting tile */
let tileHeight =  150;  /* size */
let winningPoints = 40;
let time; // the timer for countdown
let score; // number of tiles clicked without mistakes
let playing; // state while the user is playing
let won; // whether the winningPoints was reached or not
let clickingSound; // the sound that will be created when we click a tile
let wrongClicked; // the sound that will be created when we click on the wrong tile
let safeTile; // the galaxy texture  a.k.a the black tile
let notSafeTile; // the wooden texture tile a.k.a the white tile
let deadTile; // the lava texture a.k.a the red tile
let finishScreen; // the screen which pops after we won
let tiles = []; // holding the amount of tiles that will appear
let state = "start";
let backScreen;

function preload() {
  safeTile = loadImage("whitetile.png");
  notSafeTile = loadImage("blacktile.png");
  deadTile = loadImage("redtile.png");
  finishScreen = loadImage("endscreen.png");
  clickingSound = loadSound("piano.wav");
  wrongClicked = loadSound("angry.wav");
  backScreen = loadImage("piano.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // keep borders (1 pixel padding)
  time = -3; // countdown begins at three
  score = 0;

  /* initializing first rows */
  for (let i = 0; i < 4; i++) {

    newRow();
  }

  playing = false;
  won = false;

  textAlign(CENTER);
}

function draw() {
  background(0);
  
  keyIsDown();
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    drawingTiles();
    handleState();
    drawEnd();
  }
  if (state === "end") {
    drawEnd();
  }
}

function startScreen() {
  image(backScreen, 0, 0, windowWidth, windowHeight);
  let gradient = drawingContext.createLinearGradient(width/2.5-200, width/2.5-200, height/2.5+150, height/2.5+200);
  gradient.addColorStop(0, color(254, 60, 110, 65));
  gradient.addColorStop(1, color(172, 60, 110, 65));
  rect(width/2.5, height/2.5, 250, 150, 20);
  stroke(255);
  strokeWeight(1);

  if (mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
    drawingContext.strokeStyle = gradient;
    textSize(50);
    text("START", width/2.1, height/1.95,);

  }
  else {
    drawingContext.fillStyle = gradient;
    textSize(50);
    text("START", width/2.1, height/1.95,);  
  }
  
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

function drawingTiles() {
// drawing tiles with different textures
  for (let i = 0; i < tiles.length; i++) {

    let x = i % 4 * tileWidth;
    let y = Math.floor(i / 4) * tileHeight;
    if (tiles[i] === 0) {
      // Suppose to be white tile :D
      image(notSafeTile, x, y, tileWidth, tileHeight);
    }
    else if (tiles[i] === 1) {
      // Suppose to be the safe black tile
      image(safeTile, x, y, tileWidth, tileHeight);
      if (!clickingSound.isPlaying() === playing) {
        clickingSound.play(0.1, 1, 0.5, 2);
        if (tiles[i] === 0) {
          clickingSound.stop();
          wrongClicked.play(0.1, 1, 0.5, 2);
        }
      }

    }
    else {
      // Suppose to be the red tile when you press the white
      image(deadTile, x, y, tileWidth, tileHeight);
    }
  }
}

/**
 * draws correct screens depending on the state of the game
 */
function handleState() {

  if (!playing) { // if we are not playing

    if (time > 0) { // if we are not in the countdown
      /* endGame */

      drawEnd(won);
    }
    else { // pre-game

      /* draw countdown */
      textSize(60);
      fill("#FF0000");
      text(-time, width / 2, height / 2);
      textFont("Georgia");

      /* count down countdown */
      if (frameCount % 60 === 0) {
        time++;
        if (time === 0) {
          playing = true;
        }
      }
    }
  }
  else { // still playing

    /* draw time */
    textSize(90);
    fill("#FFFF00");
    text(getTime(), width / 2, height);
    time++;
  }
}

/**
 * based upon won, this will draw a "complete" message, or a "you lose" message
 */
function drawEnd(won) {

  if (won) {
    background(image(finishScreen, 0, 0, width, height));

    fill("#FFFFFF");
    textSize(60);
    text("Complete!", width / 2, height / 2 - 80);

    fill("#000000");
    textSize(70);
    text(getTime(), width / 2, height / 2);

    fill("#FFFFFF");
    textSize(40);
    text("Press f5 to restart!", width / 2, height / 2 + 50);

  }
  else {

    fill("#FF00FF");
    textSize(60);
    text("Game Over!", width / 2, height / 2);
    textSize(40);
    text("Press f5 to restart!", width / 2, height / 2 + 50);
    textFont("Georgia");
  }
}

/**
 * handling user input
 */
function mousePressed() {
  if (state === "start" && mouseInsideRect(windowWidth/2.5, windowWidth/2.5+250, windowHeight/2.5, windowHeight/2.5+150)) {
    state = "main";
  }

  if (!playing) { //  don't allow input if the player isn't playing
  
    return;
  }

  if (mouseY >= 3 * tileHeight && mouseY <= 4 * tileHeight) {
    // check if click is within canvas bounds
    

    let tile = getClickedTile(mouseX, mouseY);

    if (tile === -1) { // they clicked out of bounds
    
      return;
    }

    if (tiles[tile] !== 0) {
      /* end game */

      tiles[tile] = -1;

      won = false;
      playing = false;
    }
    else {
      score++;
      newRow();

      if (score >= winningPoints) {
        /* end game */

        won = true;
        playing = false;
      }
    }
  }

}

/**
 * returns index of clicked tile
 * only returns bottom row tiles
 */
function getClickedTile(mX) {

  for (let i = 0; i < 8; i++) {
    let goingDown = i * tileWidth;
    let goingUp = (i + 1) * tileWidth;
    if (mX >= goingDown && mX <= goingUp) {
      return i + 12; // only return for bottom row, which is 3 rows of 4 deep in the array
    }
  }

  return -1; // click was out of bounds
}

/**
 * push a new row
 */
function newRow() {

  let column = Math.floor(random(4));

  for (let i = 0; i < 4; i++) {

    tiles.unshift(column === i ? 0 : 1); // push tiles to the front, A.K.A. top
    // tiles[0].move();
  }

}

/**
 * returns formatted time, e.g.: "12.345\""
 */
function getTime() {

  return Math.floor(time / 60) + "." + Math.floor(map(time % 60, 0, 59, 0, 999)) + "\"";
}