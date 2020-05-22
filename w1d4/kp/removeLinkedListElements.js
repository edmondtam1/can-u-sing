/*
-------UNDERSTANDING THE PROBLEM---------------
Remove all elements from a linked list of integers that have value val.

INPUT: head of linked list, value
OUTPUT: head of linked list

-------EXAMPLES----------------------
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

---------DATA STRUCTURE-------------
Modify LL in place

--------ALGORITHM---------------
1. IF head is null return null
2. intitialize variables prev, curr to head and head.next respectively
3. WHILE curr does not equal null
  a. IF curr.val equals val change prev nodes next value to curr.next
     ELSE reassign prev to curr, curr to curr.next
4. If the head value === target change head to head.next
5. RETURN head;
*/
function ListNode(val, next) {
  this.val = (val ? val : 0)
  this.next = (next ? next : null)
}

var removeElements = function(head, val) {
  if (!head) return null;

  let curr = head.next,
  prev = head;

  while (curr) {
    if (curr.val === val) {
      curr = curr.next;
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next
    }
  }

  if (head.val === val) {
    head = head.next;
  }

  return head;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(6);
let node4 = new ListNode(3);
let node5 = new ListNode(4);
let node6 = new ListNode(5);
let node7 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

removeElements(node1, 6);
