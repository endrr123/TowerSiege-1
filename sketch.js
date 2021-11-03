const Engine = Matter.Engine
const Constraint = Matter.Constraint
const World = Matter.World
const Bodies = Matter.Bodies

var ground, stand1, stand2;
var engine,world;
var polygon, polygonIMG;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;

function preload(){
  polygonIMG = loadImage("polygon.png")
}
function setup(){
  createCanvas(1200,800);
   engine = Engine.create()
   world = engine.world;
  ground = new Ground(600,780,1200,10);
  stand1 = new Ground(600,600,250,10);
  stand2 = new Ground(900,400,250,10);

  

   box1 = new Box(500, 575,30,40)
   box2 = new Box(530, 575,30,40)
   box3 = new Box(560, 575,30,40)
   box4 = new Box(590, 575,30,40)
   box5 = new Box(620, 575,30,40)
   box6 = new Box(650, 575,30,40)
   box7 = new Box(680, 575,30,40)
   box8 = new Box(530, 535,30,40)
   box9 = new Box(560, 535,30,40)
   box10 = new Box(590, 535,30,40)
   box11 = new Box(620, 535,30,40)
   box12 = new Box(650, 535,30,40)
   box13 = new Box(560, 495,30,40)
   box14 = new Box(590, 495,30,40)
   box15 = new Box(620,495,30,40)
   box16 = new Box(590,455,30,40)
   box17 = new Box(830, 340,30,40)
   box18 = new Box(860, 340,30,40)
   box19 = new Box(890, 340,30,40)
   box20 = new Box(920, 340,30,40)
   box21 = new Box(950, 340,30,40)
   box22 = new Box(860, 300, 30, 40)
   box23 = new Box(890, 300, 30, 40)
   box24 = new Box(920, 300, 30, 40)
   box25 = new Box(890, 260, 30, 40)
   
   ball = Bodies.circle(100, 400, 40)
   World.add(world, ball)

   polygon = new Slingshot(this.ball, {x: 100, y: 400})

}

function draw(){
    background(0);
  ground.display()
  stand1.display()
  stand2.display()
  fill("yellow")
  box25.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  fill('skyblue')
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  fill("pink")
  box16.display()
  box24.display()
  box22.display()
  box23.display()
  box13.display()
  box14.display()
  box15.display()

  imageMode(CENTER)
  image(polygonIMG, ball.position.x, ball.position.y, 40, 40)
  polygon.display()
  
  
 

  



}

function mouseDragged(){

  Matter.Body.setPosition(this.ball, {x: mouseX, y:mouseY})
}

function mouseReleased(){
  polygon.fly()
}