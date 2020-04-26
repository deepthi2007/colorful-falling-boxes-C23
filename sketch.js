const Engine = Matter.Engine,World = Matter.World, Bodies = Matter.Bodies;
var engine, world, ground,ball;
var box,box1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box = new Box(100,150,20,30,"red");
  box1 = new Box(200,250,20,30,"blue");
  ground = new Ground();
}

function draw() {
  background(0);
  Engine.update(engine);
  box.drawing();
  box1.drawing();
  ground.display();
}