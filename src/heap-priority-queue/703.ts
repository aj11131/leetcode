// Solution using min heap of size K, insertion into the heap is log(n) so more ideal than using array
// class KthLargest {
//   constructor(k: number, nums: number[]) {

//   }

//   heapify() {

//   }

//   add(val: number): number {
//     return 0;
//   }
// }

// class MinHeap {
//   constructor(public root: HeapNode) {}

//   static heapify(nums: number[]): HeapNode | null {
//     let root: HeapNode | null = null;

//     nums.forEach(num => {
//       if (!root){
//         root = new HeapNode(num, null, null)
//         return;
//       };


//     });

//     return root;
//   }
// }

// class HeapNode {
//   constructor(public val: number, public right: HeapNode | null, public left: HeapNode | null) {}
// }

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/

// Solution using array and binary search to insert values - this is okay but inserting into array is O(n)
// class KthLargest {
//   queue: number[] = [];

//   constructor(private k: number, nums: number[]) {
//       nums.forEach(num => {this.insert(num); console.log(this.queue)});
//   }

//   private insert(val: number) {
//     let l = 0;
//     let r = this.queue.length - 1;

//     while (l <= r) {
//       let mid = l + Math.floor((r - l) / 2);
//       if (val < this.queue[mid]) {
//         r = mid - 1;
//       } else {
//         l = mid + 1;
//       }
//     }

//     this.queue.splice(l, 0, val);
//   };

//   add(val: number): number {
//     this.insert(val);

//     return this.queue[this.queue.length - this.k];
//   }
// }

// const kthLargest = new KthLargest(3, [4, 8, 5, 2]);
// console.log(kthLargest.add(10));
// console.log(kthLargest.queue);


/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/