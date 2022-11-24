{
  const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

  // Using max heap
  function leastInterval(tasks: string[], n: number): number {
    const taskCount = new Map<string, number>();
    const pq = new MaxPriorityQueue({ priority: (val: number) => val });
    const cooldownQueue: [number, number][] = [];
    let time = 0;

    tasks.forEach((task) =>
      taskCount.set(task, (taskCount.get(task) || 0) + 1)
    );

    for (let [key, value] of taskCount.entries()) {
      pq.enqueue(value);
    }

    while (!pq.isEmpty() || cooldownQueue.length) {
      time++;

      if (!pq.isEmpty()) {
        let count = pq.dequeue();
        if (count.element > 1) cooldownQueue.push([--count.element, time + n]);
      }

      if (cooldownQueue[0]?.[1] === time) {
        pq.enqueue(cooldownQueue.shift()?.[0]);
      }
    }

    return time;
  }

  // function leastInterval(tasks: string[], n: number): number {
  //   const taskCount = new Map<string, number>();
  //   const cooldownQueue: string[] = [];
  //   let res = 0;

  //   tasks.forEach((task) => taskCount.set(task, (taskCount.get(task) || 0) + 1));

  //   while (Math.max(...taskCount.values()) > 0) {
  //     let currentMax: [string, number] = ["", 0];
  //     for (let [key, value] of taskCount.entries()) {
  //       if (cooldownQueue.includes(key)) continue;
  //       if (value > currentMax[1]) currentMax = [key, value];
  //     }

  //     if (currentMax[0]) {
  //       taskCount.set(currentMax[0], (taskCount.get(currentMax[0]) || 0) - 1);
  //       cooldownQueue.unshift(currentMax[0]);
  //     } else {
  //       cooldownQueue.unshift("idle");
  //     }

  //     if (cooldownQueue.length > n) {
  //       cooldownQueue.pop();
  //     }

  //     res++;
  //   }

  //   return res;
  // }

  console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
}
