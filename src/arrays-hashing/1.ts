{
  function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const comp = target - num;

      if (map.has(comp)) return [map.get(comp) as number, i];

      map.set(num, i);
    }

    return [];
  }
}
