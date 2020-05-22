//Reverse a singly linked list.

var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while(head !== null){
    prev = head;
    head = head.next;
    prev.next = curr;
    curr = prev;
  }

  return curr;
}
