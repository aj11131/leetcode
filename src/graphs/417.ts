// Find all cells with paths to atl and all cells with paths to pac then compare sets and return coords with paths to both
function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;

  const atl = new Set<string>();
  const pac = new Set<string>();

  function dfs(r: number, c: number, visit: Set<string>, prevHeight: number) {
    if (
      visit.has(JSON.stringify([r, c])) ||
      r < 0 ||
      c < 0 ||
      r === rows ||
      c === cols ||
      heights[r][c] < prevHeight
    ) {
      return;
    }
    visit.add(JSON.stringify([r, c]));
    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }

  let results = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac.has(JSON.stringify([r, c])) && atl.has(JSON.stringify([r, c]))) {
        results.push([r, c]);
      }
    }
  }

  return results;
}

// Check if each cell has a path to both oceans using BFS save results of search in map
// function pacificAtlantic(heights: number[][]): number[][] {
//   let results: number[][] = [];
//   let directions = [
//     [1, 0],
//     [0, 1],
//     [-1, 0],
//     [0, -1],
//   ];

//   // store the grids that we have already run bfs on and whether or not they have a path to either ocean
//   const grids = new Map<string, { a: boolean; p: boolean }>();

//   const queue = [];

//   for (let r = 0; r < heights.length; r++) {
//     for (let c = 0; c < heights[r].length; c++) {
//       queue.push([r, c]);

//       let routeToP = false;
//       let routeToA = false;

//       const visited = new Set<string>();

//       while (queue.length) {
//         const [r, c] = queue.shift() as number[];

//         if (visited.has(JSON.stringify([r, c]))) continue;

//         if (grids.has(JSON.stringify([r, c]))) {
//           const grid = grids.get(JSON.stringify([r, c]));

//           if (grid?.a) routeToA = true;
//           if (grid?.p) routeToP = true;

//           continue;
//         }

//         let touchesP =
//           heights[r - 1]?.[c] === undefined ||
//           heights[r]?.[c - 1] === undefined;
//         let touchesA =
//           heights[r + 1]?.[c] === undefined ||
//           heights[r]?.[c + 1] === undefined;

//         if (touchesP) routeToP = true;
//         if (touchesA) routeToA = true;

//         let height = heights[r]?.[c] ?? -Infinity;

//         visited.add(JSON.stringify([r, c]));

//         directions.forEach((direction) => {
//           if (
//             (heights[r + direction[0]]?.[c + direction[1]] ?? Infinity) <=
//             height
//           ) {
//             queue.push([r + direction[0], c + direction[1]]);
//           }
//         });
//       }

//       grids.set(JSON.stringify([r, c]), { a: routeToA, p: routeToP });

//       if (routeToP && routeToA) results.push([r, c]);
//     }
//   }

//   return results;
// }

console.log(
  pacificAtlantic([
    [3, 3, 3],
    [3, 1, 3],
    [0, 2, 4],
  ])
);
