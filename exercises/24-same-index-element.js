function sameIndexElement(arr, pos, elements) {
  if (arr.length !== pos) {
    if (arr[pos] === pos) {
      elements.push(pos);
    }
    return sameIndexElement(arr, pos + 1, elements);
  }

  return elements;
}

let array = [0, 23, 22, 3, 12, 15, 6]

// La primera vez que llamamos la función pasamos el arreglo a revisar, el índice
// inicial y el arreglo que va a estar almacenando los números que cumplan con 
// la propiedad de que su valor es el mismo que su posición (índice) del arreglo.

let sameIndexElements = sameIndexElement(array, 0, []);