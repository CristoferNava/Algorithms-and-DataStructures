function matrixProduct(matrixA, matrixB) {
  let matrixC = [];
  for (let i = 0; i < matrixA.length; i++) {
    matrixC[i] = []
  }
  
  // Cálculo del producto de las matrices
  for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixB.length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixB.length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      matrixC[i][j] = sum;
    }
  }

  return matrixC;
}

let matrixA = [[3, 1],
               [4, 2],
               [1, 3]];

let matrixB = [[7, 5],
               [4, 1]];

console.log(matrixProduct(matrixA, matrixB));