
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1300,650);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

    
//{	
	
	dragger = new Polygon(160,300,10)
	sling = new Launcher(dragger.body,{x:160,y:300})

	place1 = new Ground(420,400,300,10)
	place2 = new Ground(760,350,300,10)
	place3 = new Ground(1120,400,300,10)
    ground = new Ground(700,640,1500,40)
    


	b1 = new Box(300,350,40,40)
	b2 = new Box(340,350,40,40)
	b3 = new Box(380,350,40,40)
	b4 = new Box(420,350,40,40)
	b5 = new Box(460,350,40,40)
	b6 = new Box(500,350,40,40)
	b7 = new Box(540,350,40,40)
//} 
//{
	b8= new Box2(340,250,40,40)
	b9 = new Box2(380,250,40,40)
	b10 = new Box2(420,250,40,40)
	b11 = new Box2(460,250,40,40)
	b12 = new Box2(500,250,40,40)
//}
//{
	b13 = new Box3(380,150,40,40)
	b14 = new Box3(420,150,40,40)
	b15 = new Box3(460,150,40,40)
//}
//{
	b16 = new Box4(420,50,40,40)

//}
    bb1 = new Box(1000,350,40,40)
	bb2 = new Box(1040,350,40,40)
	bb3 = new Box(1080,350,40,40)
	bb4 = new Box(1120,350,40,40)
	bb5 = new Box(1160,350,40,40)
	bb6 = new Box(1200,350,40,40)
	bb7 = new Box(1240,350,40,40)
//} 
//{
	bb8= new Box2(1040,250,40,40)
	bb9 = new Box2(1080,250,40,40)
	bb10 = new Box2(1120,250,40,40)
	bb11 = new Box2(1160,250,40,40)
	bb12 = new Box2(1200,250,40,40)
//}
//{
	bb13 = new Box3(1080,150,40,40)
	bb14 = new Box3(1120,150,40,40)
	bb15 = new Box3(1160,150,40,40)
//}
//{
	bb16 = new Box4(1120,50,40,40)

//}
    bbb1 = new Box(1000,350,40,40)
	bbb2 = new Box(1040,350,40,40)
	bbb3 = new Box(1080,350,40,40)
	bbb4 = new Box(1120,350,40,40)
	bbb5 = new Box(1160,350,40,40)
	bbb6 = new Box(1200,350,40,40)
	bbb7 = new Box(1240,350,40,40)
//} 
//{
	bbb8= new Box2(1040,250,40,40)
	bbb9 = new Box2(1080,250,40,40)
	bbb10 = new Box2(1120,250,40,40)
	bbb11 = new Box2(1160,250,40,40)
	bbb12 = new Box2(1200,250,40,40)
//}
//{
	bbb13 = new Box3(1080,150,40,40)
	bbb14 = new Box3(1120,150,40,40)
	bbb15 = new Box3(1160,150,40,40)
//}
//{
	bbb16 = new Box4(1120,50,40,40)

//}
bbbb1 = new Box(640,250,40,40)
bbbb2 = new Box(680,250,40,40)
bbbb3 = new Box(720,250,40,40)
bbbb4 = new Box(760,250,40,40)
bbbb5 = new Box(800,250,40,40)
bbbb6 = new Box(840,250,40,40)
bbbb7 = new Box(880,250,40,40)
//} 
//{
bbbb8= new Box2(680,200,40,40)
bbbb9 = new Box2(720,200,40,40)
bbbb10 = new Box2(760,200,40,40)
bbbb11 = new Box2(800,200,40,40)
bbbb12 = new Box2(840,200,40,40)
//}
//{
bbbb13 = new Box3(720,150,40,40)
bbbb14 = new Box3(760,150,40,40)
bbbb15 = new Box3(800,150,40,40)
//}
//{
bbbb16 = new Box4(760,100,40,40)

//}
}
function draw() {
  rectMode(CENTER);
  background("pink"); 
  dragger.display()
  sling.display()
  ground.display()
  place1.display()
  place2.display()
  place3.display()

  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()  
  b14.display()
  b15.display()
  b16.display()
  bb1.display()
  bb2.display()
  bb3.display()
  bb4.display()
  bb5.display()
  bb6.display()
  bb7.display()
  bb8.display()
  bb9.display()
  bb10.display()
  bb11.display()
  bb12.display()
  bb13.display()  
  bb14.display()
  bb15.display()
  bb16.display()
  bbb1.display()
  bbb2.display()
  bbb3.display()
  bbb4.display()
  bbb5.display()
  bbb6.display()
  bbb7.display()
  bbb8.display()
  bbb9.display()
  bbb10.display()
  bbb11.display()
  bbb12.display()
  bbb13.display()  
  bbb14.display()
  bbb15.display()
  bbb16.display()
  bbbb1.display()
  bbbb2.display()
  bbbb3.display()
  bbbb4.display()
  bbbb5.display()
  bbbb6.display()
  bbbb7.display()
  bbbb8.display()
  bbbb9.display()
  bbbb10.display()
  bbbb11.display()
  bbbb12.display()
  bbbb13.display()  
  bbbb14.display()
  bbbb15.display()
  bbbb16.display()
  textSize(30)
  fill("darkblue")
  text("Drag the circular body to hit the blocks",400,50)
  text("Press 'SPACE KEY' to get a second chance",400,500)

}

function mouseDragged(){
    Matter.Body.setPosition(dragger.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
sling.fly()
}
function keyPressed(){
    Matter.Body.setPosition(dragger.body,{x:160,y:300});
	sling.attach(dragger.body)
}