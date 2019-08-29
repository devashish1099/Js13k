const SCALE_X = (1/2) * window.innerWidth / 100;
const SCALE_Y = (1/2) * window.innerHeight / 100;
const OFFSET_X = window.innerWidth / 4;
const OFFSET_Y = window.innerHeight / 4;
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Line{
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;
    }
}

class Polygon{
    constructor(){
        this.points = [];
    }
    init(pointsArr){
      let self = this;
      pointsArr.forEach( function(point){
        let p = new Point(point[0], point[1]);
        self.points.push(p);
      });
    }
}

function render(ctx, polygon){

    ctx.beginPath();
    ctx.moveTo( SCALE_X * polygon.points[0].x + OFFSET_X, SCALE_Y * polygon.points[0].y + OFFSET_Y);
    for(let i = 1; i < polygon.points.length; i++){
        ctx.lineTo( SCALE_X * polygon.points[i].x + OFFSET_X, SCALE_Y * polygon.points[i].y + OFFSET_Y);
    }
    ctx.closePath();
    ctx.stroke();
}
