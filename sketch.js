var chef;
var chefimage;
var bgimage;
var in2;
var ingredientGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score=0;
var monkey1_img,monkey2_img;
function preload()
{
  chefimage=loadImage("Sprites/Chef2.png");
  bgimage=loadImage("Sprites/BG.jpg");
  ingredient1_img=loadImage("Sprites/ingredient1.jpg");
  ingredient2_img=loadImage("Sprites/ingredient2.jpg");
  ingredient3_img=loadImage("Sprites/ingredient3.jpg");
  ingredient4_img=loadImage("Sprites/ingredient4.png");
  ingredient5_img=loadImage("Sprites/ingredient5.PNG");
  ingredient6_img=loadImage("Sprites/ingredient6.png");
  ingredient7_img=loadImage("Sprites/ingredient7.PNG");
  ingredient8_img=loadImage("Sprites/ingredient8.PNG");
  ingredient9_img=loadImage("Sprites/ingredient9.jpg");
  monkey1_img=loadImage("Sprites/monkey1.gif");
  monkey2_img=loadImage("Sprites/monkey2.gif");
}





function setup() {
  createCanvas(displayWidth-75,displayHeight-125);
  chef=createSprite(400, 200, 50, 50);
  
  chef.addImage("chefimage",chefimage);
  chef.scale=1;
  chef.shapeColor="red";
  
ingredientGroup=new Group();
monkeyGroup=new Group();
}

function draw() {
  background("white");
  textSize(40);
  textFont("Georgia")
  text("Score : "+score,width-200,100)
  if(gameState===PLAY)
  {
    if(keyDown("RIGHT_ARROW"))
    {
      chef.velocityY= 0;
      chef.velocityX= 5;
    }
    if(keyDown("LEFT_ARROW"))
    {
      chef.velocityY= 0;
      chef.velocityX= -5;
    }
    if(keyDown("UP_ARROW"))
    {
      chef.velocityY= -5;
      chef.velocityX= 0;
    }
    if(keyDown("DOWN_ARROW"))
    {
      chef.velocityY= 5;
      chef.velocityX= 0;
    }
    if(ingredientGroup.isTouching(chef))
    {
      score=score+10;
      ingredientGroup.destroyEach();
    }
    if(monkeyGroup.isTouching(chef))
    {
      gameState=END;
      
    }
    console.log(chef.y);
    camera.position.x=displayWidth/2;
   // camera.position.y=chef.y;
    spawnIngredients();
    spawnMonkey();
  }
  else if(gameState===END)
  {
  monkeyGroup.destroyEach();
  ingredientGroup.destroyEach();
  chef.destroy();
  textSize(100)
  text("YOU LOSE",displayWidth/2,displayHeight/2)
  }
  
  drawSprites();
}
function spawnIngredients()
{
  if(frameCount%200===0)
  {
    var rand=random(100,2000)
    in2 =createSprite(rand,-500,40,40);
    in2.velocityY=2;
    var r= Math.round(random(1,9));
    console.log(r)
    switch(r)
    {
      case 1:in2.addImage(ingredient1_img);
      in2.scale=0.6;
      break;
      case 2:in2.addImage(ingredient2_img);
      in2.scale=0.5;
      break;
      case 3:in2.addImage(ingredient3_img);
      in2.scale=0.5;
      break;
      case 4:in2.addImage(ingredient4_img);
      in2.scale=0.5;
      break;
      case 5:in2.addImage(ingredient5_img);
      in2.scale=0.5;
      break;
      case 6:in2.addImage(ingredient6_img);
      in2.scale=0.5;
      break;
      case 7:in2.addImage(ingredient7_img);
      in2.scale=0.2;
      break;
      case 8:in2.addImage(ingredient8_img);
      in2.scale=0.2;
      break;
      case 9:in2.addImage(ingredient9_img);
      in2.scale=0.5;
      break;
    }
    ingredientGroup.add(in2);
  }
}



function spawnMonkey()
{
  if(frameCount%100===0)
  {
    var rand=random(100,2000)
    in3 =createSprite(-200,rand,40,40);
    in3.velocityX=3;
    var r= Math.round(random(1,2));
    console.log(r)
    switch(r)
    {
      case 1:in3.addImage(monkey1_img);
      in3.scale=0.6;
      break;
      case 2:in3.addImage(monkey2_img);
      in3.scale=0.5;
      break;
   }
    monkeyGroup.add(in3);
  }
}