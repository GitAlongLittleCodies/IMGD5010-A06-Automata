// ===========FOLDER A===========
// ORIGINAL GAME OF LIFE RULES

// DRAW
function drawCells (cols, rows, cellSize, grid){
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      if (grid[i][j] == 1) {
        fill(255);
        stroke(0);
        rect(x, y, cellSize-1, cellSize-1);
      }
    }
  }
}


// ===========================================
// Generate Next Grid
// Dan Shiffman's Game of Life rules
function engageRules (cols, rows, grid){
  let next = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Count live neighbors!
      let sum = 0;
      // i = x *cols* / j = y *rows*
      let neighbors = neighborDetection(sum, grid, i, j); 

      // the rules!
      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }

    }
  }
  return next;
}


// ===========================================
// Dan Shiffman's Count Neighbors *NEW NAME*
function neighborDetection(sum, grid, x, y) {
  let result = 0;
  for ( let i = -1; i < 2 ; i++ ) {
    for ( let j = -1; j < 2 ; j++ ) {
      let col = ( x + i + cols ) % cols; 
      let row = ( y + j + rows ) % rows;
      result += grid[col][row];
    }
  }
  // REMOVE SELF-REFERENCE 
  result -= grid[x][y]; 
  return result;
}


// ==========================================
// NEW ARRAY
function make2DArray(cols, rows) {
  let newArray = new Array(cols);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = new Array(rows);
  }
  return newArray;
}

