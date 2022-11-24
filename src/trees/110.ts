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

  function isBalanced(root: TreeNode | null): boolean {
    function dfs(root: TreeNode | null): [boolean, number] {
      if (!root) return [true, 0];

      let left = dfs(root.left);
      let right = dfs(root.right);

      // if the difference in height between the two child nodes is greater than one then the tree is not balanced
      let balanced = Math.abs(left[1] - right[1]) <= 1 && left[0] && right[0];

      return [balanced, 1 + Math.max(left[1], right[1])];
    }

    return dfs(root)[0];
  }
}
