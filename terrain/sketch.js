// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rects = [];
let numberOfRects;
function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  generateTerrain();
}

function draw() {
  background(220);
  displayTerrain();
}
function generateTerrain() {
  let time = 0;
  for ( let i = 0; i < numberOfRects; i ++) {
    let theHeight= noise(time) * height;
    rects.push(theHeight);
    time += 0.003;
  }
}
function displayTerrain() {
  let theWidth = width/rects.length;
  for (let i = 0; i < rects.length; i++) {
    let heights = rects[i];
    fill("black");
    rect(theWidth * i ,height,10,-heights);
  }
}