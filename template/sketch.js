//interactive scene with base controls and shapes for the major project. extra for experts is my own shape, sounds will be in a later part of the project.

// global variables
let gameover = true;
let x = 300;
let y = 450;
let x2 = 100;
let y2 = 100;
let speed = 4;
let backgroundColor = "black";
let ball;
//just makes the canvas 
function setup() {
  createCanvas(700,500);
}
//loop to make the background black (might change in the future, hence the variable), display the player and what im going to call "shape" for now (displayEntities), and handle the controls (handleKeys)
function draw() {
  background (backgroundColor);
  displayEntities();
  handleKeys();
  fire();
  y2 += 1;
}
function handleKeys() {
  if (mouseIsPressed) {
    speed = 15;
  }
  else {
    speed = 5;
  }
  if (keyIsDown(65)) { //a 
    x -= speed;
    if (x < 0) {
      x = 2;
    }
  }
  if (keyIsDown(68)) { //d
    x += speed;
    if (x > 620) {
      x = 620;
    }
  }
}
function displayEntities() {
  rect(x,y,80,5);
  beginShape();
  vertex(255, 60);
  vertex(275, 40);
  vertex(400, 40);
  vertex(420, 60);
  endShape(CLOSE);
}
function fire() {
  rect (x2,y2,10,10);
  hit = collideRectRect(x2,y2,10,10,x,y,80,5);
  if (hit) {
    console.log("hit");
  }
}