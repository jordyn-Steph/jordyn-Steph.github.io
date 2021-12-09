
// jordyn
// 11/9/2021



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10);
  recursiveCircle(width/2,height/2);
}
function recursiveCircle(x,r){
  circle(x,height/2,r*2);
  if(r > 10){
    recursiveCircle(x - (mouseX/width)*r,r/2);
    recursiveCircle(x + (mouseX/width)*r,r/2);

  }
}