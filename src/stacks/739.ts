{
  function dailyTemperatures(temperatures: number[]): number[] {
    const res = new Array(temperatures.length).fill(0);
    const stack: [number, number][] = [];

    for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
        const [temp, index] = stack.pop() as [number, number];
        res[index] = i - index;
      }

      stack.push([temperatures[i], i]);
    }

    return res;
  }

  // class DataPoint {
  //   constructor(public index: number, public temp: number) {}
  // }

  // function dailyTemperatures(temperatures: number[]): number[] {
  //   const res = new Array(temperatures.length).fill(0);
  //   const stack: DataPoint[] = [];

  //   for (let i = 0; i < temperatures.length; i++) {
  //     while (stack.length && stack[stack.length - 1].temp < temperatures[i]) {
  //       const data = stack.pop() as DataPoint;
  //       res[data.index] = i - data.index;
  //     }

  //     stack.push(new DataPoint(i, temperatures[i]));
  //   }

  //   return res;
  // }

  console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
}
