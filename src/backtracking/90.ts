function subsetsWithDup(nums: number[]): number[][] {
  const results: number[][] = [];

  nums.sort();

  function dfs(i: number, subset: number[]) {
    if (i === nums.length) {
      results.push([...subset]);
      return;
    }

    // All subsets that include nums[i]
    subset.push(nums[i]);
    dfs(i + 1, subset);
    subset.pop();

    // All subsets that do not include nums[i]
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    dfs(i + 1, subset);
  }

  dfs(0, []);

  return results;
}

// function subsetsWithDup(nums: number[]): number[][] {
//   const results: number[][] = [];

//   nums.sort();

//   const set = new Set<string>();

//   function dfs(currentNums: number[], index: number) {
//     if (!set.has(JSON.stringify(currentNums))) {
//       set.add(JSON.stringify(currentNums));
//       results.push(currentNums);
//     }

//     for (let i = index; i < nums.length; i++) {
//       dfs([...currentNums, nums[i]], i + 1);
//     }

//     return results;
//   }

//   return dfs([], 0);
// }

console.log(subsetsWithDup([1, 2, 2]));
