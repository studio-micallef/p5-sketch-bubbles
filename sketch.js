function setup() {
  createCanvas(500, 500);
  background(255);
  noFill();
  noStroke(0);
  strokeWeight(4);
  colorMode(HSB, 255, 100, 100, 100);
  rect(50, 50, 260, 440);
}

function draw() {
  noStroke();
  fill(random(100, 240), random(100, 240), random(100, 240), 10);
 
  if (mouseIsPressed == true) {
  circle(mouseX, mouseY, random (10, 200));  
  }
  
  if (frameCount >=1000) {
  noLoop();
  }
}

function keyPressed() {
  save("colour_composition.png");
  background(0);
}