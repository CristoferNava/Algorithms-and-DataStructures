// Input: Two sorteds arrays [0, 3, 4, 31] [4, 6, 30]
// Output: [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2) {
  const arr3 = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      arr3.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      arr3.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    } 
  }

  return arr3;
}

let n1 = [0, 3, 4, 31];
let n2 = [4, 6, 30];
console.log(mergeSortedArrays(n1, n2));