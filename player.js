class Character {
    constructor(x = 0, y = 0, vx = 0, vy = 0, ax = 0, ay = 0){
        this.x = 0;
        this.y = 0;
        this.vx = vx;
        this.vy = vy;
        this.ax = ax;
        this.ay = ay;
    }

    move(){
        this.position += this.velocity;
    }

    sprint(){

    }
    
}