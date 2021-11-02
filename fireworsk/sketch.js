// fireworsk
let aParticles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  background(220);
  for(let i = aParticles.length - 1; i >= 0; i--) {
    if(aParticles[i].isDead()){
      //kill it
      aParticles.splice(i,1);
    }
    else{
      aParticles[i].move();
      aParticles[i].display();
    }
  }

}

function mousePressed(){
  for(let i = 0; i < 250; i++) {
    let aParticle = new Particle(mouseX,mouseY);
    aParticles.push(aParticle);
  }
}
class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = random(3,5);
    this.alpha = 255;
    this.color = color(255, 0, 0, this.alpha);
    this.dx = random(-5,5);
    this.dy = random(-5,5);
  }
  display() {
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.size);
  }
  move(){
    this.alpha --;
    this.color = color(255, 0, 0, this.alpha);
    this.x += this.dx;
    this.y += this.dy;
    this.dy+= 0.05;
  }
  isDead(){
    return this.alpha < 0;
  }
}