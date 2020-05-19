/**
 * Input: Array (m x n elements)
 * Output: Array (elements in spiral order)
 */

const spiralMatrix = matrix => {
  if (!matrix[0]) return [];

  const result = [];

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startColumn = 0;
  let endColumn = matrix[0].length - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // First row
    for (let i = startColumn; i <= endColumn; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++; // 1

    // Last column
    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endColumn]);
    }
    endColumn--; // 1

    // Last row
    for (let i = endColumn; i >= startColumn; i--) {
      if (startColumn === endColumn) break;
      result.push(matrix[endRow][i]);
    }
    endRow--;

    // First col
    for (let i = endRow; i >= startRow; i--) {
      result.push(matrix[i][startColumn]);
    }
    startColumn++;

    // Middle row
    for (let i = startColumn; i <= endColumn; i++) {
      result.push(matrix[startRow][i]);
    }
    startColumn++;
    startRow++;
  }

  return result;
};

// Test cases
console.log(spiralMatrix([[2, 3]]));

console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [1,2,3,6,9,8,7,4,5]
// [0,0]..[0, 2] === [0,0]..[0, len-1]
// [1, 2]..[2, 2]
// [2, 1]..[2, 0]
// [1, 0]..[1, 1]

console.log(
  spiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
// [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
