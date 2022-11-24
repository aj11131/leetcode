function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (
      nums[mid] > (nums[mid - 1] || nums[nums.length - 1]) &&
      nums[mid] > (nums[mid + 1] || nums[0])
    ) {
      r = mid;
      break;
    }

    if (nums[mid] >= nums[0]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  let pivot = r;

  if (target <= nums[pivot] && target >= nums[0]) {
    l = 0;
    r = pivot;
  } else {
    l = pivot + 1;
    r = nums.length - 1;
  }

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 2));
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(search([8, 1, 2, 3, 4, 5, 6, 7], 2));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([3, 1], 3));
console.log(search([8, 9, 2, 3, 4], 9));

// search([4, 5, 6, 7, 8, 1, 2, 3], 2);
// search([1, 2, 3, 4, 5, 6, 7, 8], 2);
// search([8, 1, 2, 3, 4, 5, 6, 7], 2);
// search([4, 5, 6, 7, 0, 1, 2], 0);
