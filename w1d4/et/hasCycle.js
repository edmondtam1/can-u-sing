// https://leetcode.com/problems/linked-list-cycle/

// Given a linked list, determine if it has a cycle in it.

// 1->2->3->4, 2
//     <----:
//          s
//          f null

const hasCycle = head => {
  if (!head) return false; // to meet requirements of Leetcode
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    // iterate first
    slow = slow.next;
    fast = fast.next.next;

    // make cycle check
    if (slow === fast) return true;
  }
  return false;
};