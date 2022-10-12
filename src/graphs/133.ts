// Definition for Node.
{
class Node {
    val: number
    neighbors: Node[]
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

// Recursive solution
// Seems to be slower but uses less memory

function cloneGraph(node: Node | null): Node | null {
  if (!node) return null;
	
  const oldToNew = new Map<Node, Node>();

  function dfs(node: Node) {
    if (oldToNew.has(node)) return oldToNew.get(node) as Node;

    oldToNew.set(node, new Node(node.val));

    for (let neighbor of node.neighbors) {
      oldToNew.get(node)?.neighbors.push(dfs(neighbor));
    }

    return oldToNew.get(node) as Node;
  }

  return dfs(node);
};

// Iterative solution
// faster uses more memory

// function cloneGraph(node: Node | null): Node | null {
//   if (!node) return null;

//   const visited = new Set();
// 	const oldToNew = new Map<Node, Node>();
//   const stack = [];
//   stack.push(node);

//   while(stack.length) {
//     const current = stack.pop() as Node;

//     if (visited.has(current.val)) continue;

//     visited.add(current.val);

//     if (!oldToNew.has(current)) oldToNew.set(current, new Node(current.val));

//     for (let neighbor of current.neighbors) {

//       if (!oldToNew.has(neighbor)) oldToNew.set(neighbor, new Node(neighbor.val));
//       oldToNew.get(current)?.neighbors.push(oldToNew.get(neighbor) as Node)

//       if (!visited.has(neighbor.val)) stack.push(neighbor);
//     }

//   }
//   return oldToNew.get(node) as Node;
// };

}