let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);


function emitWave(){
    var r = 5;
    var t = 50;
    var lw = 7;
    var tr = 1;

    function waveEmiter(){
        ctx1.clearRect(0,0,canvas.width,canvas.height);
        ctx1.beginPath();
        ctx1.arc(100,100,r,0,Math.PI*2);
        ctx1.strokeStyle = "white";
        ctx1.lineWidth = lw;
        ctx1.globalAlpha = tr;
        ctx1.stroke();
        ctx1.closePath();
        ctx1.beginPath();
        ctx1.arc(100,100,r+13,0,Math.PI*2);
        ctx1.stroke();
        ctx1.closePath();
        r += 2;
        lw -= 0.5;
        tr -= 0.1;
    }

    for (let i = 0; i < 20; i++) {
        setTimeout(waveEmiter,t);  
        t +=50;  
        }
}

emitWave();