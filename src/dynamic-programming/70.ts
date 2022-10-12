// True DP solution
function climbStairs(n: number): number {
  let one = 1, two = 1;

  for (let i = 0; i <= n; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }

  return one;
};

// DP dfs with memoization
// function climbStairs(n: number): number {
//   const cache: {[index: number]: number} = {};

//   function dfs(current: number, combos: number) {
//     if (cache[current]) return cache[current];

//     if (current > n) return 0;

//     if (current === n) {
//       combos++;
//       return combos;
//     }

//     combos = dfs(current + 1, combos) + dfs(current + 2, combos);

//     cache[current] = combos;

//     return combos;

//   }

//   return dfs(0, 0);

// };

console.log(climbStairs(10));