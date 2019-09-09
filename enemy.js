class Enemy extends Character {
    constructor(){
        super();
        this.normalPath = [];
        this.alertPath = [];
        this.isMoving = false;
    }

    move(){
        if (this.x != this.alertPath[0].x && this.y != this.alertPath[0].y && !this.isMoving) {
            this.startEmiting();
            this.isMoving = true; 
        }
        if (this.x == this.alertPath[0].x && this.y == this.alertPath[0].y && this.isMoving) {
            this.stopEmiting();
            this.isMoving = false; 
        }
        this.x = alertPath[0].x;
        this.y = alertPath[0].y;

        this.alertPath.splice[0,1];
    }
}