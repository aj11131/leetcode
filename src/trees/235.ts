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

  // Better solution
  function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ): TreeNode | null {
    let cur = root;

    while (cur) {
      if (p!.val > cur.val && q!.val > cur.val) {
        cur = cur.right;
      } else if (p!.val < cur.val && q!.val < cur.val) {
        cur = cur.left;
      } else {
        return cur;
      }
    }

    return null;
  }

  // Brute force
  // function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  //   if (!p || !q) return null;

  //   let res = root;

  //   let descendants = [false, false];

  //   function checkDescendants(node: TreeNode | null): boolean {
  //     if (descendants[0] && descendants[1]) return true;
  //     if (!node) return false;

  //     if (node.val === p!.val) descendants[0] = true;
  //     if (node.val === q!.val) descendants[1] = true;

  //     return checkDescendants(node.left) || checkDescendants(node.right);
  //   }

  //   function dfs(node: TreeNode | null) {
  //     if (!node) return;

  //     descendants = [false, false];

  //     if (checkDescendants(node) === true) {
  //       res = node;
  //       dfs(node.left);
  //       dfs(node.right)
  //     }
  //   }

  //   dfs(root);

  //   return res;
  // };
}
