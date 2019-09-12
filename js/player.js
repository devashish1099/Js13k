class Character {
    constructor(x = 0, y = 0, vx = 0, vy = 0, ax = 0, ay = 0){
        this.x = x * CELL_WIDTH + CELL_WIDTH + CELL_WIDTH/2;
        this.y = y * CELL_WIDTH + CELL_WIDTH/2;
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
        this.row;
        this.col;
        this.boostx = 0;
        this.boosty = 0;
        this.upateCellPosition();
        this.footStepSound = new Audio('res/foot_steps0.mp3');
       
    }
    upateCellPosition(){
        this.col = Math.floor((this.x - CELL_WIDTH)/CELL_WIDTH);
        this.row = Math.floor((this.y)/CELL_WIDTH);

    }
    move(grid){

        let tempx = this.x,
        tempy = this.y;
        this.x += this.vx +  this.boostx;
        this.y += this.vy + this.boosty;
        let checkradiusx = 6,
        checkradiusy = 6;
        if(this.vx +  this.boostx==0)
        checkradiusx = 0;
        if(this.vy +  this.boosty==0)
        checkradiusy = 0;

        if(this.vx + this.boostx<0)
        checkradiusx = -6;
        if(this.vy+ this.boosty<0)
        checkradiusy = -6;
            
       

        if (grid.cells[Math.floor((this.y + checkradiusy)/40)][Math.floor((this.x-40 + checkradiusx)/40)].index == 0){
            this.x = tempx;
            this.y = tempy;
        }
        this.upateCellPosition();

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

    isAtCell(row, col){ 
        if(this.row == row && this.col == col){
            return true;
        }
        return false;
    }
    shareSameCell(player){
        return this.isAtCell(player.row, player.col);
    }
    


}