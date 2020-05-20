/**
 * Input: Array (sorted)
 * Output: Integer (length of array w/out duplicates)
 * 
 * Rules
 * - Elements of array modified in place up to returned length must be all non-duplicates
 * 
 * Algo
 * - Start w at 0 and r at 1
 * - Iterate while r < arr.length
 * - if arr[w] === arr[r], r++
 * - else, w++, then arr[w] = arr[r], then r++
 * - return w
 * 
 * [1,2,1,2]
 *    w
 *        r
 * 
 * [0,0,1,1,1,2,2,3,3,4]
 
 * [0,1,2,3,4,2,2,3,3,4]
 *          w
 *                    r
 */

const removeDuplicates = (nums) => {
  let w = 0;
  let r = 1;

  while (r < nums.length) {
    if (nums[w] === nums[r]) {
      r++;
    } else {
      w++;
      nums[w] = nums[r];
      r++;
    }
  }
  return w + 1;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
