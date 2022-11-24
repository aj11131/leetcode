function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const windowCount: { [index: string]: number } = {};
  const s1Count: { [index: string]: number } = {};

  for (let i = 0; i < 26; i++) {
    windowCount[String.fromCharCode(i + "a".charCodeAt(0))] = 0;
    s1Count[String.fromCharCode(i + "a".charCodeAt(0))] = 0;
  }

  for (let i = 0; i < s1.length; i++) {
    windowCount[s2[i]]++;
    s1Count[s1[i]]++;
  }

  let l = 0;
  let r = s1.length - 1;

  while (r < s2.length) {
    if (compareObjects(windowCount, s1Count)) return true;

    windowCount[s2[l]]--;
    l++;
    r++;
    windowCount[s2[r]]++;
  }

  function compareObjects(
    a: { [index: string]: number },
    b: { [index: string]: number }
  ) {
    for (let c in a) {
      if (a[c] !== b[c]) return false;
    }
    return true;
  }

  return false;
}

// function checkInclusion(s1: string, s2: string): boolean {
//   if (s2.length < s1.length) return false;

//   let s1Count = new Array(26).fill(0);
//   let s2Count = new Array(26).fill(0);

//   for (let i = 0; i < s1Count.length; i++) {
//     s1Count[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
//     s2Count[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
//   }

//   let matches = 0;

//   for (let i = 0; i < 26; i++) {
//     if (s1Count[i] === s2Count[i]) matches++;
//   }

//   let l = 0;

//   for (let r = s1.length; r < s2.length; r++) {
//     if (matches === 26) return true;

//     let index = s2[r].charCodeAt(0) - "a".charCodeAt(0);
//     s2Count[index]++;
//     if (s1Count[index] === s2Count[index]) {
//       matches++;
//     } else if (s1Count[index] + 1 === s2Count[index]) {
//       matches--;
//     }

//     index = s2[l].charCodeAt(0) - "a".charCodeAt(0);
//     s2Count[index]--;
//     if (s1Count[index] === s2Count[index]) {
//       matches++;
//     } else if (s1Count[index] + 1 === s2Count[index]) {
//       matches--;
//     }

//     l++;
//   }

//   return matches === 26 ? true : false;
// }

console.log(checkInclusion("ab", "eidbaooo"));
