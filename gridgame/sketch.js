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
let playAreaX = 10;
let playAreaX2 = 15;
let playAreaY = 10;
let playAreaY2 = 15;
let cellX = playAreaX;
let cellY = playAreaY;
let level;
let level1;
let level2;
let levels = [level1,level2];
let win = false;
let devmode = true;


function preload(){
  level1 = loadJSON("assets/level1.json"); //assumes grid size is 40
  level2 = loadJSON("assets/level2.json");

}
function setup() {
  levels[0] = level1;
  levels[1] = level2;
  level = level1;
  background(255);
  createCanvas(windowWidth, windowHeight);
  grid = level;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  setPlayArea(playAreaX,playAreaY,playAreaX2,playAreaY2);
}

function draw() {
  background(100);
  if (autoplay && frameCount % 1 === 0){
    nextTurn();
  }
  displayGrid();
  displayText();
  levelHandler();
}

function keyPressed() {
  if (key === "e") {
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "r") {
    level = levels[0];
    grid = level;  
    setPlayArea(playAreaX,playAreaY,playAreaX2,playAreaY2);
  }
  if (key === "b") {
    level = level2;
    grid = level2;  
    setPlayArea(playAreaX,playAreaY,playAreaX2,playAreaY2);
  }
  if(key === " "){
    nextTurn();
  }
  if (key === "a"){
    autoplay = !autoplay;
    console.log("autoplay toggled");
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
  if(key === "n" && win === true) {
    level = levels[1];
    grid = level;
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
  grid = newBoard;
}

function mousePressed() {
  console.log(Math.floor(mouseY/cellHeight));
  console.log(Math.floor(mouseX/cellWidth));

 // if(Math.floor(mouseX/cellWidth) > playAreaX && Math.floor(mouseX/cellWidth) < playAreaX2 && Math.floor(mouseY/cellHeight) > playAreaY && Math.floor(mouseY/cellHeight) < playAreaY2 && devmode === false){
    cellX = Math.floor(mouseX/cellWidth);
    cellY = Math.floor(mouseY/cellHeight);
  //}

}
class Square {
  constructor() {

  }
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
      if (grid[y][x] === 4) {
        fill("blue");
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
      if (grid[cellY][cellX] === 4) {
        fill("blue");
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
function setPlayArea(playAreaX,playAreaY,playAreaX2,playAreaY2){
  for(let i = playAreaY; i < playAreaY2;i++){
    for(let j = playAreaX; j < playAreaX2 ;j++){
      if (i === playAreaY || i === playAreaY2){
        grid[i][j] = 4;
      }
      else{
        grid[i][j] = 4;
      }
    }
  }
}
function displayText() {
  textSize(10);
  fill(100,100,100);
  text("controls",10,10);
  text("Q will toggle white squares (alive cells) with basic conways rules.",5,20);
  text("G will toggle green squares, which makes all cells around it alive regaurdless of the state around them.",5,30);
  text("H will toggle red squares, which makes all cells around it dead (black) regaurdless of the state around them, this overides green squares",5,40);
  text("space to go to next turn",5,50);
  text("A will turn on autoplay",5,60);
  text("r will restart the level",5,70);
}
function levelHandler(){
  if (level === level1){
    if (grid[18][39] !== 1){
      win = true;
      text("you win!",windowWidth/2,windowHeight/2);
      text("(press n to continue)",windowWidth/2 - 30,windowHeight/2 + 10);
    }
  }
}