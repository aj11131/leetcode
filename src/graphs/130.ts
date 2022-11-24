/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  for (let c = 0; c < board[0].length; c++) {
    dfs([0, c]);
    dfs([board.length - 1, c]);
  }

  for (let r = 0; r < board.length; r++) {
    dfs([r, 0]);
    dfs([r, board[0].length - 1]);
  }

  function dfs(coord: [number, number]) {
    const [r, c] = coord;

    if (r === 4 && c === 3) console.log("here");

    if (!board[r] || !board[r][c] || board[r][c] === "X" || board[r][c] === "T")
      return;

    board[r][c] = "T";

    directions.forEach((direction) => {
      dfs([r + direction[0], c + direction[1]]);
    });
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      } else if (board[r][c] === "T") {
        board[r][c] = "O";
      }
    }
  }
}

// function solve(board: string[][]): void {
//   const safe = new Set<string>();
//   const directions = [
//     [1, 0],
//     [0, 1],
//     [-1, 0],
//     [0, -1],
//   ];

//   for (let c = 0; c < board[0].length; c++) {
//     dfs([0, c]);
//     dfs([board.length - 1, c]);
//   }

//   for (let r = 0; r < board.length; r++) {
//     dfs([r, 0]);
//     dfs([r, board[0].length - 1]);
//   }

//   function dfs(coord: [number, number]) {
//     const [r, c] = coord;

//     if (r === 4 && c === 3) console.log("here");

//     if (!board[r] || !board[r][c] || board[r][c] === "X") return;

//     if (safe.has(`${r}|${c}`)) return;
//     safe.add(`${r}|${c}`);

//     directions.forEach((direction) => {
//       dfs([r + direction[0], c + direction[1]]);
//     });
//   }

//   for (let r = 0; r < board.length; r++) {
//     for (let c = 0; c < board[r].length; c++) {
//       if (board[r][c] === "O" && !safe.has(`${r}|${c}`)) {
//         board[r][c] = "X";
//       }
//     }
//   }
// }

solve([
  ["X", "O", "X", "X"],
  ["O", "X", "O", "X"],
  ["X", "O", "X", "O"],
  ["O", "X", "O", "X"],
  ["X", "O", "X", "O"],
  ["O", "X", "O", "X"],
]);
