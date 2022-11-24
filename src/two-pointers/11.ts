function maxArea(height: number[]): number {
  let l = 0,
    r = height.length - 1;
  let max = 0;

  while (l < r) {
    max = Math.max((r - l) * Math.min(height[l], height[r]), max);

    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
