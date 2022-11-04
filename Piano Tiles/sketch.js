let tileWidth = 100;
let tileHeight = 150;

let WINNING_SCORE = 30;

let time; // countdown
let score; // number of tiles clicked correctly

let playing; // determine state
let won; // whether the WINNING_SCORE was reached or not

let safeTile;
let notSafeTile;
let deadTile;
let finishScreen;
let tiles = []; // holds field

function preload() {
  safeTile = loadImage("whitetile.png");
  notSafeTile = loadImage("blacktile.png");
  deadTile = loadImage("redtile.png");
  finishScreen = loadImage("endscreen.png");
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
  drawingTiles();
  handleState();
  rectMode = CENTER;
}

/**
 * draws all tiles
 */
function drawingTiles() {

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
  }
}

/**
 * handling user input
 */
function mousePressed() {

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

      if (score >= WINNING_SCORE) {
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

    let lowerBound = i * tileWidth;
    let upperBound = (i + 1) * tileWidth;
    if (mX >= lowerBound && mX <= upperBound) {
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