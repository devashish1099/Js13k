const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");

CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;
CANVAS.style.width = "100vw";
CANVAS.style.height = "100vh";

CANVAS.style.background = "#000000";
CTX.strokeStyle = "#FFFFFF";
CTX.lineWidth = 10;
CTX.lineCap = "round";
CTX.lineJoin = "round";

// CTX.translate(CANVAS.width / 4, CANVAS.height / 4);
