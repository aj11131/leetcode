function maxSubArray(nums: number[]): number {

  let maxSub = nums[0];
  let currentSum = 0;

  for (let num of nums) {
    if (currentSum < 0) currentSum = 0;
    currentSum += num;
    maxSub = Math.max(maxSub, currentSum);
  }

  return maxSub;

};

console.log(maxSubArray(
  [-2,-1]));
