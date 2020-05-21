// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// algo
//   1-1-2-2-3-3
//       c 
//       n
// 
// start with c at head and n at head.next
// move n forward until it's no longer pointing at a node with the same value as c
//   here, make c point at n
//   make n point at c.next
// continue until the end of the list

const deleteDuplicates = (head) => {
  if (!head) return null;
  let curr = head;
  let nextt = head.next;

  while (nextt) {
    while (nextt && nextt.val === curr.val) {
      nextt = nextt.next;
    }

    curr.next = nextt;
    if (!nextt) break;
    curr = curr.next;
    nextt = curr.next;
  }
  return head;
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

const list1 = [1, 1, 2];
const list1ans = [1, 2];

const ll1 = createLinkedList(list1);
const ll1output = deleteDuplicates(ll1);
const ll1ans = createLinkedList(list1ans);

const list2 = [1, 1, 2, 3, 3];
const list2ans = [1, 2, 3];

const ll2 = createLinkedList(list2);
const ll2output = deleteDuplicates(ll2);
const ll2ans = createLinkedList(list2ans);
console.log(
  testLinkedListsAreEqual(ll1ans, ll1output),
  testLinkedListsAreEqual(ll2ans, ll2output)
);