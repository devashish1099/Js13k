function Cell(x, y, width) {
  this.index = 1;
  this.x = x;
  this.y = y;
  this.width = width;

  //remove this
  this.drawCell = (ctx) => {
    ctx.fillStyle = 'grey';
    ctx.font = "8px Georgia";
    if(!this.index){
      ctx.fillRect(this.x, this.y, this.width, this.width);

    }
    // ctx.fillText(this.index, this.x + this.width / 2, this.y + this.width / 2);
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
  this.init = (gridArray)=>{
   let x = this.offsetX ;
   let y = this.offsetY ;

   for(let i = 0; i < this.rows; i++){
      for(let j = 0 ; j < this.cols; j++){

        this.cells[i][j] = new Cell(x, y, cellWidth);
        // console.log()
      if(gridArray[i][j]=='x')
        this.cells[i][j].index = 0 ;
        else
        this.cells[i][j].index = 1 ;
        x = x + cellWidth ;

        
      //   if(i==0 || i==11 || j==0 || j== 13){
      //     this.cells[i][j].index = 0 ;
      //   } 
      //   if(i>2 && j>2 && j<5){
      //     this.cells[i][j].index = 0 ;
      //   }
      //   if(i>2 && i<9 && j==7){
      //     this.cells[i][j].index = 0;
      //   }
      //   if(i<9 && j==10){
      //     this.cells[i][j].index = 0;
      //   }
      //   if(i<7 && j>10){
      //     this.cells[i][j].index = 0;
      //   }
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