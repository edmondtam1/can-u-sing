// https://leetcode.com/problems/reverse-linked-list-ii/#/description

// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// algo
// three pointers: p = null, c = head, n (not set)
// two anchors: start and end (???)
// one index / tracker - note list is one-based
// traverse the list:
//   while index < m
//     p = c
//     c = c.next
//     index++
// once at the start of the index, use three pointer method
// while tracker < n && c.val !== null
//   if prev is null, don't do anything
//     else set curr.next to prev
//   increment index
//   set prev = curr
//   set curr = nextt
//   set nextt = nextt.next

const reverseBetween = (head, m, n) => {
  let root = new ListNode(-1, head);

  let index = 1;
  let prev = root;
  let current = head;
  let nextt = current.next;

  // traverse until m is reached
  while (index < m && current) {
    index++;
    prev = current;
    current = nextt;
    nextt = nextt.next;
  }

  let start = prev; // last unreversed list item
  let end = current; // first reversed list item

  while (index < n && current) {
    index++;
    prev = current;
    current = nextt;
    nextt = nextt.next;
    current.next = prev;
  }
  start.next = current;
  end.next = nextt;

  return root.next;
};

// test cases

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const testLinkedListsAreEqual = (expected, output) => {
  if (expected === null && output === null) return true;
  while (expected.next && output.next) {
    if (expected.val !== output.val) return false;
    expected = expected.next;
    output = output.next;
  }
  if (expected.next || output.next) return false;
  return true;
};

const createLinkedList = array => {
  if (array.length === 0) return new ListNode(0);
  let next = null;

  for (let i = array.length - 1; i >= 0; i--) {
    const node = new ListNode(array[i], next);
    next = node;
  }
  return next;
}

const ll1 = createLinkedList([1, 2, 3, 4, 5]);
const ll1output = reverseBetween(ll1, 2, 4);
const ll1ans = createLinkedList([1, 4, 3, 2, 5]);

const ll2 = createLinkedList([1, 2, 3, 4, 5]);
const ll2output = reverseBetween(ll2, 1, 4);
const ll2ans = createLinkedList([4, 3, 2, 1, 5]);

console.log(
  testLinkedListsAreEqual(ll1ans, ll1output),
  testLinkedListsAreEqual(ll2ans, ll2output),
);