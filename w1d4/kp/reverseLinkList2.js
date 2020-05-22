/*
-----------------UNDERSTANDING THE PROBLEM-----------------------------
Reverse a linked list from position m to n. Do it in one-pass.

INPUT: array, m, n
OUTPUT: reversed array

RULES:
1 <= m <= n <= list length

------------------EXAMPLES---------------------------------
reverseBetween([1,2,3,4,5], 2, 4) ==> [1, 4, 3, 2, 5];

-----------------DATA STRUCTURE-----------------------
Modify LL in place
3 pointers: prev, curr, nexx

----------------ALGORITHM------------------------------
1. Find the current node at position m
2. Initialize 2 pointers - newLeft & newRight
3. WHILE current node position <= n
  a. newLeft = curr.next
  b. curr.next = newRight
  c. newRight = curr
  d. curr = newLeft
4.
*/

      i
 1    2    3    4    5
[1,   2,   3,   4,   5]  2 & 4


curr = [1]; prev = [null]; i = 1;
prev = [1]; curr = [2]; i = 2;

prev = [1]; curr = [2]; newLeft = [3]; newRight = [] i = 2; 
