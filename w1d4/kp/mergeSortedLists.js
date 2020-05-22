//Merge two sorted linked lists and return it as a new list. The new list should
//be made by splicing together the nodes of the first two lists.

/*
----ALGORITHM---------
1. if l1 is null return l2
2. if l2 is null return l1
3. initialize variable newList and head
3. WHILE l1 & l2 are not null
   a. create new list nodes
   b. if l1.val < l2.val set new list node val to l1 val
   c. if l1.val > l2.val set new list node val to l2 val

*/

var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  let newList;
  let head;

  while (l1 && l2) {
    if (!head) {
      head = newList = new ListNode();
    } else {
      newList.next = new ListNode();
      newList = newList.next;
    }
    if (l1.val < l2.val) {
      newList.val = l1.val;
      l1 = l1.next;
    } else {
      newList.val = l2.val;
      l2 = l2.next;
    }
  }

  if (l1) {newList.next = l1}
  if (l2) {newList.next = l2}
  return head;
};
