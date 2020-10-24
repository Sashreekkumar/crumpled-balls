const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body

var engine, world;
var  bin1, bin2, bin3, ground;
var paper; 

function setup(){
    var canvas = createCanvas(800,200);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,180,800,10)
    bin1= new Bin(600,170,50,10);
    bin2= new Bin(630,145,10,50);
    bin3= new Bin(570,145,10,50);
    paper= new Paper(50, 110, 20)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    bin1.display();
    bin2.display();
    bin3.display();
    paper.display();
    keyPressed();
}

function keyPressed (){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.body.position,{x:1.5, y:-1.55});
}

}