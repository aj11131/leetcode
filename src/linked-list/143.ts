{
  // Definition for singly-linked list.
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  /**
   Do not return anything, modify head in-place instead.
  */

  // Solution without using extra memory
  // Split linked list into two, reverse second linked list
  function reorderList(head: ListNode | null): void {
    let s: ListNode | null = head as ListNode;
    let f = s.next;

    if (s === null) return;

    while (f && f.next) {
      s = s!.next;
      f = f.next.next;
    }

    let head1 = head;
    let head2 = s!.next;
    s!.next = null;

    let current = head2;
    let previous = null;

    while (current) {
      let temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }

    head2 = previous;

    let current1 = head1;
    let current2 = head2;

    while (current2) {
      let temp1 = current1!.next;
      let temp2 = current2.next;

      current1!.next = current2;
      current2.next = temp1;

      current1 = temp1;
      current2 = temp2;
    }
  }

  // Solution using extra memory
  // function reorderList(head: ListNode | null): void {
  //   let arr = [];

  //   let current = head;

  //   while (current) {
  //     arr.push(current);
  //     current = current.next;
  //   }

  //   current = head;

  //   let l = 0;
  //   let r = arr.length - 1;

  //   while (l < r - 1) {
  //     let temp = arr[l].next;
  //     arr[r].next = null;
  //     let next = arr[r];
  //     arr[r - 1].next = null;
  //     arr[l].next = next;
  //     arr[r].next = temp;
  //     r--;
  //     l++;
  //   }
  // }

  function executeFunction(values: number[]) {
    let head: ListNode | null = null;
    let current: ListNode | null = null;

    for (let i = 0; i < values.length; i++) {
      if (!head) {
        head = new ListNode(values[i]);
        current = head;
      } else {
        current!.next = new ListNode(values[i]);
        current = current!.next;
      }
    }

    reorderList(head);

    const outPutValues: number[] = [];

    current = head;
    while (current) {
      outPutValues.push(current.val);
      current = current.next;
    }

    console.log(outPutValues);
  }

  executeFunction([1, 2, 3, 4, 5]);
}
