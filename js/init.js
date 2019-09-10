const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");

const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;

const GAME_ARENA_OFFSETX = GAME_WIDTH / 4;
const GAME_ARENA_OFFSETY = GAME_HEIGHT / 4;

const SCALE_X = 1;
const SCALE_Y = 1;
const CELL_WIDTH = 40;

let waves = [];
var PLAYER_VELOCITY = 1.2;
var PLAYER_MAX_VELOCITY = 2;

CANVAS.width = GAME_WIDTH;
CANVAS.height = GAME_HEIGHT;
CANVAS.style.background = "#000000";

CTX.strokeStyle = "#FFFFFF";
CTX.lineWidth = 8;
CTX.lineCap = "round";
CTX.lineJoin = "round";


// CTX.translate(CANVAS.width / 4, CANVAS.height / 4);