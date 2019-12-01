var time = 30;

function simRects() {
  rectMode(CORNER);
  fill(200);
  stroke(150);
  strokeWeight(2);
  
  if (cornN < 801) {
  rect(width/2 - 400, height/3 + 40, cornN, 40);
  } else {rect(width/2 - 400, height/3 + 40, 800, 40);
         }
  if (wheatN < 801) {
  rect(width/2 - 400, height/3 + 48 + 40, wheatN, 40);
  } else {rect(width/2 - 400, height/3 + 48 + 40, 800, 40);}
  if (rabbitN < 801) {
  rect(width/2 - 400, height/3 + 96 + 40, rabbitN, 40);
  } else {rect(width/2 - 400, height/3 + 96 + 40, 800, 40);}
  if (deerN < 801) {
  rect(width/2 - 400, height/3 + 144 + 40, deerN, 40);
  } else {rect(width/2 - 400, height/3 + 144 + 40, 800, 40);}
  if (snakeN < 801) {
  rect(width/2 - 400, height/3 + 192 + 40, snakeN, 40);
  } else {rect(width/2 - 400, height/3 + 192 + 40, 800, 40);}
  if (wolfN < 801) {
  rect(width/2 - 400, height/3 + 240 + 40, wolfN, 40);
  } else {rect(width/2 - 400, height/3 + 240 + 40, 800, 40);}
  if (hawkN < 801) {
  rect(width/2 - 400, height/3 + 288 + 40, hawkN, 40);
  } else {rect(width/2 - 400, height/3 + 288 + 40, 800, 40);}
}

function simulate() {
  
  //Corn
  if (cornN > 0) {
    if ((random(cornN*2)) / cornN >= 1) {
      cornN += 1.05;
    }
      } 
  if (cornN < 0) {
    cornN = 0;
      }
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(cornN), width/2 + 420, height/3 + 60 + 10);
  
  //Wheat
  if (wheatN > 0) {
    if (random(wheatN * 2) / wheatN > 1) {
        wheatN += 1;
        }
      }
  if (wheatN < 0) {
      wheatN = 0;
      }
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(wheatN), width/2 + 420, height/3 + 48 + 60 + 10);
  
  //Rabbit
  if (rabbitN > 0) {
    
    cornN -= 0.55;
    
    if (cornN / rabbitN >= 1.5) {
      
      if (random(2) > 1) {
        rabbitN += random(2);
        
      } else {
        
        if (random(2) > 1) {
        rabbitN += random(1);
        
      }
        }
    
    if (cornN > 0) {
        rabbitN += cornN / 5000;
        }
    if (cornN <= 0) {
        rabbitN -= 0.2;
        }
      }
  if (rabbitN < 0) {
      rabbitN = 0;
      }
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(rabbitN), width/2 + 420, height/3 + 96 + 60 + 10);
  
  //Deer
  if (deerN > 0) {
wheatN -= 0.5;
    if (wheatN / deerN >= 1.5) {
      if (random(2) > 1) {
        deerN += random(1);
      }
        } else {
          
         if (random(2) > 1) {
        deerN += random(0.5);
      } 
          
        }
    if (wheatN > 0) {
        deerN += wheatN / 10000;
        }
    if (wheatN <= 0) {
        deerN -= 0.3;
        }
      }
  
  if (deerN < 0) {
      deerN = 0;
      }
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(deerN), width/2 + 420, height/3 + 144 + 60 + 10);
  
  //Snake
  if (snakeN > 0) {
rabbitN -= 0.5;
    if (rabbitN / snakeN >= 1.5) {
      if (random(2) > 1) {
        snakeN += random(1.5);
      }
        } else {
          
         if (random(2) > 1) {
        snakeN += random(0.75);
      } 
          
        }
    if (rabbitN > 0) {
        snakeN += rabbitN / 8000;
        }
    if (rabbitN <= 0) {
        snakeN -= 0.2;
        }
    snakeN -= random(0.2);
  }
  
  if (snakeN < 0) {
      snakeN = 0;
      }
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(snakeN), width/2 + 420, height/3 + 192 + 60 + 10);
  
  //Wolf
  if (wolfN > 0) {
deerN -= 0.25;
    if (deerN / wolfN >= 1.5) {
      if (random(2) > 1) {
        wolfN += random(1);
      }
        } else {
          
         if (random(2) > 1) {
        wolfN += random(0.5);
      } 
          
        }
    if (deerN > 0) {
        wolfN += deerN / 10000;
        }
    if (deerN <= 0) {
        wolfN -= 0.2;
        }
    wolfN -= random(0.2);
      }
  
  if (wolfN < 0) {
      wolfN = 0;
      }
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(wolfN), width/2 + 420, height/3 + 240 + 60 + 10);
  
  //Hawk
  if (hawkN > 0) {
      hawkN += random(1);
      hawkN -= random((hawkN - rabbitN) / 100);
    snakeN -= 0.1;
    if (rabbitN <= 0) {
     hawkN -= 2; 
    }
      }
  
  if (hawkN < 0) {
      hawkN = 0;
      }
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(hawkN), width/2 + 420, height/3 + 288 + 60 + 10);
}
}

function timer() {
  textAlign(CENTER);
  textSize(100);
  text(round(time), width/2, height / 3);
  if (time > 0) {
      time -= 0.01;
      }
}

function score() {
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(cornN), width/2 + 420, height/3 + 60 + 10);
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(wheatN), width/2 + 420, height/3 + 48 + 60 + 10);
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(rabbitN), width/2 + 420, height/3 + 96 + 60 + 10);
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(deerN), width/2 + 420, height/3 + 144 + 60 + 10);
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(snakeN), width/2 + 420, height/3 + 192 + 60 + 10);
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(wolfN), width/2 + 420, height/3 + 240 + 60 + 10);
  
  textFont(p5.Font);
  textSize(30);
  textAlign(LEFT);
  fill(10);
  noStroke();
  text(round(hawkN), width/2 + 420, height/3 + 288 + 60 + 10);
}
