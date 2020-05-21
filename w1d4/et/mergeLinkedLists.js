// https://leetcode.com/problems/merge-two-sorted-lists/

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// algo

// start with dummy node
// pointers on both heads
// while pointer for both linkedlists is not null
//   check if value of item1 > item2 or vice versa and set dummy.next to the smaller item
//     increment relevant pointer to next in linkedlist

// while item1.next && item2.next
//   if item1.val < item2.val
//     dummy.next = item1
//     dummy = dummy.next
//     item1 = item1.next
//  else
//     dummy.next = item2
//     dummy = dummy.next
//     item2 = item2.next

const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) return null;
  let dummy = new ListNode();
  let head = dummy;
  let p1 = l1;
  let p2 = l2;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      dummy.next = p1;
      dummy = dummy.next;
      p1 = p1.next;
    } else {
      dummy.next = p2;
      dummy = dummy.next;
      p2 = p2.next;
    }
  }

  if (p1) dummy.next = p1;
  if (p2) dummy.next = p2;
  return head.next;
};

// naive merge - optimised solution using divide & conquer
const mergeKLists = (...lists) => {
  let dummy = new ListNode();
  let head = dummy;

  while (lists.some(list => !!list)) {
    let smallestVal = Infinity;
    let smallest;
    let index;
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue;
      if (lists[i].val < smallestVal) {
        smallestVal = lists[i].val;
        smallest = lists[i];
        index = i;
      }
    }
    dummy.next = smallest;
    dummy = dummy.next;
    lists[index] = smallest.next;
  }

  return head.next;
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

const ll1 = createLinkedList([1, 2, 4]);
const ll2 = createLinkedList([1, 3, 4]);
const ll1output = mergeTwoLists(ll1, ll2);
const ll1ans = createLinkedList([1, 1, 2, 3, 4, 4]);

const ll3 = createLinkedList([1, 4, 5]);
const ll4 = createLinkedList([1, 3, 4]);
const ll5 = createLinkedList([2, 6]);
const ll6 = createLinkedList([3, 7]);
const llkoutput = mergeKLists(ll3, ll4, ll5, ll6);
const llkans = createLinkedList([1, 1, 2, 3, 3, 4, 4, 5, 6, 7]);

console.log(
  testLinkedListsAreEqual(ll1ans, ll1output),
  // testLinkedListsAreEqual(llkoutput, llkans),
);