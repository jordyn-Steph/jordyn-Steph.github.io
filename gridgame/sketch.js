// grid based game
// jordyn
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Game of Life

let grid;
let gridSize = 40;
let cellWidth, cellHeight;
let autoplay = false;
let gun;
let cellX = 0;
let cellY = 0;


// function preload(){
//  gun = loadJSON("assets/gosper-gun.json"); //assumes grid size is 100

//}
function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize, gridSize);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
}

function draw() {
  background(100);
  if (autoplay && frameCount % 1 === 0){
    nextTurn();
  }
  displayGrid();
}

function keyPressed() {
  if (key === "e") {
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "r") {
    grid = createRandom2DArray(gridSize, gridSize);
  }
  if(key === " "){
    nextTurn();
  }
  if (key === "a"){
    autoplay = !autoplay;
  }
  if (key === "g"){
    if (grid[cellY][cellX] === 0 || grid[cellY][cellX] !== 2) {
      grid[cellY][cellX] = 2;
    }
    else if (grid[cellY][cellX] === 2) {
      grid[cellY][cellX] = 0;
    }
  }
  if (key === "h"){
    if (grid[cellY][cellX] === 0 || grid[cellY][cellX] !== 3) {
      grid[cellY][cellX] = 3;
    }
    else if (grid[cellY][cellX] === 3) {
      grid[cellY][cellX] = 0;
    }
  }
  if (key === "q"){
    if (grid[cellY][cellX] !== 1) {
      grid[cellY][cellX] = 1;
    }
    else if (grid[cellY][cellX] !== 0) {
      grid[cellY][cellX] = 0;
    }
  }
}

function nextTurn(){
  let newBoard = createEmpty2DArray(gridSize,gridSize);
  let greenCellNearby = false;
  let redCellNearby = false;
  for(let y = 0; y < gridSize; y++){
    for(let x = 0; x < gridSize; x++){
      let neighbors = 0;
      //look at neighboors and count
      for(let i = -1; i <= 1; i++){
        for(let j = -1; j <= 1; j++){
          if(y+i >= 0 && x + j >= 0 && y+i < gridSize && x + j < gridSize){
            if (grid[y+i][x+j] === 1){
              neighbors ++;// grid[y+i][x+j];
            }
            if (grid[y+i][x+j] === 2) {
              greenCellNearby = true;

            }
            if (grid[y+i][x+j] === 3) {
              redCellNearby = true;
            }
          }
        }
      }
      neighbors -= grid[y][x];
      //game rules
      if(grid[y][x]===1){ //alive
        if((neighbors === 2 || neighbors === 3) && grid[y][x] !== 2){
          newBoard[y][x] = 1;
        }
        else{
          newBoard[y][x] = 0;
        }
      }
      if(grid[y][x] === 0){
        if(neighbors === 3){
          newBoard[y][x] = 1;
        }
        else {
          newBoard[y][x] = 0;
        }
      }
      if(grid[y][x] === 2){
        newBoard[y][x] = 2;
      }
      else if(greenCellNearby && grid[y][x] !== 2){
        newBoard[y][x] = 1;
        greenCellNearby = false;
      }
      if(grid[y][x] === 3){
        newBoard[y][x] = 3;
      }
      else if(redCellNearby && grid[y][x] !== 3){
        newBoard[y][x] = 0;
        redCellNearby = false;
      }
    }
  }
  console.log(grid);
  console.log(newBoard);
  grid = newBoard;
}

function mousePressed() {
  cellX = Math.floor(mouseX/cellWidth);
  cellY = Math.floor(mouseY/cellHeight);

}

function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 1) {
        fill("white");
      }
      if (grid[y][x] === 0) {
        fill("black");
      }
      if (grid[y][x] === 2) {
        fill("green");
      }
      if (grid[y][x] === 3) {
        fill("red");
      }
      push();
      stroke(255,100,100);
      if (grid[cellY][cellX] === 1) {
        fill("white");
      }
      if (grid[cellY][cellX] === 0) {
        fill("black");
      }
      if (grid[cellY][cellX] === 2) {
        fill("green");
      }
      if (grid[cellY][cellX] === 3) {
        fill("red");
      }
      
      rect(cellX * cellWidth, cellY*cellHeight,cellWidth,cellHeight);
      pop();
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      board[y].push(0);
    }
  }
  return board;
}

function createRandom2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}