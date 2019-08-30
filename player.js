class Character {
    constructor(x = 0, y = 0, vx = 0, vy = 0, ax = 0, ay = 0){
        this.x = x;
        this.y = y;
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