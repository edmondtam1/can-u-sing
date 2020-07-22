/*
---------PROBLEM-----------
Find the maximum number in an array of numbers. Return that number.

INPUT: array
OUPUT: largest integer

----------EXAMPLES-------------
maxNum([4, 3, 7]) => 7
maxNum([7]) => 7
maxNum([4, 3, -7]) => 4

--------DATA STRUCTURES---------
None, use recursion

------ALGORITHM O(N) Time, O(1) Space---------------
1. initialize variable max to first element of array
2. Iterate through array, if current element > max reassign max to current element
3. return max

------ALGORITHM O(N) Time, O(N) Space---------------
1. base case: if arr.length is 1 return element
2. return max of arr[0] & maxNum(arr[1...N]);
*/

// function maxNum(arr) {
//   let max = arr[0];
//
//   for (let i = 1; i < arr.length; i += 1) {
//     if (max < arr[i]) max = arr[i];
//   }
//
//   return max;
// }

function maxNum(arr) {
  if (arr.length === 1) return arr[0];

  return Math.max(arr[0], maxNum(arr.slice(1, arr.length)));
}

console.log(maxNum([4, 3, 7]));
console.log(maxNum([7]));
console.log(maxNum([4, -7]));
