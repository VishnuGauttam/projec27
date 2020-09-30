const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var roof
var bob,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5;
var back,backImage
function preload(){
   backImage= loadImage("sc.jpg");
}


function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;

  
    back = createSprite(700,250);
    back.addImage(backImage);
back.scale=5
 roof = new Roof(600,100,400,30);

  bob = new Bob(450,380);
  bob2 = new Bob(530,380);
  bob3 = new Bob(610,380);
  bob4 = new Bob(690,380);
  bob5 = new Bob(770,380);

  rope = new Rope(bob.body,{x:450,y:115});
  rope2 = new Rope(bob2.body,{x:530,y:115});
  rope3 = new Rope(bob3.body,{x:610,y:115});
  rope4 = new Rope(bob4.body,{x:690,y:115});
  rope5 = new Rope(bob5.body,{x:770,y:115});

} 

function draw(){
   
    
    background("white");
    Engine.update(engine);
    drawSprites()
    roof.display();
    bob.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    
}
function mouseDragged(){
Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})    
}
