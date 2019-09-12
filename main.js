
const loadingScreen = document.querySelector('.loading_screen'),
gameMenuScreen = document.querySelector('.game_menu_screen'),
storyScreen= document.querySelector('.story_screen'),
mainGameScreen = document.querySelector('.main_game_screen'),
gameCanvasScreen = document.querySelector('.game_canvas'),
screens = [loadingScreen,gameMenuScreen,storyScreen,mainGameScreen,gameCanvasScreen],
declineBtn = document.querySelector('.decline'),
accepBtn = document.querySelector('.accept'),
playBtn = document.querySelector('#img');
declineBtn.onclick = ()=>{
  declineBtn.innerHTML = 'Sorry, Button is not working';
  declineBtn.style = "background-color:red;color:black";
}

window.setTimeout(()=>{
   screens[0].style = "opacity:0";
   screens[1].style = "opacity:1; transform:translateY(-100vh)";
   document.querySelector('.play_text').style.WebkitAnimationPlayState = "running";} ,3000) ;

playBtn.onclick = ()=>{
  screens[1].style = "opacity:0";
  for(let i = 0 ; i< 6; i++)
  screens[2].children[i].style.WebkitAnimationPlayState = "running";
  screens[2].style = "transform:translateY(-200vh);opacity:1;display:block";
}
accepBtn.onclick = ()=>{
  screens[2].style = "opacity:0";
  screens[3].style = "opacity:1; transform:translateY(-300vh)";
  window.setTimeout(()=>{
    screens[3].children[0].style = "transform:translateX(-300vh)";
    console.log(screens[3].children[1]);
    screens[3].children[1].style = "transform:translateX(-300vh)";
  },2000) ;
  window.setTimeout(()=>{
    screens[3].children[1].style = "transform:translateX(-300vh)";
  },3000) ;
  window.setTimeout(()=>{
    screens[4].style = "opacity:1;transform:translateY(-400vh) ";

  },3500) ;


}


let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");

canvas1.width = GAME_WIDTH;
canvas1.height = GAME_HEIGHT;

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

canvas2.width = GAME_WIDTH;
canvas2.height = GAME_HEIGHT;


let waveTime = 100;
// function emitWave(x,y){
//     var r = 5;
//     var t = 50;
//     var lw = 7;
//     var tr = 1;
//     var i = 0;

//     function waveEmiter(){
//         ctx1.clearRect(0,0,canvas1.width,canvas1.height);
//         ctx1.beginPath();
//         ctx1.arc(x,y,r,0,Math.PI*2);
//         ctx1.strokeStyle = "white";
//         ctx1.lineWidth = lw;
//         ctx1.globalAlpha = tr;
//         ctx1.stroke();
//         ctx1.closePath();
//         ctx1.beginPath();
//         ctx1.arc(x,y,r+13,0,Math.PI*2);
//         ctx1.stroke();
//         ctx1.closePath();
//         r += 1;
//         lw -= 0.05;
//         tr -= 0.025;
//         if(i<40){
//           id = requestAnimationFrame(waveEmiter);
//           i++;
//         }
//     }

//     // for (let i = 0; i < 20; i++) {
//     //     setTimeout(waveEmiter,t);  
//     //     t +=50;  
//     //     }
    
//     var id = requestAnimationFrame(waveEmiter);
// }


function Cell(x, y, width){
  this.index = 1;
  this.x = x;
  this.y = y;
  this.width = width;

  this.drawCell = (ctx)=>{
   ctx.fillStyle = 'red';
   ctx.font = "8px Georgia";
   ctx.fillText(this.index, this.x + this.width/2, this.y + this.width/2);
   ctx.strokeRect(this.x, this.y, this.width,this.width);  
  }
}

function Grid(offsetX, offsetY, rows, cols, cellWidth){
  this.rows = rows;
  this.cols = cols;
  this.cellWidth = cellWidth;
  this.cells  = [this.rows];
  this.offsetX = offsetX;
  this.offsetY  = offsetY;
  for(let  i = 0 ; i< this.rows ; i++){
   this.cells[i] = [this.cols];
  }
  this.init = ()=>{
   let x = this.offsetX ;
   let y = this.offsetY ;

   for(let i = 0; i < this.rows; i++){
      for(let j = 0 ; j < this.cols; j++){
        this.cells[i][j] = new Cell(x, y, cellWidth);
        x = x + cellWidth ;
        if(i==0 || i==11 || j==0 || j== 13){
          this.cells[i][j].index = 0 ;
        } 
        if(i>2 && j>2 && j<5){
          this.cells[i][j].index = 0 ;
        }
        if(i>2 && i<9 && j==7){
          this.cells[i][j].index = 0;
        }
        if(i<9 && j==10){
          this.cells[i][j].index = 0;
        }
        if(i<7 && j>10){
          this.cells[i][j].index = 0;
        }
      }
      x = offsetX; 
      y = y + cellWidth ;
    } 

  }
  this.draw = (ctx)=>{
    ctx.strokeStyle = "white";
    for(let i = 0; i < this.rows; i++){
      for(let j = 0 ; j< this.cols; j++){
        this.cells[i][j].drawCell(ctx);
      }

    }
  }

}
// var  x = innerWidth/4,
// y = innerHeight/4,
// finalX = 100*SCALE_X,
// finalY = 100*SCALE_Y,
// rows = Math.floor(finalY/),
// cols = Math.floor(finalX/20);
let  rows = 12;
let cols = 14;
const grid =  new Grid( 40, 0, rows , cols , CELL_WIDTH) ;
grid.init();
//grid.draw(CTX);


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


render(CTX,stage1);
render(CTX,stage2);
let time = 0;

const footStepSound = new Audio('res/foot_steps0.mp3');
const footStepSound1 = new Audio('res/foot_steps1.mp3');
footStepSound.onloadeddata =()=>{
  console.log("yup");
  }
  
footStepSound1.onloadeddata =()=>{
  console.log("yup");
}

document.getElementById("btn").onclick = function(){
  playFootStep();
  window.setInterval(playFootStep, 1000/60);
  time += 0.1;
}

function playFootStep(){
  let v1 = Math.abs(Math.sin(time));
  let v2 = Math.abs(Math.sin(time + 0.1));
  playSound(footStepSound,v1);
  playSound(footStepSound1,v2);
}

var player = new Character (100,100);

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
    //emitWave(500,500);
    requestAnimationFrame(update);
    grid.draw(ctx1);
}

requestAnimationFrame(update);

function globalWave(){
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);  

  // if (player.wt>45) {
  //   player.waveReset();
  //   player.wt = 0;
  // }

  // player.wt++;

  // //player.waveEmiter();

  // // if (player.vx != 0 || player.vy != 0) {
  // //   player.waveEmiter();
  // //   playFootStep(); 
  // //   player.wt++;
  // // }


  // if (player2.wt>45) {
  //   player2.waveReset();
  //   player2.wt = 0;
  // }

  // player2.wt++;

  //player2.waveEmiter();  

  for (let i = 0; i < waves.length; i++) {
    waves[i].waveEmiter();
    waves[i].wt++;
    if (waves[i].wt > 45) {
      waves[i].waveReset();
    } 
  }  
  
  requestAnimationFrame(globalWave);

}

globalWave();

//setInterval(globalWave,1000);