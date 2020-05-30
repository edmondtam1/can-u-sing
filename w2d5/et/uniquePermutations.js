// input: [1, 1, 2] (nums)
// output: [1, 1, 2]
//         [1, 2, 1]
//         [2, 1, 1]

// In indexes:
// [0, 1, 2]
// [1, 2, 0]
// [2, 0, 1]

// base: candidate.length === nums.length
// skip element if it's current index
// push "next index" to candidate
// for eg, start = 0
//   push nums[start]
//   push nums[start + 1]

//   push nums[start + n]

// store cache for visited indices

// need to revisit this to optimise
const permuteUnique = nums => {
  let result = {};
  const length = nums.length;

  const helper = (arr, curr) => {
    if (curr.length === length) {
      result[curr.join('|')] = curr;
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      let newArr = [...arr];
      newArr.splice(i, 1);
      let newCurr = [num, ...curr];
      helper(newArr, newCurr);
    }
  };

  helper(nums, []);
  return result;
}

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 1]));
console.log(permuteUnique([1, 1, 2, 3]));

// Old

// const helper = (nums, result, candidate, index) => {
//   for (let i = 0; i < nums.length; i++) {
//     let next = (index + i) % nums.length;
//     candidate.push(nums[next]);
//   }
//   if (result.filter(arr => arr.join('') === candidate.join('')).length === 0) {
//     result.push([...candidate]);
//   }

//   index++;
//   if (index < nums.length) {
//     helper(nums, result, [], index);
//   }
// }