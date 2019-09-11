/*
    first use : initGrid(level)
    then : findPath(x1, y1, x2, y2)
        to get an array constitng of linked path positions from "finish to start"

    **BUG : Doesnt work for right top grids Use getGraphGridArray(graphGrid) to see where the algo breaks**
*/


let graphGrid = [];
const XDir = [1, 0, -1, 0];
const YDir = [0, 1, 0, -1];

let priorityQueue = [];


//Class to store Node data
class Graph_Node {
    constructor(row, column, distanceFromSource = -1, parentNode) {
        this.row = row;
        this.column = column;
        this.distanceFromSource = distanceFromSource;
        this.parentNode = parentNode;
        this.visited = false;
        this.walkable = false;
    }

}
//Checks whether the cell is inside the grid
function isInside(r, c, graphGrid) {
    if (r >= 0 && r < graphGrid.length && c >= 0 && c < graphGrid[0].length)
        return true;
    return false;

}

function isWalkable(r, c){
    return graphGrid[r][c].walkable;
}

//initialise the global grid array
function initGrid(level) {
    let row = level.rows;
    let column = level.columns;
    graphGrid = [];

    for (let i = 0; i < row; i++) {
        graphGrid[i] = [];
        for (let j = 0; j < column; j++) {
            graphGrid[i][j] = new Graph_Node(i, j);
            if(level.grid[i][j] == '.' )
                graphGrid[i][j].walkable = true;
            if(level.grid[i][j] == 'x' || level.grid[i][j] == 'X' )
                graphGrid[i][j].walkable = false;

        }
    }

}

function findPath(r1, c1, r2, c2) {
    let startNode = graphGrid[r1][c1];
    let destinationNode = graphGrid[r2][c2];

    startNode.distanceFromSource = 0;
    startNode.visited = true;

    priorityQueue = [];
    djikstrasAlgo(r1, c1, r2, c2);

    let path = [];
    path[0] = [];
    path[0][0] = destinationNode.row;
    path[0][1] = destinationNode.column;
    
    for(let i = destinationNode.distanceFromSource, j = 1; i > 0 ; i--,j++){
        path[j] = [];
        let neighbourArray = getNeighbours(path[j - 1][0], path[j - 1][1], 0);
        for(neighbourIndex in neighbourArray){
            if(neighbourArray[neighbourIndex].distanceFromSource == i - 1){
                path[j][0] = neighbourArray[neighbourIndex].row;
                path[j][1] = neighbourArray[neighbourIndex].column;
                
                break;
            }
        }
    }
    return path;
}
function getNeighbours(r, c , visitCheck = 1){
    let neighbhourArray = [];
    for(let i = 0; i < 4; i++){
        r1 = r + XDir[i];
        c1 = c + YDir[i];
        if(isInside(r1, c1, graphGrid) && !(!graphGrid[r1][c1].visited == false && visitCheck)){
            if(isWalkable(r1,c1))
                neighbhourArray.push(graphGrid[r1][c1]);
        }
            
    }
    return neighbhourArray;
}

function djikstrasAlgo(r, c, rd, cd){
    let start = graphGrid[r][c];
    priorityQueue.push(start);
    start.visited = true;

    while(priorityQueue.length > 0){
        let cell = priorityQueue.splice(0,1)[0];
        if(cell.row == rd && cell.column == cd) {return 1};
        cell.visited = true;
        updateNeighbours(cell.row, cell.column); 
        let neighbhourArray = getNeighbours(cell.row, cell.column);
        for(cellIndex in neighbhourArray){
            priorityQueue.push(neighbhourArray[cellIndex]);
        }
    }

    return 0;
}
//returns a 2d array for distance visualisation
function getGraphGridArray(graphGrid) {
        let grid = [];
        for (let i = 0; i < graphGrid.length; i++) {
            grid[i] = [];
            for (let j = 0; j < graphGrid[0].length; j++) {
                grid[i][j] = graphGrid[i][j].distanceFromSource;
            }
        }
        return grid;
}


//checks whether the grid is walkable
function isBlocked(r, c) {
    return !isWalkable(r, c);
}
//Updates the distance fo the neighbhour grids
function updateNeighbours(r, c) {
    let currentNode = graphGrid[r][c];
    let neighbourNode, r1, c1;
    for (let i = 0; i < 4; i++) {
        r1 = r + XDir[i];
        c1 = c + YDir[i];

        if (isInside(r1, c1, graphGrid) && !isBlocked(r1, c1)) {
            neighbourNode = graphGrid[r1][c1];
            if (neighbourNode.distanceFromSource > currentNode.distanceFromSource + 1 || neighbourNode.distanceFromSource < 0 && neighbourNode.visited == false) {
                neighbourNode.distanceFromSource = currentNode.distanceFromSource + 1;
                neighbourNode.parentNode = currentNode;
            }
        }
    }
}

// Example demonstration(Uncomment to see it in action)
// const level0 = {
//     grid :  [
//                 ['x' , 'x' , 'x' , 'x' , 'x' , 'x' , 'x' , 'x' , 'x' , 'x' ],
//                 ['x' , '.' , '.' , 'x' , 'x' , 'x' , 'x' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , 'x' , 'x' , 'x' , 'x' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , 'x' , 'x' , 'x' , 'x' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , 'x' , 'x' , 'x' , 'x' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , 'x' , 'x' , 'x' , 'x' , '.' , '.' , 'x' ],
//                 ['x' , '.' , '.' , 'x' , 'X' , 'x' , 'x' , '.' , '.' , 'x' ],
//                 ['x' , 'x' , 'x' , 'x' , 'x' , 'x' , 'x' , 'x' , 'x' , 'x' ],
//             ],
//     rows : 16,
//     columns : 10,
//     playerAt : [1, 1],
//     exitAt : [1, 8],
//     enemies : [
//                 [1, 7, 14, 7],
//                 [11, 4, 11, 7]
//     ],
// };

// initGrid(level0);
// console.log(findPath(1,1, 8, 2));