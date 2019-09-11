class Enemy extends Character {
    constructor(x = 0, y = 0, vx = 0, vy = 0, ax = 0, ay = 0){
        super(x , y, vx, vy, ax, ay);
       
        this.normalPath = [];
        this.alertPath = [];
        this.isMoving = false;
        this.alertPathIndex = 1;
        this.startEmiting();
    }

    displacement(){
        if(this.alertPathIndex > (this.alertPath.length - 1)){
            this.alertPathIndex=1; 
         }
        // console.log(this.alertPathIndex);
        let dx = (this.alertPath[this.alertPathIndex][1]  - this.alertPath[this.alertPathIndex - 1][1]);
        let dy = (this.alertPath[this.alertPathIndex][0]  - this.alertPath[this.alertPathIndex - 1][0]);

        this.move(dx,dy);
        // console.log(dx, dy);
        this.alertPathIndex++;
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

             
            
            this.x += dx * CELL_WIDTH;
            this.y += dy * CELL_WIDTH;

            //this.alertPath.splice[0,1];
            // this.i++;
            // console.log(dx,dy);
            
    }
}