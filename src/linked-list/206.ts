
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Iterative
function reverseList(head: ListNode | null): ListNode | null {

  let next = null, previous = null, current = head;

  while (current) {
    next = current.next;
    current.next = previous
    previous = current;
    current = next;
  }

  return previous;
};

// Recursively
// function reverseList(head: ListNode | null): ListNode | null {
//   if (!head) return null;

//   let newHead: ListNode | null = head;
//   if (head.next) {
//     newHead = reverseList(head.next);
//     head.next.next = head;
//   }
//   head.next = null;

//   return newHead;
// };