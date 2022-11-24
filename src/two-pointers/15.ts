function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (i > 0 && num === nums[i - 1]) {
      continue;
    }

    let l = i + 1,
      r = nums.length - 1;

    while (l < r) {
      const current = num + nums[l] + nums[r];

      if (current > 0) {
        r--;
      } else if (current < 0) {
        l++;
      } else {
        results.push([num, nums[l], nums[r]]);

        l++;

        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return results;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
