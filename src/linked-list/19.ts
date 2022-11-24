{
  //  Definition for singly-linked list.
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  // two pointer method
  function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let left: ListNode | null = dummy;
    let right = head;

    while (n > 0 && right) {
      right = right.next;
      n--;
    }

    while (right) {
      left = left!.next;
      right = right.next;
    }

    left!.next = left?.next?.next || null;

    return dummy.next;
  }

  // reverse list and remove node
  // function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  //   if (!head) return null;

  //   head = reverseList(head);

  //   let current: ListNode | null = head;
  //   let previous: ListNode | null = null;
  //   let count = 1;

  //   while (count <= n && current) {

  //     if (!current.next && n === count) {
  //       if (previous) {
  //         previous.next = null;
  //         break;
  //       } else {
  //         return null;
  //       }
  //     }

  //     if (previous && count === n - 1) {
  //       previous.next = current.next;
  //     }

  //     previous = current;
  //     current = current?.next;

  //     count++;
  //   }

  //   head = reverseList(head);

  //   function reverseList(head: ListNode | null) {
  //     let current = head;
  //     let previous = null;

  //     while (current) {
  //       let temp = current.next;
  //       current.next = previous;
  //       previous = current;
  //       current = temp;
  //     }

  //     return previous;
  //   }

  //   return head;
  // }
}
