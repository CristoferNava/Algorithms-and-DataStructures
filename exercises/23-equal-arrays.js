function equalsArrays1(arr1, arr2, pos, equals) {
  if (pos < arr1.length) {
    if (arr1[pos] !== arr2[pos]) {
      equals = false;
    }
    return equalsArrays1(arr1, arr2, pos + 1, equals);
  }

  return equals;
}