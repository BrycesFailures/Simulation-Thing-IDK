let fBg;
let pFF;
var simulating = 0;

function preload() {
  fBg = loadImage("realforest.jpg");
  pFF = loadFont("GoodNews.otf");
  corn = loadImage("CornPNG.png");
  wheat = loadImage("WheatPNG.png");
  rabbit = loadImage("RabbitPNG.png");
  deer = loadImage("DeerHead.png");
  snake = loadImage("snakePNG.png");
  wolf = loadImage("wolfPNG.png");
  hawk = loadImage("HawkPNG.png");
}

function setup() {
  createCanvas(1366, 768);
  frameRate(100);
  fullscreen(true);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  keyPressed();
  push();
  scale(0.4);
  image(fBg, 0, 0);
  pop();
  fill(10);
  noStroke();
  textFont(pFF);
  textSize(120);
  textAlign(CENTER);
  text("Simulation Thing", width/2, 150);
  textSize(40);
  text("A Thing By Bryce Loeffler", width/2, 200);
  
  if (simulating < 1) {
  slideRects();
  sliders();
  startButton();
}
  
  animalClips();
  
  if (simulating > 0 && simulating < 2) {
      simRects();
    simulate();
    timer();
      }
  
  if (time < 0.01) {
      simulating = 2;
      }
  
  if (simulating > 1) {
      simRects();
      score();
      }
  
}

function keyPressed() {
  if (key == 'f') {
      fullscreen(true);
      }
}