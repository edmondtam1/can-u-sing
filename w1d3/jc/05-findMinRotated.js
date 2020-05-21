/**
 * Input: Array of integers sorted in ascending order rotated once
 * Output: Integer (min number)
 *
 * Algo
 * - If mid+1 < mid, return mid+1
 * - If mid-1 > mid, return mid
 *  - else
 *    - if midVal < endVal, look left, otherwise look right
 *
 * [4,5,6,7,0,1]
 * [4,5] 6 [7,0,1]
 * [7] 0 [1]
 *
 * [5,1,2,3,4]
 *
 */

const findMin = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid + 1] < nums[mid]) {
      return nums[mid + 1];
    } else if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    } else if (nums[mid] < nums[end]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return nums[0];
};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
