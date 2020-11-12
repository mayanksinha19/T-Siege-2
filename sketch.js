const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gnd1,gnd2,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box_1,box_2,box_3,box_4,box_5,box_6,pebble,slingshot;



function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    gnd1=new Ground(630,500,400,10);
    gnd2=new Ground(1000,250,250,10);
    box1=new Box(500,480,60,60);
    box2=new Box(580,480,60,60);
    box3=new Box(660,480,60,60);
    box4=new Box(740,480,60,60);
    box5=new Box(538,425,60,60);
    box6=new Box(622,425,60,60);
    box7=new Box(706,425,60,60);
    box8=new Box(580,370,60,60);
    box9=new Box(660,370,60,60);
    box10=new Box(622,315,60,60); 
    box_1=new Box(920,240,60,60);
    box_2=new Box(1000,240,60,60);
    box_3=new Box(1080,240,60,60);
    box_4=new Box(960,185,60,60);
    box_5=new Box(1040,185,60,60);
    box_6=new Box(1000,130,60,60);
    pebble=new Pebble(200,200,15);
    //fill("yellow");
    //obj=new Box(200,200,60,60);
    slingshot = new Sling_Shot(obj.body,{x:100,y:80});
    //rope=new Rope(stone.body,{x:155,y:562});
    //log6 = new Log(230,180,80, PI/2);
    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);
    gnd1.display();
    gnd2.display();
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
    box_1.display();
    box_2.display();
    box_3.display();
    box_4.display();
    box_5.display();
    box_6.display();
    pebble.display();
    //obj.display();
    //slingshot.display();
    //slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope.fly();
}
function mouseReleased(){
    slingShot.fly();
}