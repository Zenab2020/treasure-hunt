var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
//var distance = 0;
var database;

var form, player, game;

var pirate1,pirate2;

var pirates,island;

function preload(){
  pirate1img=loadImage("Captain1.jpg");
  pirate2img=loadImage("Captain 2.png")
  islandimg=loadImage("island.jpg")
  backgroundimg=loadImage("pirates.jpg")
}

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundimg)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
