// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++){
    let x = this.x = random(100,width - 100);
    let y = this.y = random(100,height - 100);
    let theBall = new ball(x,y);
    theBalls.push(theBall);
  }
}

function draw() {
  background(220);
  for (let theBall of theBalls){
    theBall.display();
    theBall.move();
  }
}
function mousePressed(){
  for (let i = 0; i < 5000000; i++){
    let theBall = new ball(mouseX, mouseY);
    theBalls.push(theBall);
  }

}
class ball {
  constructor(x,y){
    this.radius = random(20,50);
    this.x = x;
    this.y = y;
    this. dx = random(-5, 5);
    this. dy = random(-5, 5);
    this.theColor = color(random(255),random(255),random(255),random(100,200));
  }
  display(){
    fill(this.theColor);
    noStroke();
    circle(this.x, this.y, this.radius);
  }
  move(){
    this.x += this.dx;
    this.y += this.dy;
    if(this.x - this.radius <= 0 || this.x + this.radius >= width){
      this.dx = -this.dx;
    }
    if(this.y - this.radius <= 0 || this.y + this.radius >= height){
      this.dy = -this.dy;
    }
  }

}