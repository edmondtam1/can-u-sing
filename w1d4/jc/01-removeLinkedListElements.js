/**
 * Input: ListNode (head), Integer (val)
 * Output: ListNode (head)
 *
 * Algorithm:
 * - Iterate from head to null
 * - Set a pointer to the current ListNode
 * - while current
 *   - If current.next.val === val, change current.next to current.next.next
 *   - else, increment current
 * - if head.val === val return head.next, otherwise return head
 *
 * 1->2->6->3->4->5->6, val=6
 *    c
 * 1->2->3->4->5->6-null, val=6
 *             c
 * 1->2->3->4->5->null, val=6
 *             c
 */

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const removeElements = (head, val) => {
  current = head;

  while (current) {
    if (current.next && current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  if (head && head.val === val) {
    return head.next;
  } else {
    return head;
  }
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

console.log(removeElements(node1, 'c'));
console.log(node2);
