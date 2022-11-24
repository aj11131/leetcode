function topKFrequent(nums: number[], k: number): number[] {
  const count = new Map<number, number>();
  const freq = [...new Array(nums.length)].map(() => [] as number[]);

  for (let num of nums) {
    count.set(num, 1 + (count.get(num) ?? 0));
  }

  for (let [num, c] of count.entries()) {
    freq[c - 1].push(num);
  }

  let res: number[] = [];

  for (let i = freq.length - 1; i >= 0; i--) {
    for (let n of freq[i]) {
      res.push(n);
      if (res.length === k) return res;
    }
  }

  return res;
}

// Solution using hash map and sorting O(n logn)
// function topKFrequent(nums: number[], k: number): number[] {
//   return [...nums.reduce((count, val) => {
//       count.set(val, 1 + (count.get(val) || 0));
//       return count;
//     }, new Map<number, number>())
//     .entries()]
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map((entry) => +entry[0]);
// }

console.log(topKFrequent([3, 0, 1, 0], 1));
