// https://leetcode.com/problems/remove-linked-list-elements/#/description

// Remove all elements from a linked list of integers that have value val.

// 2-3-4-5-5-6-7, target 5
//     a
//       r

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// const removeElements = (head, val) => {
//   if (!head) return null;
//   let dummy = new ListNode(0, head);
//   let current = dummy;

//   while (current.next) {
//     if (current.next.val === val) {
//       current.next = current.next.next;
//     } else {
//       current = current.next;
//     }
//   }
//   return dummy.next;
// };

const removeElements = (head, val) => {
  if (!head) return null;
  let prev = null;
  let curr = head;

  while (curr) {
    if (curr.val === val) {
      if (prev === null) {
        head = curr.next;
      } else {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};

// test cases

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

const list1 = [2, 3, 4, 5, 5, 6, 7];
const list1ans = [2, 3, 4, 6, 7];

const ll1 = createLinkedList(list1);
const ll1output = removeElements(ll1, 5);
const ll1ans = createLinkedList(list1ans);

const list2 = [5, 5];
const list2ans = [];

const ll2 = createLinkedList(list2);
const ll2output = removeElements(ll2, 5);
const ll2ans = createLinkedList(list2ans);

console.log(
  testLinkedListsAreEqual(ll1ans, ll1output),
  testLinkedListsAreEqual(ll2ans, ll2output)
);