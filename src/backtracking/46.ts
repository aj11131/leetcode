
function permute(nums: number[]): number[][] {
  let result: number[][] = [];

  if (nums.length === 1) return [[...nums]];

  for (let i = 0; i < nums.length; i++) {
    let n = nums.pop() as number;
    let perms = permute(nums);

    perms.forEach(perm => perm.push(n));
    result = result.concat(perms);
    nums.push(n);
  }

  return result;
};

// dfs solution
// function permute(nums: number[]): number[][] {

//   const permutations: number[][] = [];

//   const hash: {[index: number]: number} = {};

//   nums.forEach(num => {
//     if (!hash[num]) hash[num] = 0;
//     hash[num]++
//   })

//   function dfs(hash: {[index: string]: number}, permutation: number[]) {

//     if (permutation.length === nums.length) {
//       permutations.push(permutation);
//       return;
//     }

//     for (let num in hash) {
//       if (hash[num]) {
//         hash[num]--;
//         permutation.push(+num);
//         dfs({...hash}, [...permutation])
//         permutation.pop();
//         hash[num]++;
//       }
//     }
//   }

//   dfs({...hash}, []);

//   return permutations;
// };

console.log(permute([1,2,3,4]));