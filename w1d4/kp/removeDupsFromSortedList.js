/*
-------------UNDERSTANDING THE PROBLEM-----------------
Given a sorted linked list, delete all duplicates such that each element appear
only once.

INPUT: head of linked list
OUTPUT: head of linked list


*/

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

var deleteDuplicates = function(head) {
  let curr = head;

  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next;
    }
  }

  return head;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(2);
let node4 = new ListNode(3);
let node5 = new ListNode(4);
let node6 = new ListNode(4);
let node7 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

deleteDuplicates(node1);
