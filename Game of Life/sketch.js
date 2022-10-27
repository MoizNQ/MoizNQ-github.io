// Game of Life
// Moiz Naqvi

const ROWS = 75;
let COLUMNS = 75;
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
  setInterval(grid = takeTurn(grid), 100);
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

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLUMNS, ROWS);
  }
  if (key === " ") {
    grid = takeTurn(grid);
  }
}

function takeTurn(grid) {
  let nextTurn = create2dArray(COLUMNS, ROWS);
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLUMNS; x++) {
      let neighbours = 0;
      // look at all cells around this one... :(
      for (let i = -1; i <= 1; i++) {
        for(let j = -1; j <= 1; j++) {
          // edge case check
          if (y + i >= 0 && y + i < ROWS && x + j >= 0 && x + j < COLUMNS) {
            neighbours += grid[y+i][x+j];
          }
        }
      }
      // don't count self!
      neighbours -= grid[y][x];
      // Applying the rules
      if (grid[y][x] === 1) { //alive
        if (neighbours === 2 || neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) { //dead
        if (neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  return nextTurn;
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