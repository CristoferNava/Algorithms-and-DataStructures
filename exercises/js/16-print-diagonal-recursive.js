function printDiagonal(matriz, pos) {
  if (pos !== matriz.length) {
    console.log(matriz[pos][pos]);
    printDiagonal(matriz, pos + 1)
  }
}

let matriz = [[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]];

printDiagonal(matriz, 0);