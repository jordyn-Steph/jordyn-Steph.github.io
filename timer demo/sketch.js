// oop timer
let circleTimer, bgtimer;
function setup() {
  createCanvas(windowWidth, windowHeight);
  circleTimer = new Timer(1000);
  bgtimer = new Timer(3000);
}

function draw() {
  background(220);

  if(bgtimer.isDone()){
    background("black");
  }
  else{
    background("white");
  }
  if(circleTimer.isDone()) {
    fill("red");
    circle(200,200,300);
  }
}
function mousePressed(){
  circleTimer.reset();
}
class Timer {
  constructor(waitTime){
    this.startTime = millis();
    this.waitTime = waitTime;
  }

  isDone(){
    return millis() > this.waitTime + this.startTime;
  }
  reset(){
    this.startTime = millis();
  }
}
