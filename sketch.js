const Engine = Matter.Engine; 
const Render = Matter.Render; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint; 
const Body = Matter.Body; 
const Composites = Matter.Composites; 
const Composite = Matter.Composite;

var blockGroup
var ground
var ladyBug 


function preload(){
  bug_img=loadImage('bugStanding.png')
  gameOver_img =loadImage('gameOver.png')
  heart_img = loadImage('Heart.png')
  eat_img=loadAnimation('eat1.png','eat2.png','eat3.png','eat4.png','eat5.png')
bg_img = loadImage('background-moon.jpg')
cloudImage = loadImage('pinkCloud.png')
platFormImage = loadImage('Platform.png')
}

function setup(){
  engine = Engine.create(); 
  world = engine.world;

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); 
  if(isMobile)
  { 
    canW = displayWidth; 
    canH = displayHeight; 
    createCanvas(displayWidth+80, displayHeight); 
  } else 
  { canW = windowWidth; 
    canH = windowHeight; 
    createCanvas(windowWidth, windowHeight); 

    //sky = createSprite(400,900);
    //sky.addImage("background.jpg",bg_img);
    //sky.velocityY = 1;
    //sky.scale =1.5

    //sky2 = createSprite(900,400);
    //sky2.addImage("background.jpg",bg_img);
    //sky2.velocityY = 1;
    //sky2.scale =1.5

    bug = createSprite(canW-100,canH-150,canW-1000,50)
    bug.addImage(bug_img)
    bug.velocityY=0.5
    
    

    //doorsGroup = new Group();
  //climbersGroup = new Group();
  
  PlatformGroup = new Group();

    

  }

  //for (var i = 0; i <canH ;i=i+100) {
    //platform =new Platform(random(0,canW),i,100,20);
  //}
  //bug = new Bug(canW-100,canH-150,200,100);
  ground = new Ground(canW,canH-40,canW-1000,50);
  //platform  = new Platform(random(0,canW),random(0,canH),100,20);
  

}

function draw(){
background(bg_img)



Engine.update(engine);
if(keyIsDown(LEFT_ARROW)){
  bug.x-=2
}
if(keyIsDown(RIGHT_ARROW)){
  bug.x+=2
}
if(keyIsDown(UP_ARROW)){
  bug.y-=2
}
if(keyIsDown(DOWN_ARROW)){
  bug.y+=2
}

PlatformGroup.collide(bug)

//SpawnPlatformsLeft();
//SpawnPlatformsRight();
spawnClouds();
spawnPlatforms();
//collisionWithBug() 


ground.show(); 
//platform.show();

//var platformFrames = platformSpritedata.frames;
     
       //var pos = platformFrames[i].position;
       //var img = platformSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
       //platformAnimation.push(img);
     
  
  drawSprites()
}


//{//function SpawnPlatformsLeft() {
 // if (frameCount%100===0){
   
    ///var invisibleBlock = createSprite(10,15)
    //invisibleBlock.velocityY = 3
    //invisibleBlock.x = Math.round(random(0,700))
    //invisibleBlock.width = 100;
    //invisibleBlock.height = 20;
    //invisibleBlock.lifetime = 250
    //invisibleBlock.visible = true
    //PlatformGroup.add(invisibleBlock)
  
  
 // }//}*

  //function SpawnPlatformsRight() {
    //if (frameCount%100===0){
     
      //var invisibleBlock2 = createSprite(10,15)
      //invisibleBlock2.velocityY = 3
      //invisibleBlock2.x = Math.round(random(700,1400))
     // invisibleBlock2.width = 100;
      //invisibleBlock2.height = 20;
      //invisibleBlock2.lifetime = 250
      //invisibleBlock2.visible = true
      //PlatformGroup.add(invisibleBlock2)
    
    //} 
    
    //}

    function spawnClouds(){

      // write your code here 
      if(frameCount % 40 === 0){
     
      
      cloud = createSprite(600,100,40,10)
      cloud.addImage(cloudImage)
      cloud.scale=0.3
      cloud.velocityY=5
      cloud.x=Math.round(random(0,canW))
    
     
     }}

     function spawnPlatforms(){

      // write your code here 
      if(frameCount % 60 === 0){
     
      
      platform = createSprite(600,100,40,10)
      platform.addImage(platFormImage)
      platform.scale=1
      platform.velocityY=5
      platform.x=Math.round(random(0,canW))
      PlatformGroup.add(platform)
    
     
     }}

     /*function collisionWithBug() {
      for (var i = 0; i < platform.length; i++) {
        
          var collision = Matter.SAT.collides(bug.body, platform[i].body);
    
          if (collision.collided) {
            score+=5
             
            
    
           
            
          }
        }
      }*/

   

     