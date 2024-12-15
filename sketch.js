let posX, posY, posXend, posYend = 0; // Coordinates for the moving line

let backgroundImg; // Background image

var r;
var g;
var b; 

var angle = 0; // Angle
var radius = 200;  // Radius of the circle
var empX = 250;   // X-coordinate of the circle  
var empY = 350;   // Y-coordinate of the circle  

var frameRate = 10; // Framerate
var size = 20; // Size


arcx = 90; // Position of the umbrella
arcy = 580; // Position of the umbrella


u = 0; // Noise variable

function setup() {
  
  // Load background image created in Photoshop
  backgroundImg = loadImage('background/background_programming.png'); 
  createCanvas(500, 700);
  
  posX = random(0, width); // Define random initial coordinates
  posY = random(0, height);
  posYend = posY + random(50, 100);
  frameRate(frameRate); // Set framerate   
}

function draw() {
  background(backgroundImg); // Set background
  
  keyPressed2(); // Handle key press actions
  
  // Noise for the title
  var x1 = map(noise(u), 0, 2, 0, width);
  
  u += 0.01; // Increment u to move the noise slowly in a range between 0 and 1
  
  // Diagonal lines (suggested by the teacher)
  push(); // Use push & pop to rotate the matrix and return to the original matrix
  fill(255, 255, 255);
  stroke(255);
  strokeWeight(20);
  rotate(radians(-45)); // Rotate the matrix by 45º counterclockwise
  line(posX, posY, posX, posYend); // Draw the line
  posY += 50; // Increase Y position to make it move
  posYend += 80; // Do the same for the end of the line
  if (posYend >= height + height / 2) { // Detect if the line reaches the canvas edge
    posX = random(-width / 2, width / 2); // Define a new random position for X
    posY = 0; // Start from the top
    posYend = posY + random(50, 100); // Set a new random length for the line from posY
  }
  pop(); // Return to the original matrix
  
  
  // Random colors for the large circle
  r = random(0, 255); // r is a random number between 0-255
  g = random(150, 200); // g is a random number between 150-255
  b = random(0, 250); // b is a random number between 0-250
  
  noStroke();
  fill(r, g, b);
  circle(250, 350, 400);
  
  // Small circle
  var x = empX + radius * cos(angle);
  var y = empY + radius * sin(angle);

  fill(250);
  circle(x, y, size);
  angle++;
  
  // Circle with a black border
  noFill();
  stroke("black");
  strokeWeight(4);
  circle(250, 350, 450);

  // Main title
  fill('white');
  textWrap(WORD);
  textSize(70);
  textFont('Minstrel Poster NF'); // Font
  text('Playa Sound Festival', x1, 220, 100);
  
  // Date and place
  textFont("HighlandGothicFLF");
  textSize(30);
  text("10 de Julio", 50, 30, 100);
  text("Playa de la Concha", 350, 20, 100);
  
  // Umbrella pole
  fill(0);
  strokeWeight(10);
  line(arcx - 75, 660, arcx, 580);
  
  // Umbrella
  fill("yellow");
  noStroke();
  arc(arcx, arcy, 100, 100, PI, radians(30));
  
  // Sand
  noStroke();
  fill(249, 209, 153);
  rect(0, 630, 600, 80);
 
  // Towel
  fill(35, 196, 35);
  rect(20, 635, 80, 40);

  /* MousePressed: When the mouse is held down, the size of the rotating circle increases */
  if (mouseIsPressed == true) {
    size = 150;
  } else {
    size = 20;
  }
}

/* KeyPressed: When the right arrow key is pressed, the umbrella moves to the right,
and when the left arrow key is pressed, the umbrella moves to the left */
function keyPressed2() {
  if (keyCode == RIGHT_ARROW) {
    arcx += 5;
  } else if (keyCode == LEFT_ARROW) {
    arcx -= 5;
  }
}
 

// When the 's' key is pressed, save the frame as a GIF
function keyPressed() {
  if (key == "s") {
    saveGif('FestivalPoster', 5);
  }
}
