function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;
  let remainingSteps = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (remainingSteps === 0) return false;
    remainingSteps--;
    if (nums[i] > remainingSteps) {
      remainingSteps = nums[i];
    }
  }

  return true;
}

// function canJump(nums: number[]): boolean {
//   if (nums.length === 1) return true;

//   let remainingSteps = nums[0];
//   let current = 0;

//   while (remainingSteps > 0) {
//     current++;
//     remainingSteps--;

//     if (current === nums.length - 1) return true;

//     if (nums[current] > remainingSteps) {
//       remainingSteps = nums[current];
//     }
//   }

//   return false;
// }

console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 0, 0]));
