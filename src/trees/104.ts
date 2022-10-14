{
  // Definition for a binary tree node.
  class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  // DFS Solution with recursion shortened
  function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }

  // DFS Solution with recursion
  // function maxDepth(root: TreeNode | null): number {
  //   let maxLevel = 0;

  //   function dfs(node: TreeNode | null, level: number) {
  //     if (!node) return 0;

  //     maxLevel = Math.max(++level, maxLevel);

  //     dfs(node.left, level);
  //     dfs(node.right, level);
  //   }

  //   dfs(root, 0);

  //   return maxLevel;
  // };

  // Iterative DFS Solution
  // function maxDepth(root: TreeNode | null): number {
  //   let max = 0;

  //   const stack: [TreeNode | null, number][] = [[root, 1]];

  //   while (stack.length) {
  //     let [node, depth] = stack.pop() as [TreeNode | null, number];

  //     if (node) {
  //       max = Math.max(max, depth);

  //       stack.push([node.left, depth++]);
  //       stack.push([node.right, depth++]);
  //     }
  //   }

  //   return max;
  // };

  // Iterative BFS Solution
  // function maxDepth(root: TreeNode | null): number {
  //   if (!root) return 0;

  //   let level = 0;

  //   const queue = [];

  //   queue.push(root);

  //   while (queue.length) {

  //     let levelSize = queue.length;

  //     while (levelSize-- !== 0) {
  //       const current = queue.shift() as TreeNode | null;
  //       if (current?.left) queue.push(current.left);
  //       if (current?.right) queue.push(current.right);
  //     }

  //     level++;
  //   }

  //   return level;
  // }
}
