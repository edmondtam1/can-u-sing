/*
PROBLEM:
Given a matrix of m x n elements (m rows, n columns), return all elements of the
matrix in spiral order.

ALGORITHM:
1. Helper Funtion: transposeArray function that takes a matrix and rotates it counterclockwise
2. Inside spiralOrder initialize result to an empty array
3. WHILE matrix length is > 1
  a. concat first row of the matrix to the result array
  b. transpose the matrix from the next row onwards using the helper function transposeArray
4. WHen the matrix only has 1 array as an element, iterate through the inner array and push num to result

WALKTHROUGH
initially we take the first row of nums and push it to result using ES6 spread operator
[[1, 2, 3],  ==> result = [1, 2, 3]
[4, 5, 6],
[7, 8, 9]]

slice and transpose the next row onward
[[4, 5, 6],  after slice & transposing ==> [[6, 9],
[7, 8, 9]]                                 [5, 8],
                                           [4, 7]]

take the first row of nums and push it to result using ES6 spread operator
[[6, 9],   ==> result = [1, 2, 3, 6, 9]
[5, 8],
[4, 7]]

slice and transpose the next row onward
[[5, 8],  after slice & transposing ==> [[8, 7],
[4, 7]]                                 [5, 4]]

take the first row of nums and push it to result using ES6 spread operator
[[8, 7], ==> result = [1, 2, 3, 6, 9, 8, 7]
[5, 4]]

slice and transpose the next row onward
[[5, 4]]  after slice & transposing ==> [[4], [5]]

take the first row of nums and push it to result using ES6 spread operator
[[4], [5]] ==> result = [1, 2, 3, 6, 9, 8, 7, 4]

slice and transpose the next row onward
[[4], [5]]  after slice & transposing ==> [[5]]

if 1 row remaining(matrix.length === 1), iterate through inner array and push nums to result
result = [1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

function transposeArray(array){
  let newArray = [];

    for (let col = array[0].length - 1; col >= 0; col -= 1) {
      let newRow = [];
        for (let row = 0; row < array.length; row += 1) {
            newRow.push(array[row][col]);
        };

      newArray.push(newRow)
    };
    return newArray;
}

var spiralOrder = function(matrix) {
  let result = [];

  while (matrix.length > 1) {
    result = [...result, ...matrix[0]];
    matrix = transposeArray(matrix.slice(1));
  }

  matrix[0].forEach(num => result.push(num));
  return result;
};

console.log(
  spiralOrder([
    [1],
  ]), // [1]
  spiralOrder([
    [1],
    [2],
    [3]
  ]), // [1, 2, 3]
  spiralOrder([
    [1, 2],
    [3, 4],
    [5, 6]
  ]), // [1, 2, 4, 6, 5, 3]
  spiralOrder([
    [1, 2, 3],
  ]), // [1, 2, 3]
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
  ]), // [1, 2, 3, 6, 5, 4]
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]), // [1, 2, 3, 6, 9, 8, 7, 4, 5]),
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ]), // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]), // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
  ]), // [1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10]
);
