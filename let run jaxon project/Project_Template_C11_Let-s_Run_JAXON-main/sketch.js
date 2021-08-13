var road
var pathimage 
var playeranimation
var wall1
var wall2


function preload(){
  pathimage = loadImage("path.png")
  playeranimation = loadAnimation("Runner-1.png","Runner-2.png")


}

function setup(){
  createCanvas(600,600);
  road = createSprite(300,100)
  road.addImage("marathon",pathimage)
  road.scale=2
  road.Y = road.height/2;
  road.velocityY = 4;
  
  
  wall1 = createSprite(590,70,20,1000000)
  wall1.visible=false
  wall2 = createSprite(90,70,20,1000000)
  wall2.visible=false
  
  
  player = createSprite(390,390,20,20)
  player.addAnimation("run",playeranimation)
  player.scale=0.10

}

function draw() {
  background("gray");
console.log(road.y)
  player.collide(wall1,wall2)
 if(road.y > 600 )
 {

road.y = road.height/2

 }
player.x=mouseX


  drawSprites()
}
