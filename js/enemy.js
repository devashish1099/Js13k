class Enemy extends Character {
    constructor(x = 0, y = 0, vx = 0, vy = 0, ax = 0, ay = 0){
        super(x , y, vx, vy, ax, ay);
        this.normalPath = [];
        this.alertPath = [];
        this.isMoving = false;
        this.i = 1;
    }

    displacement(){
        if(this.i == (this.alertPath.length-1)){
            this.i=1; 
         }
        var dx = this.alertPath[this.i][0] * 10 - this.alertPath[this.i - 1][0] * 10;
        var dy = this.alertPath[this.i][1] * 10 - this.alertPath[this.i - 1][1] * 10;

        this.move(dx,dy);

        this.i++;
        console.log(dx,dy);
            
         
        }

    move(dx,dy){
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