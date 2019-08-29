function handleKeyDown(e){
    switch(e.code){
        case "KeyW":

            break;
        case "KeyA" :
                
            break;
        case "KeyS" :

            break;
        case "KeyD" :

            break;
        case "Space" :

            break;
    }
}

function handleKeyUp(e){
    switch(e.code){
        case "KeyW" :

            break;
        case "KeyA" :

            break;
        case "KeyS" :

            break;
        case "KeyD" :

            break;
        case "Space" :

            break;
    }
}

window.addEventListener("keydown",function(e){
    this.handleKeyDown(e);
});

window.addEventListener("keyup",function(e){
    this.handleKeyUp(e);
});