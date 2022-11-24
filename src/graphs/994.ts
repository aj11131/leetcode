function orangesRotting(grid: number[][]): number {
  const directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  let fresh = 0;
  let res = 0;

  let queue = [];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 2) {
        queue.unshift([r, c, 0]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  while (queue.length && fresh > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const [r, c] = queue.pop() as [number, number];

      directions.forEach((direction) => {
        const [x, y] = [r + direction[0], c + direction[1]];
        if (grid[x]?.[y] === 1) {
          grid[x][y] = 2;
          fresh--;
          queue.unshift([x, y]);
        }
      });
    }

    res++;
  }

  return fresh === 0 ? res : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2],
  ])
);
