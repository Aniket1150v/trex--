var bombImg
var coinImg
var energyDrinkImg
var pathImg
var powerImg
var RunnerImg1
var RunnerImg2
var Runner_running

function preload(){
  //pre-load images
  pathImage= loadImage("path.png");
  Runner_running = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(600,600);
  //create sprites here
  path = createSprite(200,200,400,20);
  path.addImage(pathImage);
  path.velocityY=4
 // path.y=path.height/30;
  path.scale=0.3

  Runner = createSprite(200,200,50,170);
  Runner.addAnimation("running", Runner_running);
 // Runner.y = Runner.width /2;
  Runner.scale=0.03
}

function draw() {
  background(0);
 
  if(path.y > 400){
    path.y=height/2;
  }
  drawSprites();
}
