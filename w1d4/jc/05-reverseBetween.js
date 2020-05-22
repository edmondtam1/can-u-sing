/**
 * Input: ListNode (head), Integer (m: reverse from), Integer (n: reverse to)
 * Output: ListNode (head)
 *
 * Example
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
 *
 * 1<-2<-3<-4->5->NULL
 *          p  c  n
 * b  s
 * 1<-2<-3<-4->5->NULL
 *          p  c  n
 * b  s
 *
 *
 * Algorithm:
 * SET POINTER AT START
 * counter = 1
 * prev = null
 * current = head
 * while counter < m
 *    prev = current
 *    current = current.next
 *    counter++
 *
 * SET POINTERS TO FIX FINAL CONNECTIONS
 * start = current
 * beforeStart = prev
 *
 * REVERSE WITHIN BOUNDS
 * while counter <= n
 *   let nx = c.next
 *   c.next = p
 *   p = c
 *   c = nx
 * counter++
 *
 * FINAL FIXES
 * IF we didn't start reversing from the beginning
 *   beforeStart.next = prev
 * else, if we did start reversing from the head
 *   head = prev
 *
 * POINT START to first node after end of reversal bounds
 *   start.next = current
 */

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

const reverseBetween = (head, m, n) => {
  if (!head.next) return head;

  let counter = 1;
  let current = head;
  let prev = null;

  while (counter < m) {
    prev = current;
    current = current.next;
    counter++;
  }

  let beforeStart = prev;
  let start = current;

  while (counter <= n) {
    let nx = current.next;
    current.next = prev;
    prev = current;
    current = nx;
    counter++;
  }

  if (beforeStart) {
    beforeStart.next = prev;
  } else {
    head = prev;
  }
  start.next = current;

  return head;
};

/**
 * TESTS
 */

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

reverseBetween(node1, 2, 4);
console.log(node5);
