var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey =createSprite(80,315,20,20);
  monkey.addAnimation("moving",_monkey_running);
  monkey.scale =0.1
  
  ground =createSprite(400,350,900,10)
  ground.velocityX =-4
  ground.x=ground.width/2
  console.log(ground.x)
  

  
}

function draw(){

if(index ===player.index){
  fill("brown")
  camera.position.x =displayWidth/2
  camera.position.y= monkey[index].y
}else{
  fill("black")
}

  
}
