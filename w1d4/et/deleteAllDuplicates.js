// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Return the linked list sorted as well.

// algo
//    D-1-2-3-3-4-4-5
//        a
//                  r
//                    t
//    Result: 2-3-5
// 
// Use 3 pointers: anchor, runner, tester
// Start with anchor at root, runner at root.next (head), tester at root.next.next
// Boolean hasDuplicate
// While tester
//   while runner.val === tester.val
//     set hasDuplicate to true
//     tester++
//   if hasDuplicate is true
//     anchor.next = tester
//   else anchor.next = runner
//   set hasDuplicate to false
//   anchor = runner
//   runner = tester
//   tester = runner.next
//  

// 3 pointers
// const deleteDuplicates = head => {
//   if (!head) return null;
//   let root = new ListNode(-1, null);
//   let anchor = root;
//   let runner = head;
//   let tester = head.next;
//   let hasDuplicate = false;

//   while (runner) {
//     if (!tester) {
//       if (!hasDuplicate) {
//         anchor.next = runner;
//       }
//       break;
//     }

//     while (tester && runner.val === tester.val) {
//       hasDuplicate = true;
//       tester = tester.next;
//     }
//     if (hasDuplicate) {
//       hasDuplicate = false;
//       runner = tester;
//       if (runner) {
//         tester = runner.next;
//       } else {
//         anchor.next = runner;
//       }
//     } else {
//       anchor.next = runner;
//       anchor = runner;
//       runner = anchor.next;
//       tester = runner.next;
//     }
//   }

//   return root.next ? root.next : null;
// };

// 2 pointers
const deleteDuplicates = head => {
  if (!head) return head;
  const root = new ListNode(NaN, head);
  let prev = root;
  let curr = head;
  let dup = false;
  while (curr && curr.next) {
    if (curr.next.val === curr.val) dup = true;
    while (curr.next && curr.next.val === curr.val) {
      curr = curr.next;
    }
    curr = curr.next; // has now come to a non-dup value
    if (dup) {
      prev.next = curr;
    } else {
      prev = prev.next;
    }
    dup = false;
  }
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
  if (array.length === 0) return new ListNode(-1, null);
  let next = null;

  for (let i = array.length - 1; i >= 0; i--) {
    const node = new ListNode(array[i], next);
    next = node;
  }
  return next;
}

const ll1 = createLinkedList([1, 2, 3, 3, 4, 4, 5]);
const ll1output = deleteDuplicates(ll1);
const ll1ans = createLinkedList([1, 2, 5]);

const ll2 = createLinkedList([1, 1, 1, 2, 3]);
const ll2output = deleteDuplicates(ll2)
const ll2ans = createLinkedList([2, 3]);

const ll3 = createLinkedList([1]);
const ll3output = deleteDuplicates(ll3)
const ll3ans = createLinkedList([1]);

// const ll4 = createLinkedList([1, 1]);
// const ll4output = deleteDuplicates(ll4)
// const ll4ans = createLinkedList(null);

console.log(
  testLinkedListsAreEqual(ll1ans, ll1output),
  testLinkedListsAreEqual(ll2ans, ll2output),
  testLinkedListsAreEqual(ll3ans, ll3output),
  // ll4ans === null,
);