var hammer;
var plane;
var stone;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(400,650,800,70);
  hammer = new Hammer(200,200);
	stone = new Stone(400,550,PI/8)

	Engine.run(engine);
  
}


function draw() {
  background("cyan");
  Engine.update(engine);
  //rectMode(CENTER);
  plane.display();
  hammer.display();
  stone.display();
  
}



