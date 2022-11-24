function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  // set the result array to the value of the product of all the elements before the current index

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product = product * nums[i];
  }

  // loop through nums again backwards and find track the product of all the nums after the pointer and multiply it by the prefix value found above that is currently stored in result

  product = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = product * result[i];
    product = nums[i] * product;
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
