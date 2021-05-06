var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rectangle1Sprite,rectangle2Sprite,rectangle3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rectangle1Sprite=createSprite(270,655,120,10);
	rectangle1Sprite.shapeColor=Color="blue";

	rectangle2Sprite=createSprite(215,605,10,100);
	rectangle2Sprite.shapeColor=Color="blue";	

	rectangle3Sprite=createSprite(325,605,10,100);
	rectangle3Sprite.shapeColor=Color="blue";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.x=mouseX;
  helicopterSprite.x=mouseX;
  
  packageSprite.bounce(rectangle1Sprite)
  packageSprite.collide(rectangle2Sprite)
  packageSprite.collide(rectangle3Sprite)

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false)
  }
}



