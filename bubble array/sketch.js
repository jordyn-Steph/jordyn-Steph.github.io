// bubble demo

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  
}
function mousePressed() {
  for (let i = 0;  i<10 ; i ++){
    spawnBubble(); 
  }
}
function spawnBubble() {
  let bubble = {
    x: random(width),
    y:height, 
    r:random(20,50), 
    dx:  0,
    dy: -5, 
    theColor: color(random(255),random(255),random(255),random(255)),
    theTime: random(1000),
  };
  theBubbles.push(bubble);
}

function draw() {
  background(220);
  bubbleUp();
  displayBubble();
}
function bubbleUp() {
  for (let bubble of theBubbles) {
    bubble.y += bubble.dy;
    bubble.x += noise(bubble.theTime) * 10;
    bubble.theTime += 0.001;
  }
}
function displayBubble() {
  for (let bubble of theBubbles) {
    noStroke();
    fill(bubble.theColor);
    circle(bubble.x , bubble.y, bubble.r * 2);
  }
}