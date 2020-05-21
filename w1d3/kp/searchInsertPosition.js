/*
--------UNDERSTANDING THE PROBLEM------------
Given a sorted array and a target value, return the index if the target
is found. If not, return the index where it would be if it were inserted in order.

INPUT: sorted array & target value
OUTPUT: index value

ASSUMPTIONS: There will be no duplicates in the array

--------EXAMPLES-----------------------------
searchInsert([1,3,5,6], 5) ==> 2
searchInsert([1,3,5,6], 2) ==> 1
searchInsert([1,3,5,6], 7) ==> 4
searchInsert([1,3,5,6], 0) ==> 0
searchInsert([1,3,5,6], -1) ==> 0
searchInsert([], 5) ==> 0
searchInsert([1,2,3,4,5], 4) ==> 3
searchInsert([4,5,7,8,9], 5) ==> 1
searchInsert([1,3], 0) ==> 0

-------ALGORITHM O(N-------------------------
1. Loop throught the array
   i. return current index if current elem === target
   ii. if current elem > target, return current index - 1;


-------ALGORITHM O(LogN)-------------------------
1. IMPLEMENT binary seach logic into the function
  a. IF target value is found, RETURN target value
2.RETURN left
*/

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 0 || nums[0] > target) {return 0;}

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return left;
}

console.log(searchInsert([1,3,5,6], 5) === 2);
console.log(searchInsert([1,3,5,6], 2) === 1);
console.log(searchInsert([1,3,5,6], 7) === 4);
console.log(searchInsert([1,3,5,6], 0) === 0);
console.log(searchInsert([1,3,5,6], -1) === 0);
console.log(searchInsert([], 5) === 0);
console.log(searchInsert([1,2,3,4,5], 4) === 3);
console.log(searchInsert([4,5,7,8,9], 5) === 1);
console.log(searchInsert([1,3], 0) === 0);
