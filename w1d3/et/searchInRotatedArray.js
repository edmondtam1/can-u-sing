// https://leetcode.com/problems/search-in-rotated-sorted-array/#/description

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// algo
// use left, right and mid
// check if target is between val(left) && val(mid - 1)
//   if so, then target is in left
//     right = mid
//   else, target is in right
//     left = mid
//   else target is either current mid or -1