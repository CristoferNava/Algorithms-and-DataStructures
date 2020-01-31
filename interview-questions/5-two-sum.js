// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.
// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9, return [0, 1]

let numbers = [2, 7, 11, 15];
let target = 9;

// First solution (naive one)
function twoSumFirst(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
} // Time Complexity: O(n^2) and Space Complexity: O(1)

function twoSumHash(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.hasOwnProperty(complement) && map[complement] !== i) {
      return [i, map[complement]];
    }
  }
} // Time Complexity: O(n) and Space complexity: O(n)