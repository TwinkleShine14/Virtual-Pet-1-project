var dog
var happyDog
var database
var foodS
var foodstock

function preload()
{
	dog.loadImage("dogImg.png/images")
  happyDog.loadImage("dogImg1.png/images")
}

function setup() {
	createCanvas(500, 500);
  
  dog1= createSprite(100,100,5,5)
  dog1.addImage(dog)

  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {  

  background (46,139,87)

  if(keyWentDown (UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy)
}

  drawSprites();
  
  textSize= 20
  fill("red")
  text.display("Note: Press UP_ARROW key To Feed Drago Milk!")
}

function readStock (data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({Food:x})
}

