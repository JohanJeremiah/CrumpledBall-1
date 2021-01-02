
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crumpledpaper=new Paper(200,350,25);
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1000,650)
	

	var render = Render.create
	(
		{	
		 element: document.body,
		 engine: engine,
		 options: 
		  {
		   width: 1200,
		   height: 700,
		   wireframes: false
		  }
		}   
	)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 crumpledpaper.display()
 ground.display()
 dustbin.display()
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{

	  Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position,{x:85,y:-85});
  
	}
}



