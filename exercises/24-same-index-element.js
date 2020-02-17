function sameIndexElement(arr, pos, elements) {
  if (arr.length !== pos) {
    if (arr[pos] === pos) {
      elements.push(pos);
    }
    return sameIndexElement(arr, pos + 1, elements);
  }

  return elements;
}