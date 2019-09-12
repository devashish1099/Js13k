
const OFFSET_X = window.innerWidth / 4;
const OFFSET_Y = window.innerHeight / 4;

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
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
    ctx.moveTo( SCALE_X * polygon.points[0].x, SCALE_Y * polygon.points[0].y);
    for(let i = 1; i < polygon.points.length; i++){
        ctx.lineTo( SCALE_X * polygon.points[i].x, SCALE_Y * polygon.points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
}
