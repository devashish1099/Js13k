
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
                keys.UP = true;
            break;
        case "KeyA" :
                keys.LEFT= true;
            break;
        case "KeyS" :
                keys.DOWN = true;
            break;
        case "KeyD" :
               keys.RIGHT = true;
            break;
        case "Space" :
              keys.BOOST = true;
            break;
    }
}

function handleKeyUp(e){
    switch(e.code){
        case "KeyW" :
                keys.UP = false;
            break;
        case "KeyA" :
                keys.LEFT = false;
            break;
        case "KeyS" :
                keys.DOWN = false;
            break;
        case "KeyD" :
                keys.RIGHT= false;
            break;
        case "Space" :
             keys.BOOST = false;

            break;
    }
}

window.addEventListener("keydown",function(e){
    this.handleKeyDown(e);
});

window.addEventListener("keyup",function(e){
    this.handleKeyUp(e);
});


