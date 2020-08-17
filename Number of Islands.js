/**
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 
 */
 
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    if(!grid || grid.length === 0)
        return 0;
    
    let numIslands = 0;
    const rows = grid.length;
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === '1'){
                numIslands++;
                markCurrentIsland(grid, i, j);
            }
        }
    }
    return numIslands;
};

const markCurrentIsland = (grid, i, j) => {
    if(i < 0 || i > grid.length || j < 0 || j > grid[i]?.length || grid[i]?.[j] !== '1'){
        return;
    }
    
    grid[i][j] = '2';
    
    markCurrentIsland(grid, i-1, j); //UP
    markCurrentIsland(grid, i+1, j); //DOWN
    markCurrentIsland(grid, i, j-1); //LEFT
    markCurrentIsland(grid, i, j+1); //RIGHT
}
