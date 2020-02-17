function matrizProduct(matrizA, matrizB) {
  let matrizC = [];
  for (let i = 0; i < matrizA.length; i++) {
    matrizC[i] = []
  }
  
  for (let i = 0; i < matrizA.length; i++) {
    for (let j = 0; j < matrizB.length; j++) {
      let sum = 0;
      for (let k = 0; k < matrizB.length; k++) {
        sum += matrizA[i][k] * matrizB[k][j];
      }
      matrizC[i][j] = sum;
    }
  }

  return matrizC;
}

let matrizA = [[3, 1],
               [4, 2],
               [1, 3]];

let matrizB = [[7, 5],
               [4, 1]];

console.log(matrizProduct(matrizA, matrizB));