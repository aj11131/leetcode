function combinationSum2(candidates: number[], target: number): number[][] {
  const results: number[][] = [];

  const combination: number[] = [];

  candidates.sort((a, b) => a - b);

  function dfs(i: number) {
    if (i > candidates.length) return;
    const sum = combination.reduce((acc, val) => acc + val, 0);
    if (sum > target) return;
    if (sum === target) {
      results.push([...combination]);
      return;
    }

    combination.push(candidates[i]);

    dfs(i + 1);

    combination.pop();

    i++;

    while (candidates[i] === candidates[i - 1] && i < candidates.length) {
      i++;
    }

    dfs(i);
  }

  dfs(0);

  return results;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
