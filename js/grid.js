function Cell(x, y, width) {
  this.index = 1;
  this.x = x;
  this.y = y;
  this.width = width;

  //remove this
  this.drawCell = (ctx) => {
    ctx.fillStyle = 'red';
    ctx.font = "8px Georgia";
    ctx.fillText(this.index, this.x + this.width / 2, this.y + this.width / 2);
    ctx.strokeRect(this.x, this.y, this.width, this.width);
  }
}


class Grid{


  constructor(offsetX, offsetY, rows, cols, cellWidth) {
    this.rows = rows;
    this.cols = cols;
    this.cellWidth = cellWidth;
    this.cells = [this.rows];
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  
    for (let i = 0; i < this.rows; i++) {
      this.cells[i] = [this.cols];
    }
  }
 

  init(){
    let x = this.offsetX;
    let y = this.offsetY;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.cells[i][j] = new Cell(x, y, cellWidth);
        x = x + cellWidth;
        if (i == 0 || i == 11 || j == 0 || j == 13) {
          this.cells[i][j].index = 0;
        }
        if (i > 2 && j > 2 && j < 5) {
          this.cells[i][j].index = 0;
        }
        if (i > 2 && i < 9 && j == 7) {
          this.cells[i][j].index = 0;
        }
        if (i < 9 && j == 10) {
          this.cells[i][j].index = 0;
        }
        if (i < 7 && j > 10) {
          this.cells[i][j].index = 0;
        }
      }
      x = offsetX;
      y = y + cellWidth;
    }

  }
  this.draw = (ctx) => {
    ctx.strokeStyle = "white";
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.cells[i][j].drawCell(ctx);
      }

    }
  }

}