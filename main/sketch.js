//interactive scene with base controls and shapes for the major project. extra for experts is my own shape, sounds will be in a later part of the project.

// global variables
let Bullet;
let gameover = true;
let x = 300;
let y = 450;
let x2 = 100;
let y2 = 100;
let speed = 4;
let backgroundColor = "black";
let ball;
//just makes the canvas 
class bullet {
  constructor (){
    this.x = 300;
    this.y = 100;
  }
  show(){
    stroke(255);
    noFill();
    rect(this.x,this.y,10,10);
  }
  moveAndHitDet() {
    this.y += 1;
    let hit = collideRectRect(this.x,this.y,10,10,x,y,80,5);
    if (hit) {
      console.log("hit");
    }
  }

}
function setup() {
  createCanvas(700,500);
  Bullet = new bullet();
}
//loop to make the background black (might change in the future, hence the variable), display the player and what im going to call "shape" for now (displayEntities), and handle the controls (handleKeys)
function draw() {
  background (backgroundColor);
  displayEntities();
  handleKeys();
  Bullet.moveAndHitDet();
  Bullet.show();
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
