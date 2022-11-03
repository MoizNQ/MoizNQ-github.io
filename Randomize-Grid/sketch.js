// Randomized 2D Grid
// Moiz Naqvi

const ROWS = 25;
let COLUMNS = 25;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLUMNS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLUMNS, ROWS);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLUMNS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLUMNS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLUMNS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLUMNS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLUMNS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function mousePressed() {
  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);
  if (grid[y][x]===0) {
    grid[y][x] = 1;
  }
  else if(grid[y][x] === 1) {
    grid[y][x] = 0;
  }

}