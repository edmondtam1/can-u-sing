/**
 * Input: ListNode (head)
 * Output: ListNode (head)
 *
 * Algorithm:
 * - Iterate from head to null
 * - Set a pointer to the current ListNode
 * - while current
 *   - If current.next.val === current.val, change current.next to current.next.next
 *   - else, increment current
 */

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const removeDuplicates = (head, val) => {
  current = head;

  while (current) {
    if (current.next && current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
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

console.log(removeDuplicates(node1));
