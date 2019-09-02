function handleKeyDown(e){
    switch(e.code){
        case "KeyW":
                player.vy = -0.5;
            break;
        case "KeyA" :
                player.vx = -0.5;
            break;
        case "KeyS" :
                player.vy = 0.5;
            break;
        case "KeyD" :
                player.vx = 0.5;
            break;
        case "Space" :
                player2.wave = true;
            break;
    }
}

function handleKeyUp(e){
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
                player2.wave = false;
            break;
    }
}

window.addEventListener("keydown",function(e){
    this.handleKeyDown(e);
});

window.addEventListener("keyup",function(e){
    this.handleKeyUp(e);
});