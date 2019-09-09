
let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");
let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

canvas1.width = GAME_WIDTH;
canvas1.height = GAME_HEIGHT;
canvas2.width = GAME_WIDTH;
canvas2.height = GAME_HEIGHT;


// var  x = innerWidth/4,
// y = innerHeight/4,
// finalX = 100*SCALE_X,
// finalY = 100*SCALE_Y,
// rows = Math.floor(finalY/),
// cols = Math.floor(finalX/20);
initGrid(level1);
let  rows = level1.rows;
let cols = level1.columns;
// console.log(rows,cols)
const grid =  new Grid( 40, 0, rows , cols , CELL_WIDTH) ;
grid.init(level1.grid);
grid.draw(CTX);

const stage1 = new Polygon();
stage1.init([ 
  [80,40],
  [80, 440],
  [160, 440],
  [160, 120],
  [240, 120],
  [240, 440],
  [560, 440],
  [560, 280],
  [480, 280],
  [480, 360],
  [440, 360],
  [440, 40]
]);

const stage2 = new Polygon();
stage2.init([
  [320,120],
  [320, 360],
  [360, 360],
  [360, 120]
]);


// render(CTX,stage1);
// render(CTX,stage2);

//let time = 0;

// const footStepSound = new Audio('res/foot_steps0.mp3');
// const footStepSound1 = new Audio('res/foot_steps1.mp3');

// document.getElementById("btn").onclick = function(){
//   playFootStep();
//   window.setInterval(playFootStep, 1000/60);
//   time += 0.1;
// }

// function playFootStep(){
//   let v1 = Math.abs(Math.sin(time));
//   let v2 = Math.abs(Math.sin(time + 0.1));
//   playSound(footStepSound,v1);
//   playSound(footStepSound1,v2);
// }

var player = new Character (100, 100);
var enemy = new Enemy(100,100);
enemy.alertPath = findPath(1,1, 8, 2) ;
enemy.move();

function renderObject(){
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);
    ctx2.beginPath();
    ctx2.arc(player.x,player.y,6,0,Math.PI*2);
    ctx2.fillStyle = "white";
    ctx2.fill();
    ctx2.closePath();
}

function update(){
    player.move(grid);
    renderObject();
    requestAnimationFrame(update);
    
}

var ct = 0;

function globalWave(){
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);  

  for (let i = 0; i < waves.length; i++) {
    waves[i].waveEmiter();
    waves[i].wt++;
    if (waves[i].wt > 45) {
      waves[i].waveReset();
    } 
  }  

  if (ct > 100) {
    enemy.move();
    ct = 0;
  }
  //console.log(ct);
  ct++; 

  requestAnimationFrame(globalWave);

}

globalWave();

requestAnimationFrame(update);
//enemy.startEmiting();
//player.startEmiting();