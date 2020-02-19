function equalsArrays(arr1, arr2, pos, equals) {
  if (pos < arr1.length) {
    if (arr1[pos] !== arr2[pos]) {
      equals = false;
    }
    return equalsArrays(arr1, arr2, pos + 1, equals);
  }

  return equals;
}

let array1 = [1, 2, 3, 5, 8];
let array2 = [1, 2, 3, 5, 3];
let array3 = [1, 2, 3, 5, 8];

// La primera vez que llamamos a la función asumimos que los arreglos son iguales
// (bandera) dentro de la función revisamos la bandera y en caso de que no sean 
// iguales cambiamos el valor de la bandera
let result1 = equalsArrays(array1, array2, 0, true);
let result2 = equalsArrays(array1, array3, 0, true);

console.log(result1);
console.log(result2);