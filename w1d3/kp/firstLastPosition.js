/*
---------UNDERSTANDING THE PROBLEM------------
Given an array of integers nums sorted in ascending order, find the starting and
ending position of a given target value.

INPUT: sorted array of integers & target value
OUTPUT: array with the first and last index position of target

RULES:
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].

----------EXAMPLES------------------------
searchRange([5,7,7,8,8,10], 8) ==> [3, 4]
searchRange([5,7,7,8,8,10], 6) ==> [-1, -1]

--------ALGORITHM O(N) Time----------------------
1. IMPLEMENT Binary Search Algorithm with modification
  IF nums[mid] > target set end to mid - 1
  ELSE IF nums[mid] < target set start to mid + 1
  ELSE IF nums[mid] === target
    i. initialize start & end to mid
    ii. WHILE nums[start] === target && start > -1
      a. decremnt start
    iii.WHILE nums[end] === target && end < nums.length
      a. increment end
    iv. return [start, end]
2. RETURN [-1, -1]


--------ALGORITHM O(LogN) Time----------------------
1. Use binarySearch to find the first occurence of target value
2. Use binarySearch to find the last occurence of target value
*/
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let firstIndex = -1;
  let lastIndex = -1;

  //find first occurence

  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      firstIndex = mid;
      right = mid - 1;
    }
  }

  //find last occurence
  left = 0;
  right = nums.length - 1;

  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      lastIndex = mid;
      left = mid + 1;
    }
  }

  return [firstIndex, lastIndex];
}

console.log(searchRange([1,1,1,1,5,7,7,8,8,10], 1))
console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
