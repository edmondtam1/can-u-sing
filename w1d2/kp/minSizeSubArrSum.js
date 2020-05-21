/*
PROBLEM:
Given an array of n positive integers and a positive integer s, find the minimal
length of a contiguous subarray of which the sum ≥ s. If there isn't one, return
0 instead.

INPUT: array
OUTPUT: integer

RULES: Has to be contiguous

TEST CASES:
minSubArrayLen(7, [2,3,1,2,4,3]) ==> 2

ALGORITHM:
1. Initialize start to 0
2. Initialize sum to 0
3. Loop through the array
  a. add array[i] to the sum
  b. WHILE sum >= s
    i.
*/

var minSubArrayLen = function(s, nums) {
    let result = [];
    let sum = 0;
    let start = 0

    for(let i = 0; i < nums.length; i+=1){
        sum += nums[i]
        while(sum >= s){
