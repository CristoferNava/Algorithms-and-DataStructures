let matriz = [[1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]];

function printMatriz(matriz, i, j) {
  if (i !== matriz.length) {
    console.log(matriz[i][j]);
    if (j === matriz.length) {
      j = 0;
    }
    if (j < matriz.length) {
      i = 0;
      j++;
      printMatriz(matriz, i, j);
    }
  }
}

printMatriz(matriz, 0, 0);