/**
 * Input: ListNode (l1), ListNode (l2)
 * Output: List (splice together 2 heads)
 *
 * Algorithm:
 * c1 = l1.head
 * c2 = l2.head
 *
 * currentMerged
 * if c1.val < c2.val
 *   currentMerged = c1
 *   c1 = c1.next
 * else
 *  currentMerged = c2
 *   c2 = c2.next
 * head = currentMerged
 *
 * while c1&&c2
 *   if c1.val < c2.val
 *     currentMerged.next = c1
 *     c1 = c1.next
 *   else
 *     currentMerged.next = c2
 *     c2 = c2.next
 *   currentMerged = currentMerged.next
 *
 * // Now we only have nodes from one list left
 * if c1
 *   currentMerged.next = c1
 * else if c2
 *   currentMerged.next = c2
 *
 * return head
 */

/**
 * Example
 *
 * 1->2->4, 1->3->4
 * c1       c2
 *
 * 1->2->4, 1->3->4
 *       c1         c2
 * 1->3->4
 * m
 *
 * 1->1->2->3->4-4
 *             m
 */

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const mergeTwoLists = (l1, l2) => {
  let c1 = l1;
  let c2 = l2;
  let currentMerged;
  let head;

  if (!c1) return c2;
  if (!c2) return c1;
  if (!c1 && !c2) return null;

  if (c1.val < c2.val) {
    currentMerged = c1;
    c1 = c1.next;
  } else {
    currentMerged = c2;
    c2 = c2.next;
  }
  head = currentMerged;

  while (c1 && c2) {
    if (c1.val < c2.val) {
      currentMerged.next = c1;
      c1 = c1.next;
    } else {
      currentMerged.next = c2;
      c2 = c2.next;
    }
    currentMerged = currentMerged.next;
  }

  if (c1) {
    currentMerged.next = c1;
  } else {
    currentMerged.next = c2;
  }

  return head;
};

/**
 * TESTS
 */

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(4);

const node4 = new ListNode(1);
const node5 = new ListNode(3);
const node6 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = null;
node4.next = node5;
node5.next = node6;
node6.next = null;

console.log(mergeTwoLists(node1, node4));
