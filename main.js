
let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;


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

const stage = new Polygon();
stage.init([
  [0, 80],
  [40, 80],
  [40, 0],
  [100, 0],
  [100, 100],
  [90, 100],
  [90, 20],
  [80, 20],
  [80, 100],
  [0, 100],
]);
render(CTX,stage);
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
var player2 = new Character(500,500);
function renderObject(){
      //ctx1.clearRect(0,0,canvas1.width,canvas1.height);
      ctx2.clearRect(0,0,canvas2.width,canvas2.height);
      ctx2.beginPath();
      ctx2.arc(player.x,player.y,5,0,Math.PI*2);
      ctx2.strokeStyle = "white";
      ctx2.lineWidth = 10;
      ctx2.stroke();
      ctx2.closePath();
}

function update(){
    player.x += player.vx;
    player.y += player.vy;
    // if (player.vx != 0 || player.vy != 0) {
    //   emitWave(player);
    // }
    // if(waveTime < 0){
    //   globalWave();
    //   waveTime = 25;  
    // }
    // waveTime--;
    // emitWave(100, 100);
    renderObject();
    //emitWave(500,500);
    requestAnimationFrame(update);
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