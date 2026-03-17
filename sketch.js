// Game of Life
// there are different rule.js files tucked into folders
// folder a is Dan Shiffman's Game of Life, no variations
// folder b change a rule every 29 frames and works well
// folder c doesn't work well

// MOUSE CLICK SLOWS FRAME RATE

// base inspiration code:
// Daniel Shiffman Game of Life
// https://editor.p5js.org/codingtrain/sketches/UtSMCB1zv

let canvasWidth;
let canvasHeight;

let cellSize = 8; /* increase cell size to save processor */
let grid = [];
let cols, rows;

let toggleFrameRate = 0;
let slowFrameRate = 5;
// for first generation cell state:
// weight the random outcome
let weightedRandom = 0.7; 

function setup() {
  frameRate(60);
  // CANVAS
  if ( !canvasWidth ) canvasWidth = floor(windowWidth/cellSize)*cellSize;
  if ( !canvasHeight ) canvasHeight = floor(windowHeight/cellSize)*cellSize;
  createCanvas(canvasWidth, canvasHeight);
  
  // GRID
  cols = width/cellSize;
  rows = height/cellSize;
  grid = make2DArray(cols, rows);
  
  // POPULATE GRID - weighted random result
  for ( let i = 0; i < cols; i++ ) {
    for ( let j = 0; j < rows; j++ ) {
      if ( random() > weightedRandom ) grid[i][j] = 0;
      else grid[i][j] = 1;
    }
  }
  
}


function draw() {
  
  background(0);
  
  drawCells(cols, rows, cellSize, grid);
  
  // update grid
  grid = engageRules (cols, rows, grid);
  
}



function mouseClicked(){
  if (toggleFrameRate == 1) {
    frameRate(60);
    toggleFrameRate = 1-toggleFrameRate;
  } else { 
    frameRate(slowFrameRate);
    toggleFrameRate = 1-toggleFrameRate;
  }
}