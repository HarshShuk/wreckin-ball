
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ball;

function setup() {
  createCanvas(1200,400);

  

  engine=Engine.create()
  world=engine.world

  ground = new Ground(600,400,1200,10)
  ball = new Ball(200,200,20);
  box1 = new Box(800,345,20,100);
  box2 = new Box(900,345,20,100);
  box3 = new Box(700,345,20,100);
  box4 = new Box(600,345,20,100);
  box5 = new Box(850,300,170,20);
  box6 = new Box(650,300,170,20);
  box7 = new Box(800,240,20,100);
  box8 = new Box(900,240,20,100);
  box9 = new Box(700,240,20,100);
  box10 = new Box(600,240,20,100);
  box11= new Box(750,180,380,20);
  rubber = new Rubberband(ball.body,{x:600,y:80});
  line(ball.body,{x:200,y:80});
}

function draw() {
  background("green");  
  Engine.update(engine)

  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  rubber.display();
}
function mouseDragged(){
  
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  
}
function mouseReleased(){
  rubber.fly();
}