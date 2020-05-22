/*
# input: unsorted array
# output: sorted array
def mergesort(arr)
  return arr if arr.size == 1

  left, right = left_side(arr), right_side(arr)
  left_sorted = mergesort(left)
  right_sorted = mergesort(right)

  merge(left_sorted, right_sorted)
end

def merge(a1, a2) # a1 and a2 are already sorted
  # O(n)
  # pointers on a1 and a2
  # copy smaller pointer, then increment
end

*/

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2) - 1;
  let leftSorted = mergeSort(arr.slice(0, mid+1));
  let rightSorted = mergeSort(arr.slice(mid+1, arr.length));

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    console.log(left, right);
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

let a = [5, 2, 7, -1, 2]  //==> [-1, 2, 2, 5, 7]
console.log(mergeSort(a));
