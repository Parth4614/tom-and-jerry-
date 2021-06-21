var bgImage,tom1Image,tom2Image,tom3Image,jerry1Image,jerrry2Image,jerry3Image
var tom,jerry
function preload() {
    //load the images here
bgImage=loadImage("images/garden.png")
tom1Image=loadAnimation("images/cat1.png")
tom2Image=loadAnimation("images/cat2.png","images/cat3.png")
tom3Image=loadAnimation("images/cat4.png")
jerry1Image=loadAnimation("images/mouse1.png")
jerry2Image=loadAnimation("images/mouse2.png","images/mouse3.png")
jerry3Image=loadAnimation("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600,20,20)
    tom.addAnimation("tomSleeping",tom1Image)
    tom.scale=0.2;
    
    jerry=createSprite(200,600,20,20)
    jerry.addAnimation("jerryStanding",jerry1Image)
    jerry.scale=0.15;
}

function draw() {

    background(bgImage);
    console.log(tom.x-jerry.x)
    console.log((tom.width-jerry.width)/2)
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0
    tom.addAnimation("tomLast",tom3Image)
    tom.x=300
    tom.scale=0.2
    tom.changeAnimation("tomLast")
    jerry.addAnimation("jerryLast",jerry3Image)
    jerry.scale=0.15
    jerry.changeAnimation("jerryLast")
    

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW)
{
    tom.velocityX=-4
    tom.addAnimation("tomRunning",tom2Image)
    tom.changeAnimation("tomRunning")
    jerry.addAnimation("jerryTeasing",jerry2Image)
    jerry.framDelay=25
    jerry.changeAnimation("jerryTeasing")
}

}
