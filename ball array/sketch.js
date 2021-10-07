// ball array demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myBalls = [];

function setup() {
  for(let i = 0; i < 100; i++){
    spawnball();
  }
}

function draw() {
  background("black");
  noStroke();
  for(let myBall of myBalls){
    fill(myBall.theColor);
    myBall.x = noise(myBall.time)*width;
    myBall.y = noise(myBall.time+100)*height;
    myBall.time += 0.003;
    circle(myBall.x, myBall.y, myBall.radius*2);
  }
}
function spawnball() {
  createCanvas(windowWidth, windowHeight);
  let myBall= {
    radius: random (10,30),
    x: random(width),
    y: random(height),
    time: random(1,1000),
    theColor: color(random(255),random(255),random(255),random(255))
  };
  myBalls.push(myBall);
}
function mousePressed() {
  for(let i = 0; i < 5; i++) {
    spawnball();
  }
}