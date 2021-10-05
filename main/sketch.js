//interactive scene with base controls and shapes for the major project. extra for experts is my own shape, sounds will be in a later part of the project.

// global variables
let Bullets = [];
let gameover = true;
let x = 300;
let y = 450;
let x2 = 100;
let y2 = 100;
let speed = 4;
let backgroundColor = "black";
let ball;
let lastChanged = 0;
let spawn = true;
let gotHit = false;
//just makes the canvas 
class bullet {
  constructor (){
    this.x = random(20,width-20);
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
      gotHit = true;
    }
  }

}
function setup() {
  createCanvas(700,500);
  spawnBullets();
  millis();
}
function draw() {
  background (backgroundColor);
  displayEntities();
  handleKeys();
  console.log(spawn);
  console.log(lastChanged);
  console.log(millis());
  if (gotHit === true) {
    setup();
    setup();
  }
  if (spawn === true) {
    spawnBullets();
    spawn = false;
  }
  if (millis() > lastChanged){
    lastChanged += 2000;
    spawn = true;
    console.log(lastChanged);
  }
  for (let i = 0; i < Bullets.length; i++) {
    Bullets[i].moveAndHitDet();
    Bullets[i].show();
  }
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
function spawnBullets(){
  for (let i = 0; i < 3; i ++) {
    let Bullet = new bullet();
    Bullets.push(Bullet);
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