var sea;
var ship;
var ship_moving;
var seaImage;

function preload(){
ship_moving= loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
seaImage= loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(400,200);
  sea.addImage("sea", seaImage);
  sea.scale= 0.3;

  ship = createSprite(130,200,30,30); 
  ship.addAnimation("moving", ship_moving);
  ship.scale= 0.25;
  
  
}

function draw() {
background("grey");

sea.velocityX= -5;
if(sea.x < 0){ 
  sea.x = sea.width/8;
}



drawSprites();
}