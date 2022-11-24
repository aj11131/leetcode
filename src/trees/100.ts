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

  function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let current1 = p;
    let current2 = q;

    const stack1 = [];
    const stack2 = [];

    stack1.push(current1);
    stack2.push(current2);

    while (stack1.length || stack2.length) {
      current1 = stack1.pop() as TreeNode | null;
      current2 = stack2.pop() as TreeNode | null;

      if (current1?.val !== current2?.val) return false;

      if (current1 && current2) {
        stack1.push(current1?.left);
        stack1.push(current1?.right);

        stack2.push(current2?.left);
        stack2.push(current2?.right);
      }
    }

    return true;
  }
}
