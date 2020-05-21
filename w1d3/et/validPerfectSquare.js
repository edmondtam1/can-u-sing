// https://leetcode.com/problems/valid-perfect-square/description/

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

const isPerfectSquare = num => {
  let left = 1;
  let right = num / 2 + 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let square = mid ** 2;
    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

console.log(
  isPerfectSquare(16), //true
  isPerfectSquare(4), //true
  isPerfectSquare(1), //true
  isPerfectSquare(14), //false
  isPerfectSquare(100), //true
  isPerfectSquare(121), //true
  isPerfectSquare(120), //false
);