function insert(intervals: number[][], newInterval: number[]): number[][] {
  let res: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval);
      return [...res, ...intervals.slice(i)];
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1]),
      ];
    }
  }

  res.push(newInterval);

  return res;
};

console.log(insert([[1,2],[3,5],[6,7],[18,20],[22,26]], [7,21]));