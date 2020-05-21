/**
 * Input: ListNode (head)
 * Output: ListNode (head)
 *
 * Algorithm:
 * - p = null
 * - c = head
 *
 * - while c
 * - let n = c.next
 * - c.next = prev
 * - p = c
 * - c = n
 *
 * return p
 *
 * 1->2->3->4->5->NULL
 * NULL->1->2->3->4->5->NULL
 *    p  c  n
 */

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const revereseList = head => {
  let p = null;
  let c = head;

  while (c) {
    let n = c.next;
    c.next = p;
    p = c;
    c = n;
  }

  return p;
};

/**
 * TESTS
 */

const node1 = new ListNode('a');
const node2 = new ListNode('b');
const node3 = new ListNode('c');
const node4 = new ListNode('d');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null;

console.log(revereseList(node1));
console.log(node1, node2, node3, node4);
