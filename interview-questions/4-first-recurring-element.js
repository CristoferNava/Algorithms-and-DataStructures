// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// It should return 1

// Given an array = [2, 3, 4, 5]
// It should return undefined 

function firstRecurringElement(arr1) {
  let arr2 = [];
  
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return arr1[i];
      }
    }
    arr2.push(arr1[i]);
  }
  return undefined;
}

let arr1 = [2, 3, 4, 5];
console.log(firstRecurringElement(arr1));
// Time Complexity: O(n^2)