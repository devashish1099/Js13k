

const loadingScreen = document.querySelector('.loading_screen'),
gameMenuScreen = document.querySelector('.game_menu_screen'),
storyScreen= document.querySelector('.story_screen'),
gameCanvasScreen = document.querySelector('.game_canvas'),
screens = [loadingScreen,gameMenuScreen,storyScreen,gameCanvasScreen],
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
  document.querySelector('.find_the_exit').style = "transform:translateY(-300vh) ";
  window.setTimeout(()=>{
    document.querySelector('.find_the_exit').style = "transform:translateY(-400vh)"
  },4000);
  window.setTimeout(()=>{
    document.querySelector('.traps').style = "transform:translateY(-400vh) "
  },4500);
  window.setTimeout(()=>{
    document.querySelector('.traps').style = "transform:translateY(-600vh) "
  },10000);
  window.setTimeout(()=>{
    document.querySelector('.fall_back').style = "transform:translateY(-500vh) "
  },11000);
  window.setTimeout(()=>{
    document.querySelector('.fall_back').style = "transform:translateY(-900vh) "
  },15000);
  window.setTimeout(()=>{
    document.querySelector('.game_canvas').style = "transform:translate(30vw,-580vh );opacity:1 "
    for(let i = 0 ; i<screens.length-1; i++)
    screens[i].style.opacity =0;
  },17000);
  



}

let canvas1 = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");
let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

canvas1.width = GAME_WIDTH;
canvas1.height = GAME_HEIGHT;
canvas2.width = GAME_WIDTH;
canvas2.height = GAME_HEIGHT;

let currentLevel = -1;
let time = 0;
const levels = [level1, level2, level3, level4]
var player;
var enemies = [];
var grid;


function renderObject() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.beginPath();
  ctx2.arc(player.x, player.y, 6, 0, Math.PI * 2);
  // ctx2.fillStyle = "white";
  ctx2.fill();
  ctx2.closePath();
}



function startLevel(level) {
  ctx2.fillStyle = "white";

  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  enemies.splice(0, enemies.length);

  waves = [];
  initGrid(level);
  let rows = level.rows;
  let cols = level.columns;
 
  grid = new Grid(40, 0, rows, cols, CELL_WIDTH);
  grid.init(level.grid);
  grid.draw(CTX);

  player = new Character(level.playerAt[0], level.playerAt[1]);

  for (let index = 0; index < level.enemiesAt.length; index++) {
    

    enemies.push(new Enemy(level.enemiesAt[index][0], level.enemiesAt[index][1]));
    enemies[index].normalPath = level.enemiesAt[index].slice();
    enemies[index].findNormalPath();

  }
}
currentLevel = 0;
startLevel(levels[currentLevel]);








function update() {

  if (keys.UP) {
    if (!keys.DOWN)
      player.vy = -PLAYER_VELOCITY;
  }

  if (keys.DOWN) {
    if (!keys.UP)
      player.vy = PLAYER_VELOCITY;
  }

  if (keys.LEFT) {
    if (!keys.RIGHT)
      player.vx = -PLAYER_VELOCITY;
  }

  if (keys.RIGHT) {
    if (!keys.LEFT)
      player.vx = PLAYER_VELOCITY;

  }
  if (keys.BOOST) {
    if (player.vx > 0)
      player.boostx = PLAYER_VELOCITY;
    if (player.vx < 0)
      player.boostx = -PLAYER_VELOCITY;
    if (player.vy > 0)
      player.boosty = PLAYER_VELOCITY;
    if (player.vy < 0)
      player.boosty = -PLAYER_VELOCITY;
  }


  player.move(grid);
  player.vx = 0;
  player.vy = 0;
  player.boostx = 0;
  player.boosty = 0;


  function restartLevel() {
    currentLevel = 0;
    startLevel(levels[currentLevel]);
  }

  function fallback(){
    ctx2.fillStyle = "grey";
    if(currentLevel > 0)
      currentLevel--;
    startLevel(levels[currentLevel]);
  }
  function disappearPlayer() {
    ctx2.fillStyle = "black";
  }
  for (enemyIndex in enemies) {
    if (player.shareSameCell(enemies[enemyIndex])) {
      ctx2.fillStyle = "red";
      setTimeout(disappearPlayer, 300);
      setTimeout(restartLevel, 1000);
    }
  }
  for (trapIndex in levels[currentLevel].trapsAt) {
    if (player.isAtCell(levels[currentLevel].trapsAt[trapIndex][0], levels[currentLevel].trapsAt[trapIndex][1])) {
      ctx2.fillStyle = "grey";
      fallback();
    }
  }
    renderObject();
    if (player.isAtCell(levels[currentLevel].exitAt[0], levels[currentLevel].exitAt[1])) {
      currentLevel++;
      currentLevel = currentLevel % levels.length;
      startLevel(levels[currentLevel]);

    }
  }

  var ct = 0;

  function globalWave() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

    for (let i = 0; i < waves.length; i++) {
      waves[i].waveEmiter();
      waves[i].wt++;
      if (waves[i].wt > 45) {
        waves[i].waveReset();

      }
    }

    if (ct > 45) {
      for (let i = 0; i < enemies.length; i++) {
        enemies[i].displacement();

      }
      initGrid(levels[currentLevel]);
      ct = 0;
    }
    ct++;


  }

  setInterval(globalWave, 1000 / 60);

  setInterval(update, 1000 / 40);
