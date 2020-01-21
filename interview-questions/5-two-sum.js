// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.
// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9, return [0, 1]

// First solution (naive one)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

const array = [1, 3, 11, 2, 5, 8, 12];
const target = 4;
console.log(twoSum(array, target));