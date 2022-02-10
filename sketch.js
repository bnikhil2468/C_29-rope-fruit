const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var rope;
var fruit;
var con_fruit;

let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(10,{x:250,y:15});
  var fruitOptions={
    density:0.001

  }
  fruit = Bodies.circle(250,400,15,fruitOptions);
  

  Matter.Composite.add(rope.body,fruit);
  con_fruit = new Link(rope,fruit);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  Engine.update(engine);
  ellipse(fruit.position.x,fruit.position.y,15,15);
}
