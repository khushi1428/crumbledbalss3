const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var engine, world,dustbin,paper;
function setup() {
  createCanvas(1200, 600);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(800, 200, 80, 10);
  paper = new Paper(100, 400, 50);
 
  ground = Bodies.rectangle(width / 2, 550, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
  sling = new Slingshot(paper.body,{x:200,y:100})
}

function draw() {
     background("blue");
       rectMode(CENTER);
    //background(0);

    dustbin.display();
    paper.display();
    sling.display();
    
    fill("grey");
rect(ground.position.x,ground.position.y,width,10)
  }



/*function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 150,
      y: -150
    });
   
  }
}*/
function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly()
}