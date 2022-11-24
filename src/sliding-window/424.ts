function characterReplacement(s: string, k: number): number {
  const frequencies: { [index: string]: number } = {};
  let maxLength = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    if (!frequencies[s[r]]) frequencies[s[r]] = 0;

    frequencies[s[r]]++;

    while (r - l + 1 - Math.max(...Object.values(frequencies)) > k) {
      frequencies[s[l]] -= 1;
      l += 1;
    }

    maxLength = Math.max(maxLength, r - l + 1);
  }

  return maxLength;
}

// function characterReplacement(s: string, k: number): number {
//   const frequencies: { [index: string]: number } = {};
//   let maxF = 0;
//   let maxLength = 0;
//   let windowLength = 0;
//   let l = 0,
//     r = 0;

//   while (r < s.length) {
//     const current = s[r];
//     if (!frequencies[s[r]]) frequencies[s[r]] = 0;

//     frequencies[s[r]]++;

//     if (frequencies[s[r]] > maxF) maxF = frequencies[s[r]];

//     windowLength = r - l + 1;

//     const valid = windowLength - maxF <= k;

//     if (valid) {
//       maxLength = Math.max(windowLength, maxLength);

//       r++;
//     } else {
//       frequencies[s[l]]--;

//       l++;
//       r++;
//     }
//   }

//   return maxLength;
// }

console.log(characterReplacement("AABABBA", 1));
