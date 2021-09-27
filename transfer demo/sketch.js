let lastTimeSwitched = 0;
let isRed = false;
let ball;

function preload() {
  ball = loadImage("assets/ballss.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (isRed) {
    background("red");
  }
  else {
    background("black");
  }
  image(ball,0,0, 40, 40);
  if (millis() > lastTimeSwitched + 2000) {
    lastTimeSwitched = millis();
    isRed = !isRed;
  }
  console.log(millis());
}