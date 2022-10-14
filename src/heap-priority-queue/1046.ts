import { MaxHeap } from "@datastructures-js/heap";
const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function lastStoneWeight(stones: number[]): number {
  if (!stones) return 0;

  const pq = new MaxPriorityQueue({ priority: (val: number) => val });

  stones.forEach((stone) => pq.enqueue(stone));

  while ((pq.size() as number) > 1) {
    let stone1 = pq.dequeue()?.element;
    let stone2 = pq.dequeue()?.element;

    if (stone1 > stone2) {
      pq.enqueue(stone1 - stone2);
    }
  }

  return pq.dequeue()?.element ?? 0;
}

// function lastStoneWeight(stones: number[]): number {
//   if (!stones) return 0;

//   const pq = new MaxPriorityQueue({ priority: (val: number) => val });

//   stones.forEach((stone) => pq.enqueue(stone));

//   while (!pq.isEmpty()) {
//     let stone1 = pq.dequeue()?.element;
//     let stone2 = pq.dequeue()?.element;

//     if (!stone1) return 0;
//     if (!stone2) return stone1;

//     pq.enqueue(stone1 - stone2);
//   }

//   return 0;
// }

// function lastStoneWeight(stones: number[]): number {
//   if (!stones) return 0;

//   const maxHeap = new MaxHeap<number>();

//   stones.forEach((stone) => maxHeap.insert(stone));

//   while (!maxHeap.isEmpty()) {
//     let stone1 = maxHeap.extractRoot();
//     let stone2 = maxHeap.extractRoot();
//     console.log(stone1);
//     console.log(stone2);

//     if (!stone1) return 0;
//     if (!stone2) return stone1;

//     maxHeap.insert(stone1 - stone2);
//   }

//   return 0;
// }

console.log(lastStoneWeight([1]));
