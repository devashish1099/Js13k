
const keys = { 
     UP:false,
     DOWN:false,
     LEFT:false,
     RIGHT:false,
     BOOST:false
}
function handleKeyDown(e){
    
    switch(e.code){
        case "KeyW":
                // player.vy = -PLAYER_VELOCITY;
                keys.UP = true;
            break;
        case "KeyA" :
                // player.vx = -PLAYER_VELOCITY;
                keys.LEFT= true;
            break;
        case "KeyS" :
                // player.vy = PLAYER_VELOCITY;
                keys.DOWN = true;
            break;
        case "KeyD" :
               keys.RIGHT = true;
                // player.vx = PLAYER_VELOCITY;
            break;
        case "Space" :
              keys.BOOST = true;
                // if (player.vx>0) {
                //     player.vx = PLAYER_MAX_VELOCITY ;
                // };
                // if (player.vx<0){
                //     player.vx = -PLAYER_MAX_VELOCITY ;
                // };
                // if(player.vy>0){
                //     player.vy = PLAYER_MAX_VELOCITY ;
                // };
                // if(player.vy<0){
                //     player.vy = -PLAYER_MAX_VELOCITY ;
                // }
            break;
    }
}

function handleKeyUp(e){
    console.log(e.code);
    switch(e.code){
        case "KeyW" :
                // player.vy = 0;
                keys.UP = false;
            break;
        case "KeyA" :
                // player.vx = 0;
                keys.LEFT = false;
            break;
        case "KeyS" :
                // player.vy = 0;
                keys.DOWN = false;
            break;
        case "KeyD" :
                // player.vx = 0;
                keys.RIGHT= false;
            break;
        case "Space" :
             keys.BOOST = false;

            // if (player.vx>0) {
            //     player.vx = PLAYER_VELOCITY ;
            // };
            // if (player.vx<0){
            //     player.vx = -PLAYER_VELOCITY ;
            // };
            // if(player.vy>0){
            //     player.vy = PLAYER_VELOCITY ;
            // };
            // if(player.vy<0){
            //     player.vy = -PLAYER_VELOCITY ;
            // }
            break;
    }
}

window.addEventListener("keydown",function(e){
    this.handleKeyDown(e);
});

window.addEventListener("keyup",function(e){
    this.handleKeyUp(e);
});


