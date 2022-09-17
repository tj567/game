var selectroom = 0
var player
var isMoving = false
var gameState="wait"

function preload(){

    playerImg =loadImage('player_stand.png')
    

   room1img=loadImage("room1.png") 
   room2img=loadImage("room2.png") 
 //  room3img=loadImage() 
   //room4img=loadImage() 
 //  room5img=loadImage() 

}

function setup(){
    createCanvas(windowWidth, windowHeight)

    player = createSprite(width/2,height/2,20,20)
    player.shapeColor="red"
   // player.addImage(playerImg)
   playerImg.depth = 2

}

function draw(){
   if(gameState==="wait"){
    background(0)}

    if (gameState==="play"){
   
 if(keyDown("LEFT_ARROW")){
    player.x -= 5
    //isMoving = true
    console.log("hi")  
 }
 if(keyDown("RIGHT_ARROW")){
    player.x += 5
    //isMoving = true
    console.log("hi1")

 }

 if(keyDown('DOWN_ARROW')){
    player.y += 5
    //isMoving = true
    console.log("hi2")

 }

 if(keyDown('UP_ARROW')){
    player.y -= 5
   // isMoving = true
   console.log("hi3")

 }

 //if(isMoving == true){
   // player.changeAnimation('walking')
 //}

}
if(keyDown("Space") && selectroom==0){

   rooms()
   selectroom += 1
   gameState="play"
}
drawSprites()

   }


function rooms(){
var room= createSprite(width/2,height/2)
var rand=Math.round(random(1,2))

switch(rand){

case 1: room.addImage(room1img)
room.scale=1.8
break;

case 2: room.addImage(room2img)
room.scale=1.8

break;

/*case 3: room.addImage("")
break;

case 4: room.addImage("")
break;

case 5: room.addImage("")
break;*/

default:break;

}

room.depth=player.depth
player.depth +=1


}