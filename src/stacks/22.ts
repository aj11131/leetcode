// DFS with global stack
function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const res: string[] = [];

  function dfs(open: number, closed: number) {
    if (open === closed && open === n) {
      res.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      dfs(open + 1, closed);
      stack.pop();
    }

    if (closed < open) {
      stack.push(")");
      dfs(open, closed + 1);
      stack.pop();
    }
  }

  dfs(0, 0);

  return res;
}

// function generateParenthesis(n: number): string[] {
//   const results: string[] = [];

//   function dfs(combo: string, closing: number, opening: number) {
//     if (combo.length === 2 * n && closing === opening) {
//       results.push(combo);
//     }

//     if (closing > opening || opening > n) return;

//     dfs(combo + "(", closing, opening + 1);
//     dfs(combo + ")", closing + 1, opening);
//   }

//   dfs("", 0, 0);

//   return results;
// }

console.log(generateParenthesis(3));
