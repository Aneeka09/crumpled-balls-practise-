var ball,groundSprite;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	box3Img=loadImage("download.png")
}

function setup() {
createCanvas(1600, 800);
engine = Engine.create();
world = engine.world;
paperObj=new Paper(200,650,40);


ground=new Ground(width/2,height-35,width,10);


box1=createSprite(1200,350,300,20);
box1.shapeColor=color(255);

box2=createSprite(1000,350,20,200);
box2.shapeColor=color(255);

box3Sprite=createSprite(1400,350,20,200);
box3Sprite.shapeColor=color(255);





	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObj.display()
  ground.display()
  drawSprites();
  

 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85})
  }
}




