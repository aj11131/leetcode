function isAnagram(s: string, t: string): boolean {
  const hash: {[index: string]: number} = {};

  for (let c of s) {
    if (!hash[c]) hash[c] = 0;
    hash[c]++
  }

  for (let c of t) {
    if (hash[c]) {
      hash[c]--;
      if (hash[c] === 0) delete hash[c];
    } else {
      return false;
    }
  }

  return Object.keys(hash).length === 0;
};