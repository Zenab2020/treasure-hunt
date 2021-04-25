class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    pirate1=createSprite(100,200);
    pirate1.addImage("pirate1",pirate1img)
    pirate2=createSprite(200,200); 
    pirate2.addImage("pirate2",pirate2img) 
   pirates=[pirate1,pirate2];
  }
  
  play(){
    form.hide();
     
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(islandimg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      
      var index = 0;
var x = 150;
var y;
      

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        
        //use data form the database to display the pirates in y direction
        y = displayHeight - allPlayers[plr].distance;
        pirates[index-1].x = x;
        pirates[index-1].y = y;
       

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          
          camera.position.x = displayWidth/2;
          camera.position.y = pirates[index-1].y;
        }
       
        
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 4000){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
