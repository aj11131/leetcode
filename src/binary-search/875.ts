function minEatingSpeed(piles: number[], h: number): number {
  let l = 1,
    r = Math.max(...piles);

  let minK = Infinity;

  while (l <= r) {
    let k = l + Math.floor((r - l) / 2);

    let validK = validateK(k);

    if (validK) {
      if (k < minK) minK = k;

      r = k - 1;
    } else {
      l = k + 1;
    }
  }

  return minK;

  function validateK(k: number) {
    let curH = 0;

    for (let i = 0; i < piles.length; i++) {
      const hoursForPile = Math.ceil(piles[i] / k);
      curH += hoursForPile;
      if (curH > h) return false;
    }

    return true;
  }
}

console.log(
  minEatingSpeed(
    [
      332484035, 524908576, 855865114, 632922376, 222257295, 690155293,
      112677673, 679580077, 337406589, 290818316, 877337160, 901728858,
      679284947, 688210097, 692137887, 718203285, 629455728, 941802184,
    ],
    823855818
  )
);
