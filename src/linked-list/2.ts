{
  //Definition for singly-linked list.
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    let dummy = new ListNode();
    let cur = dummy;
    let cur1 = l1;
    let cur2 = l2;

    let carry = 0;
    while (cur1 || cur2 || carry) {
      let val = (cur1!?.val ?? 0) + (cur2!?.val ?? 0) + carry;
      carry = Math.floor(val / 10);
      val = val % 10;

      cur.next = new ListNode(val);

      cur = cur.next;
      cur1 = cur1?.next || null;
      cur2 = cur2?.next || null;
    }

    return dummy.next;
  }

  // function addTwoNumbers(
  //   l1: ListNode | null,
  //   l2: ListNode | null
  // ): ListNode | null {
  //   const head = new ListNode();
  //   let cur = head;
  //   let cur1 = l1;
  //   let cur2 = l2;

  //   while (cur1 || cur2) {
  //     let val = (cur1!?.val) ?? 0 + (cur2!?.val ?? 0);
  //     let nextVal = 0;

  //     cur.val = cur.val + val;

  //     if (cur.val > 10) {
  //       nextVal = 1;
  //       cur.val = Math.floor(cur.val % 10);
  //     }

  //     cur1 = cur1?.next || null;
  //     cur2 = cur2?.next || null;

  //     if (cur1 || cur2 || nextVal > 0) {
  //       cur.next = new ListNode(nextVal);
  //     }
  //   }

  //   return head;
  // }

  // function addTwoNumbers(
  //   l1: ListNode | null,
  //   l2: ListNode | null
  // ): ListNode | null {
  //   let sum = getNum(l1) + getNum(l2);

  //   const head = new ListNode();

  //   let cur: ListNode | null = head;

  //   while (cur) {
  //     cur.val = sum % 10;
  //     sum = sum / 10;

  //     if (sum > 1) cur.next = new ListNode();
  //     cur = cur.next;
  //   }

  //   function getNum(list: ListNode | null): number {
  //     if (!list) return 0;
  //     let digits = [];

  //     let cur: ListNode | null = list;

  //     while (cur) {
  //       digits.unshift(cur.val);
  //       cur = cur.next;
  //     }

  //     return +digits.join("");
  //   }

  //   return head;
  // }
}
