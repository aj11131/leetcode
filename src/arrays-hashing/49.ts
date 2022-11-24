// Solution using hash map O(m * n)
function groupAnagrams(strs: string[]): string[][] {
  const anagrams = new Map<string, string[]>();

  strs.forEach((str) => {
    let countArr = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      let c = str[i];
      let index = c.charCodeAt(0) - "a".charCodeAt(0);
      countArr[index]++;
    }

    const countString = countArr.join("#");

    console.log(countString);

    if (!anagrams.has(countString)) anagrams.set(countString, []);
    anagrams.get(countString)?.push(str);
  });

  return [...anagrams.values()];
}

// Solution sorting input strings O(m * n log(n)) - each element of input array needs to be sorted
// function groupAnagrams(strs: string[]): string[][] {
//   const anagrams = new Map<string, string[]>();

//   strs.forEach((str) => {
//     const strSorted = str.split("").sort().join();
//     if (!anagrams.has(strSorted)) anagrams.set(strSorted, []);
//     anagrams.get(strSorted)?.push(str);
//   });

//   return [...anagrams.values()];
// }

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
