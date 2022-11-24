function maxAreaOfIsland(grid: number[][]): number {
  let result = 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let area = 0;
        const queue: number[][] = [];
        queue.push([i, j]);

        while (queue.length) {
          const [x, y] = queue.shift() as [number, number];
          if (!grid[x] || !grid[x][y]) continue;
          area++;
          grid[x][y] = 0;
          directions.forEach((direction) =>
            queue.push([x + direction[0], y + direction[1]])
          );
        }

        result = Math.max(area, result);
      }
    }
  }

  return result;
}

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
