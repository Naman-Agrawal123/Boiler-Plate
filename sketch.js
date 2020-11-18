var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 80);
 fixedRect.shapeColor = "red";

 movingRect = createSprite (200,100,80,50);
 movingRect.shapeColor = "yellow";

 fixedRect.debug = true;
 movingRect.debug = true;
}

function draw() {
  background(0);
  
if (fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
  movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2) {

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue"
}

else {fixedRect.shapeColor = "red";
      movingRect.shapeColor = "yellow"} 


  movingRect.x = mouseX;
  movingRect.y = mouseY;
  drawSprites();
}