// https://leetcode.com/problems/spiral-matrix/description/

// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

const spiralOrder = matrix => {
  let minI = 0;
  let minJ = 0;
  let maxI = matrix.length - 1; // only including the relevant max pointer
  let maxJ = matrix[0].length - 1; // use first array based on assumption that m x n holds
  const numElements = (maxI + 1) * (maxJ + 1);

  let i = 0;
  let j = 0;
  let result = [];
  while (minJ <= maxJ && minI <= maxI) {

    i = minI;
    j = minJ;
    for (j; j < maxJ; j++) {
      console.log('first', i, j);
      result.push(matrix[i][j]);
      if (result.length === numElements) return result;
    }

    for (i; i < maxI; i++) {
      console.log('second', i, j);
      result.push(matrix[i][j]);
      if (result.length === numElements) return result;
    }

    for (j; j > minJ; j--) {
      console.log('third', i, j);
      result.push(matrix[i][j]);
      if (result.length === numElements) return result;
    }

    for (i; i > minI; i--) {
      console.log('fourth', i, j);
      result.push(matrix[i][j]);
      if (result.length === numElements) return result;
    }
    maxJ--;
    maxI--;
    minJ++;
    minI++;
  }
  return result.concat(matrix[i][j]);
};

// Examples

console.log(
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

// Data structure
// Use a new array and 2 current value pointers (i, j) and 4 trackers of min and max i, j

// Algo
// First, set i, j = 0
// Then, minI = 0, minJ = 0, maxI = m - 1, maxJ = n - 1
// So iterate through using minI, minJ, maxI, maxJ coordinates until currentI and currentJ are equal to either minI/maxI and minJ/maxJ
// For each loop, increase J first, then I, then decrease J, then decrease I until above condition
// At each point, add value of matrix[i][j] to new array

// Want to get the following:
// [0, 0] --> [0, n-1] --> [m-1, n-1] --> [m-1, 0] --> [0 + 1, 0] --> [0 + 1, n- 2] etc
// max j --> max i --> min j --> min i --> repeat until current i === min or max i && current j === min/max j