{
  //Definition for Node.
  class Node {
    val: number;
    next: Node | null;
    random: Node | null;
    constructor(val?: number, next?: Node, random?: Node) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
      this.random = random === undefined ? null : random;
    }
  }

  // Two Passes
  function copyRandomList(head: Node | null): Node | null {
    const oldToCopy = new Map<Node, Node | null>();

    let cur = head;

    while (cur) {
      const copy = new Node(cur.val);
      oldToCopy.set(cur, copy);
      cur = cur.next;
    }

    cur = head;

    while (cur) {
      const copy = oldToCopy.get(cur) as Node;

      if (cur.next) copy.next = oldToCopy.get(cur.next) as Node;

      if (cur.random) copy.random = oldToCopy.get(cur.random) as Node;

      cur = cur.next;
    }

    return oldToCopy.get(head as Node) || null;
  }

  // One Pass
  // function copyRandomList(head: Node | null): Node | null {
  //   if (!head) return null;

  //   const nodes = new Map<Node, Node>();

  //   let newHead = new Node(head.val);

  //   nodes.set(head, newHead);

  //   let currentOld: Node | null = head;

  //   let currentNew: Node | null = newHead;
  //   let previousNew: Node | null = null;

  //   while (currentOld) {
  //     if (!nodes.has(currentOld))
  //       nodes.set(currentOld, new Node(currentOld.val));

  //     currentNew = nodes.get(currentOld) as Node;

  //     if (previousNew) previousNew.next = currentNew;

  //     if (currentOld.random && !nodes.has(currentOld.random))
  //       nodes.set(currentOld.random, new Node(currentOld.random.val));

  //     currentNew.random = nodes.get(currentOld.random as Node) || null;

  //     previousNew = currentNew;
  //     currentNew = currentNew.next;
  //     currentOld = currentOld.next;
  //   }

  //   return newHead;
  // }
}
