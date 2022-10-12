// Two pointer method with binary search to find ideal starting right pointer
function twoSum(numbers: number[], target: number): number[] {
  let l = 1, r = numbers.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (numbers[0] + numbers[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  l = 0;

  while (l < r) {
      if (numbers[l] + numbers[r] > target) {
        r--;
      } else if (numbers[l] + numbers[r] < target) {
        l++;
      } else {
        return [l + 1, r + 1];
      }
  }

  return [-1, -1];
  
};

const arr = [12,83,104,129,140,184,199,300,306,312,321,325,341,344,349,356,370,405,423,444,446,465,471,491,500,506,508,530,539,543,569,591,606,607,612,614,623,627,645,662,670,685,689,726,731,737,744,747,764,773,778,787,802,805,811,819,829,841,879,905,918,918,929,955,997];
console.log(twoSum([12,83,104,129,140,184,199,300,306,312,321,325,341,344,349,356,370,405,423,444,446,465,471,491,500,506,508,530,539,543,569,591,606,607,612,614,623,627,645,662,670,685,689,726,731,737,744,747,764,773,778,787,802,805,811,819,829,841,879,905,918,918,929,955,997],
  789));

console.log(twoSum([0,0,3,4], 0));


// Two pointer method
// function twoSum(numbers: number[], target: number): number[] {
//   let l = 0, r = numbers.length - 1;

//   while (l < r) {
//       if (numbers[l] + numbers[r] > target) {
//         r--;
//       } else if (numbers[l] + numbers[r] < target) {
//         l++;
//       } else {
//         return [l + 1, r + 1];
//       }
//   }

//   return [-1, -1];
  
// };

// Iterate over array with one pointer and use binary search to find other index
// function twoSum(numbers: number[], target: number): number[] {

//   for (let i = 0; i < numbers.length; i++) {
      
//           let l = i + 1;
//           let r = numbers.length - 1;

//           while (l <= r) {

//             let mid = l + Math.floor((r - l) / 2);

//             if (numbers[i] + numbers[mid] === target) return [i + 1, mid + 1];

//             if (numbers[i] + numbers[mid] < target) {
//               l = mid + 1;
//             } else {
//               r = mid - 1;
//             }

//           }
      
//   }
  
//   return [-1, -1];
  
// };