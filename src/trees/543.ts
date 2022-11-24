{
  //  Definition for a binary tree node.
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

  function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;

    function dfs(node: TreeNode | null): number {
      if (!node) return 0;

      let left = dfs(node.left);
      let right = dfs(node.right);

      maxDiameter = Math.max(maxDiameter, left + right);

      return 1 + Math.max(left, right);
    }

    dfs(root);

    return maxDiameter;
  }
}
