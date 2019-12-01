let corn;
let wheat;
let rabbit;
let deer;
let snake;
let wolf;
let hawk;
let cornN;
let wheatN;
let rabbitN;
let deerN;
let snakeN;
let wolfN;
let hawkN;
let ScornX = 683;
let SwheatX = 683;
let SrabbitX = 683;
let SdeerX = 683;
let SsnakeX = 683;
let SwolfX = 683;
let ShawkX = 683;
var mousePressedCorn = 0;
var mousePressedWheat = 0;
var mousePressedRabbit = 0;
var mousePressedDeer = 0;
var mousePressedSnake = 0;
var mousePressedWolf = 0;
var mousePressedHawk = 0;
var startSize = 75;

function animalClips() {
  
  push();
  imageMode(CENTER);
  translate(width/2 - 450, height/3 + 60);
  scale(0.15);
  rotate(2.5);
  image(corn, 0, 0);
  pop();
  
  push();
  imageMode(CENTER);
  translate(width/2 - 450, height/3 + 48 + 60);
  scale(0.12);
  image(wheat, 0, 0);
  pop();
  
  push();
  imageMode(CENTER);
  translate(width/2 - 450, height/3 + 90 + 60);
  scale(0.08);
  image(rabbit, 0, 0);
  pop();
  
  push();
  imageMode(CENTER);
  translate(width/2 - 450, height/3 + 136 + 60);
  scale(0.055);
  image(deer, 0, 0);
  pop();
  
  push();
  imageMode(CENTER);
  translate(width/2 - 450, height/3 + 192 + 60);
  scale(0.06);
  image(snake, 0, 0);
  pop();
  
  push();
  imageMode(CENTER);
  translate(width/2 - 450, height/3 + 240 + 60);
  scale(0.05);
  image(wolf, 0, 0);
  pop();
  
  push();
  imageMode(CENTER);
  translate(width/2 - 450, height/3 + 288 + 60);
  scale(0.15);
  image(hawk, 0, 0);
  pop();
  
}

function slideRects() {
  
  strokeWeight(2);
  stroke(120);
  fill(192);
  rect(width/2, height/3 + 60, 800, 12);
  rect(width/2, height/3 + 48 + 60, 800, 12);
  rect(width/2, height/3 + 96 + 60, 800, 12);
  rect(width/2, height/3 + 144 + 60, 800, 12);
  rect(width/2, height/3 + 192 + 60, 800, 12);
  rect(width/2, height/3 + 240 + 60, 800, 12);
  rect(width/2, height/3 + 288 + 60, 800, 12);
  
}

