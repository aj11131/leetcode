function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let l = 0;
  const set = new Set();

  for (let r = 0; r < s.length; r++) {
    while(set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }

    set.add(s[r])

    if (r - l + 1 > max) max = r - l + 1;
  }

  return max;
};

console.log(lengthOfLongestSubstring("pww- -kew"));