class Character {
    constructor(x = 0, y = 0, vx = 0, vy = 0, ax = 0, ay = 0){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.ax = ax;
        this.ay = ay;
        this.r = 5;
        this.t = 50;
        this.lw = 7;
        this.tr = 1;
        this.i = 0;
        this.wx = this.x;
        this.wy = this.y;
        this.wt = 40;
        this.wave = false;
    }

    move(){
        this.position += this.velocity;
    }

    sprint(){

    }

    waveReset(){
        this.r = 5;
        this.t = 50;
        this.lw = 7;
        this.tr = 1;
        this.i = 0;
        this.wx = this.x;
        this.wy = this.y; 
        this.wt = 0;
    }

    waveEmiter(){
        //ctx1.clearRect(0,0,canvas1.width,canvas1.height);
        ctx1.beginPath();
        ctx1.arc(this.wx,this.wy,this.r,0,Math.PI*2);
        ctx1.strokeStyle = "white";
        ctx1.lineWidth = this.lw;
        ctx1.globalAlpha = this.tr;
        
        ctx1.stroke();
        ctx1.closePath();
        ctx1.beginPath();
        ctx1.arc(this.wx,this.wy,this.r+11,0,Math.PI*2);
        ctx1.stroke();
        ctx1.closePath();
        ctx1.beginPath();
        ctx1.arc(this.wx,this.wy,this.r+22,0,Math.PI*2);
        ctx1.stroke();
        ctx1.closePath();
        ctx1.beginPath();
        ctx1.arc(this.wx,this.wy,this.r,0,Math.PI*2);
        ctx1.stroke();
        ctx1.closePath();
        
        this.r += 1;
        this.lw -= 0.05;
        this.tr = this.tr / 1.05;
       // console.log(this.tr);
    }

    startEmiting(){
        waves.push(this);
    }

    stopEmiting(){
        let index = waves.indexOf(this);
        waves.splice(index,1);
    }
    
}