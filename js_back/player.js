class Character {
    constructor(x = 0, y = 0, vx = 0, vy = 0, ax = 0, ay = 0){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.ax = ax;
        this.ay = ay;
    }

    move(grid){
        let tempx = this.x, tempy = this.y;
        let checkradiusx = 6,checkradiusy = 6;
        
        this.x += this.vx;
        this.y += this.vy;
        
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


    
}