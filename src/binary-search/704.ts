function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) return mid;
 
    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
};

console.log(search([9,12], 9));