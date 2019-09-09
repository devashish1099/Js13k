function handleKeyDown(e){
    
    switch(e.code){
        case "KeyW":
                player.vy = -PLAYER_VELOCITY;
            break;
        case "KeyA" :
                player.vx = -PLAYER_VELOCITY;
            break;
        case "KeyS" :
                player.vy = PLAYER_VELOCITY;
            break;
        case "KeyD" :
                player.vx = PLAYER_VELOCITY;
            break;
        case "Space" :
                if (player.vx>0) {
                    player.vx = PLAYER_MAX_VELOCITY ;
                };
                if (player.vx<0){
                    player.vx = -PLAYER_MAX_VELOCITY ;
                };
                if(player.vy>0){
                    player.vy = PLAYER_MAX_VELOCITY ;
                };
                if(player.vy<0){
                    player.vy = -PLAYER_MAX_VELOCITY ;
                }
            break;
    }
}

function handleKeyUp(e){
    console.log(e.code);
    switch(e.code){
        case "KeyW" :
                player.vy = 0;
            break;
        case "KeyA" :
                player.vx = 0;
            break;
        case "KeyS" :
                player.vy = 0;
            break;
        case "KeyD" :
                player.vx = 0;
            break;
        case "Space" :
            if (player.vx>0) {
                player.vx = PLAYER_VELOCITY ;
            };
            if (player.vx<0){
                player.vx = -PLAYER_VELOCITY ;
            };
            if(player.vy>0){
                player.vy = PLAYER_VELOCITY ;
            };
            if(player.vy<0){
                player.vy = -PLAYER_VELOCITY ;
            }
            break;
    }
}

window.addEventListener("keydown",function(e){
    this.handleKeyDown(e);
});

window.addEventListener("keyup",function(e){
    this.handleKeyUp(e);
});