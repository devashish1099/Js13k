let waveTime = 100;

function emitWave(x,y){
    let r = 5,
        t = 50,
        lw = 7,
        tr = 1,
        i = 0,

    function waveEmiter(){
        ctx1.clearRect(0,0,canvas1.width,canvas1.height);
        ctx1.beginPath();
        ctx1.arc(x,y,r,0,Math.PI*2);
        ctx1.strokeStyle = "white";
        ctx1.lineWidth = lw;
        ctx1.globalAlpha = tr;
        ctx1.stroke();
        ctx1.closePath();
        ctx1.beginPath();
        ctx1.arc(x,y,r+13,0,Math.PI*2);
        ctx1.stroke();
        ctx1.closePath();
        r += 1;
        lw -= 0.05;
        tr -= 0.025;
        if(i<40){
          id = requestAnimationFrame(waveEmiter);
          i++;
        }
    }

    // for (let i = 0; i < 20; i++) {
    //     setTimeout(waveEmiter,t);  
    //     t +=50;  
    //     } 
    var id = requestAnimationFrame(waveEmiter);
}

