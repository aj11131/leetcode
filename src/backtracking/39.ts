// function combinationSum(candidates: number[], target: number): number[][] {
//   const results: number[][] = [];

//   function dfs(current: number[], ptr: number, acc: number) {
//     if (acc > target || ptr >= candidates.length) return;
//     if (acc === target) {
//       results.push(current);
//       return;
//     };

//     for (let i = ptr; i < candidates.length; i++) {
//       dfs([...current, candidates[i]], i, acc + candidates[i]);
//     }
//   }

//   dfs([], 0, 0);

//   return results;
// }

function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = [];

  function dfs(i: number, cur: number[], total: number) {
    if (total === target) {
      results.push([...cur]);
      return;
    }

    if (i >= candidates.length || total > target) return;

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);
    cur.pop();
    dfs(i + 1, cur, total);
  }

  dfs(0, [], 0);

  return results;
}

// function combinationSum(candidates: number[], target: number): number[][] {
//   const results: number[][] = [];

//   function dfs(nums: number[], ptr: number) {
//     const sum = nums.reduce((acc, val) => acc + val, 0);

//     if (sum > target) return;
//     if (sum === target) results.push(nums);

//     for (let i = ptr; i < candidates.length; i++) {
//       dfs([...nums, candidates[i]], i)
//     }
//   }

//   dfs([], 0);

//   return results;
// }

// function combinationSum(candidates: number[], target: number): number[][] {
//   const results: number[][] = [];

//   function dfs(nums: number[], remainingCandidates: number[]) {
//     const sum = nums.reduce((acc, val) => acc + val, 0);

//     if (sum > target) return;
//     if (sum === target) results.push(nums);

//     remainingCandidates.forEach((candidate, i) =>
//       dfs([...nums, candidate], remainingCandidates.slice(i))
//     );
//   }

//   dfs([], [...candidates]);

//   return results;
// }

console.log(combinationSum([2, 3, 6, 7], 7));
