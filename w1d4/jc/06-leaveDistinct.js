/**
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 * Return the linked list sorted as well.
 *
 * Input: ListNode (head)
 * Output: ListNode (head)
 *
 * Example
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 *
 * 1->2->3->3->4->4->5
 *    p  c next is same, so leave p
 *    p     c  next is not same, so point p.next to c.next, move c to c.next
 * 1->2->4->4->5
 *    p  c  next is same, leave p
 * 1->2->5
 *    p  c
 *
 * Input: 1->1->1->2->3
 * Output: 2->3
 *
 * NULL  1->1->1->2->3
 * p           c
 *       2->3
 *
 * 1->1
 *    c
 *
 * Algorithm:
 *  c = head, p = null
 *  while c.next !== null
 *  if c.next.val === c.val
 *    while c.next.val === c.val, c = c.next
 *    p.next = c.next, c = c.next
 *  else, p = c, c = c.next
 *
 *  return head
 */

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const leaveDistinct = head => {
  if (!head) return null;

  let dummy = new ListNode(null, head);
  let c = head;
  let p = dummy;

  while (c && c.next !== null) {
    if (c.next.val === c.val) {
      while (c.next.val === c.val) {
        c = c.next;
      }
      if (!p) {
        head = c.next;
        c = c.next;
      } else {
        p.next = c.next;
        c = c.next;
      }
    } else {
      p = c;
      c = c.next;
    }
  }
  return dummy.next;
};

/**
 * TESTS
 */

const node1 = new ListNode('a');
const node2 = new ListNode('c');
const node3 = new ListNode('c');
const node4 = new ListNode('d');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

console.log(leaveDistinct(node1));
