
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofObject=new roof (400,100,300,40)
bob1=new bob (300,350,50)
bob2=new bob (350,350,50)
bob3=new bob (400,350,50)
bob4=new bob (450,350,50)
bob5=new bob (500,350,50)

rope1=new rope (bob1.body,roofObject.body,-100,0)
rope2=new rope (bob2.body,roofObject.body,-50,0)
rope3=new rope (bob3.body,roofObject.body,0,0)
rope4=new rope (bob4.body,roofObject.body,50,0)
rope5=new rope (bob5.body,roofObject.body,100,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roofObject.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

}



