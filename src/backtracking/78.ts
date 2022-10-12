function subsets(nums: number[]): number[][] {
  const subsets: number[][] = [];
  let subset: number[] = [];
  
  function dfs(i: number) {

    if (i > nums.length - 1) {
      subsets.push([...subset]);
      return;
    }
      
    subset.push(nums[i]);
    dfs(i + 1);

    subset.pop();
    dfs(i + 1);

  }

  dfs(0);
  
  return subsets;
};

console.log(subsets([1,2,3]));