const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");

const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;

CANVAS.width = GAME_WIDTH;
CANVAS.height = GAME_HEIGHT;
const  GAME_ARENA_OFFSETX = GAME_WIDTH/4;
const  GAME_ARENA_OFFSETY = GAME_HEIGHT/4;



CANVAS.style.background = "#000000";
CTX.strokeStyle = "#FFFFFF";
CTX.lineWidth = 8;
CTX.lineCap = "round";
CTX.lineJoin = "round";
const SCALE_X = 1;
const SCALE_Y = 1;  
const  CELL_WIDTH = 40;


