var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  gameState="play"
 var turn=0;
 var count =0
 var score =0
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

//line ()
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  fill("white")
  textSize(20)
 text("Score: "+score,500,100)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 if(particle!=null){


  particle.display();
  if(particle.body.position.y>760){
    count++
  if(particle.body.position.x<300){
score+=500;
particle=null;}else if(particle.body.position.x>300 && particle.body.position.x<500){
  score+=100;
particle=null;
}else{
  score+=300;
particle=null;
}
if(count >5){
  gameState="end"


  }
}

 }
if(gameState=="end"){
  fill("white")
  textSize(40)
 text("Game Over",300,400)
}
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   fill("white")
    text (Math.round(mouseX)+","+mouseY,mouseX,mouseY)
    stroke("white")
    line (0,470,800,470)

    
}


function mousePressed(){

if(gameState!="end"){

count ++
     particle=(new Particle(mouseX, 10,10));


}




}
