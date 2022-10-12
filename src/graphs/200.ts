// Solution using iterative bfs
function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let islands = 0;
  
  const visited = new Set();

  for (let i = 0; i < rows; i++) {
      const coords = [];
      for (let j = 0; j < columns; j++) {
          coords.push(getCoord(i, j))
          if (grid[i][j] === "1" && !visited.has(getCoord(i, j))) {
              bfs(i, j);
              islands++;
          }
          
      }
  }
  
  function getCoord(x: number, y: number): number {
      return (x * columns) + y;
  }

  function bfs(r: number, c: number) {
    const queue: [number, number][] = [];
    queue.unshift([r, c])
  
    while(queue.length) {
      const [r, c] = queue.shift() as [number, number];
      visited.add(getCoord(r, c));

      for (let d of directions) {
        const x = r + d[0], y = c + d[1];
        if (!visited.has(getCoord(x, y)) && (0 <= x && x < rows) && (0 <= y && y < columns) && grid[x][y] === "1") {
          queue.unshift([x, y]);
        }
      }
    }
  }
  
  return islands;
};



// Solution using recursive bfs
// function numIslands(grid: string[][]): number {
//   const rows = grid.length;
//   const columns = grid[0].length;
//   const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
//   let islands = 0;
  
//   const visited = new Set();

//   for (let i = 0; i < rows; i++) {
//       const coords = [];
//       for (let j = 0; j < columns; j++) {
//           coords.push(getCoord(i, j))
//           if (grid[i][j] === "1" && !visited.has(getCoord(i, j))) {
//               visited.add(getCoord(i, j));
            
//               const queue: [number, number][] = [];
//               queue.unshift([i, j]);
//               bfs([...queue]);

//               islands++;
              
//           }
          
//       }
//   }
  
//   function getCoord(x: number, y: number): number {
//       return (x * columns) + y;
//   }

//   function bfs(queue: [number, number][]) {
//     if (queue.length === 0) return;
   
//     const [i, j] = queue.shift() as [number, number];
//     visited.add(getCoord(i, j));
    
//     if (grid[i][j] === "0") return;

//     for (let d of directions) {
//       const x = i + d[0], y = j + d[1];
//       if (!visited.has(getCoord(x, y)) && (0 <= x && x < rows) && (0 <= y && y < columns)) {
//         queue.unshift([x, y]);
//       }
//       bfs([...queue]);
//     }
//   }
  
//   return islands;
// };

console.log(numIslands([["1","0","1","1","1"],
                        ["1","0","1","0","1"],
                        ["1","1","1","0","1"]]));

