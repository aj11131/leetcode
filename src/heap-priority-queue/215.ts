const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// Using quick select
// function findKthLargest(nums: number[], k: number): number {
//   k = nums.length - k;

//   function quickSelect(l: number, r: number): number {
//     let pivot = nums[r];
//     let p = l;

//     for (let i = 0; i < r; i++) {
//       if (nums[i] <= pivot) {
//         let temp = nums[p];
//         nums[p] = nums[i];
//         nums[i] = temp;
//         p += 1;
//       }
//     }

//     let temp = nums[p];
//     nums[p] = pivot;
//     nums[r] = temp;

//     if (p > k) {
//       return quickSelect(l, p - 1);
//     } else if (p < k) {
//       return quickSelect(p + 1, r);
//     } else {
//       return nums[p];
//     }
//   }

//   return quickSelect(0, nums.length - 1);
// }

// Using max heap
function findKthLargest(nums: number[], k: number): number {
  const pq = new MaxPriorityQueue({ priority: (val: number) => val });

  nums.forEach((num) => pq.enqueue(num));

  while (k > 1) {
    pq.dequeue();
    k--;
  }

  return pq.dequeue().element;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
