{
  // DP
  function rob(nums: number[]): number {
    function helper(nums: number[]) {
      let rob1 = 0;
      let rob2 = 0;

      // rob2 is adjacent to num
      for (let num of nums) {
        let newRob = Math.max(num + rob1, rob2);
        rob1 = rob2;
        rob2 = newRob;
      }

      return rob2;
    }

    return Math.max(
      nums[0],
      helper(nums.slice(1)),
      helper(nums.slice(0, nums.length - 1))
    );
  }

  // dfs with memoization
  // function rob(nums: number[]): number {
  //   function helper(nums: number[]): number {
  //     let map = new Map<number, number>();

  //     function dfs(i: number): number {
  //       if (i >= nums.length) return 0;

  //       if (map.has(i)) return map.get(i) as number;

  //       const maxRobbed = Math.max(nums[i] + dfs(i + 2), nums[i] + dfs(i + 3));

  //       map.set(i, maxRobbed);

  //       return maxRobbed;
  //     }

  //     return Math.max(dfs(0), dfs(1));
  //   }

  //   return Math.max(
  //     nums[0],
  //     helper(nums.slice(1)),
  //     helper(nums.slice(0, nums.length - 1))
  //   );
  // }

  // console.log(
  //   rob([
  //     228, 67, 195, 15, 0, 90, 151, 210, 17, 196, 0, 10, 28, 110, 169, 94, 9,
  //     23, 52, 63, 136, 122, 22, 191, 144, 22, 173, 106, 88, 59, 200, 156, 39,
  //     109, 244, 231, 183, 99, 114, 15, 114, 32, 57, 36, 117, 151, 177, 106, 229,
  //     188, 178, 47, 96, 191, 25, 180, 153, 187, 136, 146, 117, 57, 77, 110, 215,
  //     115, 84, 218, 59, 121, 202, 109, 205, 95, 214, 100, 175, 50, 223, 11, 14,
  //     164, 224, 15, 100, 241, 61, 64, 197, 206, 3, 149, 108, 186,
  //   ])
  // );

  // console.log(rob([1, 2, 1, 1]));

  console.log(rob([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
}
