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
        this.normalPath = [];
        this.alertPath = [];
        this.isMoving = false;
        this.i = 1;
    }

    move(grid){
        let tempx = this.x,
        tempy = this.y;
        this.x += this.vx;
        this.y += this.vy;
        let checkradiusx = 6,
        checkradiusy = 6;
        if(this.vx==0)
        checkradiusx = 0;
        if(this.vy==0)
        checkradiusy = 0;

        if(this.vx<0)
        checkradiusx = -6;
        if(this.vy<0)
        checkradiusy = -6;
            
       

        if (grid.cells[Math.floor((this.y + checkradiusy)/40)][Math.floor((this.x-40 + checkradiusx)/40)].index == 0){
            this.x = tempx;
            this.y = tempy;
        }

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

    displacement(){
        if(this.i == (this.alertPath.length-1)){
            this.i=1; 
         }
         console.log(this.i-1);
         
        var dx = this.alertPath[this.i][0] * 10 - this.alertPath[this.i - 1][0] * 10;
        var dy = this.alertPath[this.i][1] * 10 - this.alertPath[this.i - 1][1] * 10;

        this.enemyMove(dx,dy);

        this.i++;
        //console.log(this.i);
        
       // console.log(dx,dy);
            
         
        }

    enemyMove(dx,dy){
        // if(this.i == (this.alertPath.length-1)){
        //    this.i=0; 
        // }
        //     var dx = this.alertPath[this.i][0] * 10 - this.x;
        //     var dy = this.alertPath[this.i][1] * 10 - this.y;
        //     // if (this.x != this.alertPath[this.i][0] && this.y != this.alertPath[this.i][1] && !this.isMoving) {
            //     this.startEmiting();
            //     this.isMoving = true; 
            //     console.log("hey1");
            // }
            // if (this.x == this.alertPath[this.i][0] && this.y == this.alertPath[this.i][1] && this.isMoving ) {
            //     this.stopEmiting();
            //     this.isMoving = false; 
            //     console.log("hey2"); 
            // }


            this.x += dx;
            this.y += dy;

            //this.alertPath.splice[0,1];
            // this.i++;
            // console.log(dx,dy);
            
    }


    
}