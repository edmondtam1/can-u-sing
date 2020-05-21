/*
--------UNDERSTANDING THE PROBLEM-----------
Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and
return its index. A peak element is an element that is greater than its neighbors.

INPUT: array of nums
OUTPUT: index of peak

RULES:
nums[i] !== nums[i + 1]
array can contain multiple peaks. Can return any 1 peak
solution should be O(LogN)

--------EXAMPLES----------------------
findPeakElement([1,2,3,1]) ==> 2
findPeakElement([1,2,1,3,5,6,4]) ==> 1 or 5

--------ALGORITHM O(LogN)--------------------
1. Implement Binary Search Algorithm
  a. IF nums[mid] < nums[mid + 1] reassign left to mid + 1
     ELSE reassign right to mid
2. RETURN right if nums[left] < nums[right] else return left
*/

var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left] < nums[right] ? right : left;
}

console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));
