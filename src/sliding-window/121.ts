function maxProfit(prices: number[]): number {
  let l = 0, r = 0;
  let max = -Infinity;

  while(r < prices.length) {
    if (prices[l] > prices[r]) {
      l = r;
    }

    if ((prices[r] - prices[l]) > max) max = prices[r] - prices[l];

    r++
  }

  return max;
};

console.log(maxProfit([5,6,10,3,1]));