// DP solution
function rob(nums: number[]): number {
  let rob1 = 0,
    rob2 = 0;

  // [rob1, rob2, n, n+1, ...]
  for (let num of nums) {
    let temp = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
}

// dfs with memoization
// function rob(nums: number[]): number {
//   let result = 0;

//   const totals = new Map<number, number>();

//   function dfs(index: number) {
//     if (!nums[index] && nums[index] !== 0) return 0;
//     if (totals.has(index)) return totals.get(index) as number;
//     if (!nums[index + 2] && nums[index + 2] !== 0) return nums[index];

//     let total = 0;

//     for (let i = index + 2; i < index + 4; i++) {
//       total = Math.max(total, nums[index] + dfs(i));
//     }

//     totals.set(index, total);

//     return total;
//   }

//   result = Math.max(dfs(0), dfs(1));

//   return result;
// }

console.log(
  rob([
    228, 67, 195, 15, 0, 90, 151, 210, 17, 196, 0, 10, 28, 110, 169, 94, 9, 23,
    52, 63, 136, 122, 22, 191, 144, 22, 173, 106, 88, 59, 200, 156, 39, 109,
    244, 231, 183, 99, 114, 15, 114, 32, 57, 36, 117, 151, 177, 106, 229, 188,
    178, 47, 96, 191, 25, 180, 153, 187, 136, 146, 117, 57, 77, 110, 215, 115,
    84, 218, 59, 121, 202, 109, 205, 95, 214, 100, 175, 50, 223, 11, 14, 164,
    224, 15, 100, 241, 61, 64, 197, 206, 3, 149, 108, 186,
  ])
);
// console.log(rob([2, 7, 9, 3, 1]));

console.log(rob([8, 6, 8, 1, 5, 0, 4, 6, 12, 3]));
