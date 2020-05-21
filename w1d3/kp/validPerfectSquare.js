/*
------UNDERSTANDING THE PROBLEM---------
Given a positive integer num, write a function which returns True if num is a
perfect square else False.

INPUT: positive integer
OUTPUT: Boolean

RULES:
do not use build-in library functions
1 <= num <= 2^31 - 1

-------EXAMPLES---------------
console.log(isPerfectSquare(16) === true)
console.log(isPerfectSquare(14) === false)

-------ALGORITHM--------------
1. Implement Binary Search Algorithm with the following modification
   a. IF num / mid === mid RETURN TRUE
      ELSE IF num / mid < mid reassign right to mid - 1
      ELSE reassign left to mid + 1
2. RETURN false
*/

function isPerfectSquare(num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (num / mid === mid) {
      return true;
    } else if (num / mid < mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

console.log(isPerfectSquare(16) === true);
console.log(isPerfectSquare(14) === false);
