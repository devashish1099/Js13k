
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
