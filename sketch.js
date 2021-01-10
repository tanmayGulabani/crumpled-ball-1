
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(720,390,100,10)
    paper = new Paper(100,300,10)
	ground = Bodies.rectangle(width/2, 400, width,10)
	
	Engine.run(engine);

	
	world.add(world,ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin.display();
  paper.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}



