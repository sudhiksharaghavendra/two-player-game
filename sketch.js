var hypnoticBall, database;
var position;
var form,player,game,gameState=0,playerCount=0

function setup(){
  canvas=createCanvas(1000,1000)
  database = firebase.database();
 game=new Game()
 game.getState()
 game.start() 
}

function draw(){
  background("white");
  
  
    drawSprites();
  
}

