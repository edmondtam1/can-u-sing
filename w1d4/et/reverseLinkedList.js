// https://leetcode.com/problems/reverse-linked-list/#/description

// Reverse a singly linked list.

// algo
// initialize prev = null, curr = head and nextt = head.next
// while nextt is not null
//   set curr.next = prev
//   curr = nextt
//   prev = curr
//   nextt = curr.next
// return curr

const reverseList = head => {
  if (!head) return null;
  let prev = null;
  let curr = head;
  let nextt = head.next;

  while (nextt) {
    curr.next = prev;
    prev = curr;
    curr = nextt;
    nextt = curr.next;
  }
  curr.next = prev;
  return curr;
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
  let expectedHead = expected;
  let outputHead = output;
  while (expectedHead.next && outputHead.next) {
    if (expectedHead.val !== outputHead.val) return false;
    expectedHead = expectedHead.next;
    outputHead = outputHead.next;
  }
  if (expectedHead.next || outputHead.next) return false;
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

const list1 = [1, 2, 3, 4, 5];
const list1ans = [5, 4, 3, 2, 1];

const ll1 = createLinkedList(list1);
const ll1output = reverseList(ll1);
const ll1ans = createLinkedList(list1ans);

console.log(
  testLinkedListsAreEqual(ll1ans, ll1output),
);