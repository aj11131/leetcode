function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[l] >= nums[r]) {
      if (nums[mid] >= nums[l]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    } else {
      if (nums[mid] >= nums[l]) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
  }

  return nums[r];
}

console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMin([7, 8, 9, 10, 1, 2, 3, 4, 5, 6]));
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
