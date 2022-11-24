// Better solution
function longestPalindrome(s: string): string {
  let result = "";
  let resLength = 0;

  for (let i = 0; i < s.length; i++) {
    let l = i,
      r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLength) {
        result = s.substring(l, r + 1);
        resLength = r - l + 1;
      }
      l--;
      r++;
    }

    (l = i), (r = i + 1);

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLength) {
        result = s.substring(l, r + 1);
        resLength = r - l + 1;
      }
      l--;
      r++;
    }
  }

  return result;
}

// Brute force
// function longestPalindrome(s: string): string {
//   let result = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       const substring = s.substring(i, j + 1);
//       if (isPalindrome(substring) && substring.length > result.length)
//         result = substring;
//     }
//   }

//   function isPalindrome(s: string): boolean {
//     let l = 0;
//     let r = s.length - 1;

//     while (l <= r) {
//       if (s[l] !== s[r]) return false;
//         l++
//         r--;
//     }

//     return true;
//   }

//   return result;
// }
