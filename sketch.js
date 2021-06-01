var bg,bg2,Tbg,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  Tbg = loadImage("treasure.jpg");
  bg2 = loadImage("aladdin_cave2.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(Tbg)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }
  

  drawSprites()
}