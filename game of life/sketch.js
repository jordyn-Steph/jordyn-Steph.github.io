// game of life
let grid = [];
let gridSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridsetup(gridSize,gridSize);
}

function draw() {
  background(220);
}
function gridsetup(rows,cols) {
  for(let x = 0; x < rows; x++) {
    grid.push(x);
    for(let i = 0; i < cols; i++){
      grid.push(i);
      rect(x,i,x+gridSize,i+gridSize);
    }
  }
}