function sliders() {
  
  //Slide 1 Corn
  stroke(120);
  fill(220);
  rect(ScornX, height/3 + 60, 18, 27);
  if (dist(ScornX, height/3 + 60, mouseX, mouseY) < 18.5) { 
      if (mouseIsPressed && mouseX > width/2 - 401 && mouseX < width/2 + 401) {
      mousePressedCorn = 1;
          }
      }
  
  if (mousePressedCorn > 0 && mouseIsPressed) {
    if (mouseX > width/2 - 401 && mouseX < width/2 + 401) {
    ScornX = mouseX;
        }
  } else {
   mousePressedCorn = 0; 
  }
  
  cornN = round((ScornX - 283) / 2 + 100);
  
  textAlign(LEFT);
  textFont(p5.Font);
  fill(10);
  textSize(20);
  noStroke();
  text(cornN, width/2 + 420, height/3 + 60 + 10);
  text("Corn", width/2 + 500, height/3 + 60 + 10);
  
  //Slide 2 Wheat
  stroke(120);
  fill(220);
  rect(SwheatX, height/3 + 48 + 60, 18, 27);
  if (dist(SwheatX, height/3 + 48 + 60, mouseX, mouseY) < 18.5) { 
      if (mouseIsPressed && mouseX > width/2 - 401 && mouseX < width/2 + 401) {
      mousePressedWheat = 1;
          }
      }
  
  if (mousePressedWheat > 0 && mouseIsPressed) {
    if (mouseX > width/2 - 401 && mouseX < width/2 + 401) {
    SwheatX = mouseX;
        }
  } else {
   mousePressedWheat = 0;
  }
  
wheatN = round((SwheatX - 283) / 2 + 100);
  
  textAlign(LEFT);
  textFont(p5.Font);
  fill(10);
  textSize(20);
  noStroke();
  text(wheatN, width/2 + 420, height/3 + 48 + 60 + 10);
  text("Wheat", width/2 + 500, height/3 + 60 + 48 + 10);
  
  //Slide 3 Rabbit
  stroke(120);
  fill(220);
  rect(SrabbitX, height/3 + 96 + 60, 18, 27);
  if (dist(SrabbitX, height/3 + 96 + 60, mouseX, mouseY) < 18.5) { 
      if (mouseIsPressed && mouseX > width/2 - 401 && mouseX < width/2 + 401) {
      mousePressedRabbit = 1;
          }
      }
  
  if (mousePressedRabbit > 0 && mouseIsPressed) {
    if (mouseX > width/2 - 401 && mouseX < width/2 + 401) {
    SrabbitX = mouseX;
        }
  } else {
   mousePressedRabbit = 0; 
  }
  
rabbitN = round((SrabbitX - 283) / 2 + 100);
  
  textAlign(LEFT);
  textFont(p5.Font);
  fill(10);
  textSize(20);
  noStroke();
  text(rabbitN, width/2 + 420, height/3 + 96 + 60 + 10);
  text("Rabbit(s)", width/2 + 500, height/3 + 60 + 96 + 10);
  
  //Slide 4 Deer
  stroke(120);
  fill(220);
  rect(SdeerX, height/3 + 144 + 60, 18, 27);
  if (dist(SdeerX, height/3 + 144 + 60, mouseX, mouseY) < 18.5) { 
      if (mouseIsPressed && mouseX > width/2 - 401 && mouseX < width/2 + 401) {
      mousePressedDeer = 1;
          }
      }
  
  if (mousePressedDeer > 0 && mouseIsPressed) {
    if (mouseX > width/2 - 401 && mouseX < width/2 + 401) {
    SdeerX = mouseX;
        }
  } else {
   mousePressedDeer = 0; 
  }
  
deerN = round((SdeerX - 283) / 2 + 100);
  
  textAlign(LEFT);
  textFont(p5.Font);
  fill(10);
  textSize(20);
  noStroke();
  text(deerN, width/2 + 420, height/3 + 144 + 60 + 10);
  text("Deer", width/2 + 500, height/3 + 144 + 60 + 10);
  
  //Slide 5 Snake
  stroke(120);
  fill(220);
  rect(SsnakeX, height/3 + 192 + 60, 18, 27);
  if (dist(SsnakeX, height/3 + 192 + 60, mouseX, mouseY) < 18.5) { 
      if (mouseIsPressed && mouseX > width/2 - 401 && mouseX < width/2 + 401) {
      mousePressedSnake = 1;
          }
      }
  
  if (mousePressedSnake > 0 && mouseIsPressed) {
    if (mouseX > width/2 - 401 && mouseX < width/2 + 401) {
    SsnakeX = mouseX;
        }
  } else {
   mousePressedSnake = 0; 
  }
  
snakeN = round((SsnakeX - 283) / 2 + 100);
  
  textAlign(LEFT);
  textFont(p5.Font);
  fill(10);
  textSize(20);
  noStroke();
  text(snakeN, width/2 + 420, height/3 + 192 + 60 + 10);
  text("Snake(s)", width/2 + 500, height/3 + 192 + 60 + 10);
  
  //Slide 6 Wolf
  stroke(120);
  fill(220);
  rect(SwolfX, height/3 + 240 + 60, 18, 27);
  if (dist(SwolfX, height/3 + 240 + 60, mouseX, mouseY) < 18.5) { 
      if (mouseIsPressed && mouseX > width/2 - 401 && mouseX < width/2 + 401) {
      mousePressedWolf = 1;
          }
      }
  
  if (mousePressedWolf > 0 && mouseIsPressed) {
    if (mouseX > width/2 - 401 && mouseX < width/2 + 401) {
    SwolfX = mouseX;
        }
  } else {
   mousePressedWolf = 0; 
  }
  
wolfN = round((SwolfX - 283) / 2 + 100);
  
  textAlign(LEFT);
  textFont(p5.Font);
  fill(10);
  textSize(20);
  noStroke();
  text(wolfN, width/2 + 420, height/3 + 240 + 60 + 10);
  text("Wolf(s)", width/2 + 500, height/3 + 240 + 60 + 10);
  
  //Slide 7 Hawk
  stroke(120);
  fill(220);
  rect(ShawkX, height/3 + 288 + 60, 18, 27);
  if (dist(ShawkX, height/3 + 288 + 60, mouseX, mouseY) < 18.5) { 
      if (mouseIsPressed && mouseX > width/2 - 401 && mouseX < width/2 + 401) {
      mousePressedHawk = 1;
          }
      }
  
  if (mousePressedHawk > 0 && mouseIsPressed) {
    if (mouseX > width/2 - 401 && mouseX < width/2 + 401) {
    ShawkX = mouseX;
        }
  } else {
   mousePressedHawk = 0; 
  }
  
hawkN = round((ShawkX - 283) / 2 + 100);
  
  textAlign(LEFT);
  textFont(p5.Font);
  fill(10);
  textSize(20);
  noStroke();
  text(hawkN, width/2 + 420, height/3 + 288 + 60 + 10);
  text("Hawk(s)", width/2 + 500, height/3 + 288 + 60 + 10);
  
}

function startButton() {
  
  if (dist(width/2, height - 50, mouseX, mouseY) < 75) {
    if (startSize < 100) {
        startSize += 3;
        }
  } else {
    
    if (startSize > 75) {
        startSize -= 3;
        }
    
  }
  
  if (dist(width/2, height - 50, mouseX, mouseY) < 75 && mouseIsPressed) {
      simulating = 1;
      }
  
  textFont(pFF);
  textSize(startSize);
  stroke(150);
  fill(10);
  strokeWeight(3);
  textAlign(CENTER);
  rectMode(CENTER);
  text("Start", width/2, height - 50);
  
}