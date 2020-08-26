function matrixProduct(matrixA, matrixB) {
  let matrixC = []; // O(1)
  for (let i = 0; i < matrixA.length; i++) { // O(n)
    matrixC[i] = []
  }
  
  // Cálculo del producto de las matrices
  for (let i = 0; i < matrixA.length; i++) { // O(n)
    for (let j = 0; j < matrixB.length; j++) { // O(m) * O(n) --> O(m * n)
      let sum = 0;
      for (let k = 0; k < matrixB.length; k++) { // O(m) * O(m * n) --> O(m * m * n)
        sum += matrixA[i][k] * matrixB[k][j];
      }
      matrixC[i][j] = sum;
    }
  }

  return matrixC; // O(1)
}

let matrixA = [[3, 1],
               [4, 2],
               [1, 3]];

let matrixB = [[7, 5],
               [4, 1]];

// Time Complexity: m^2 * n + n + c => O(m^2 * n + n + c)
// Tomando en cuenta sólo el término mayor: O(m^2 * n)

// Peor caso: El programa ejecuta todas los procesos independiente del tamaño de
// las matrices por lo que O(m^2 * n + n)

// Mejor caso: El programa ejecuta todas los procesos independiente del tamaño de
// las matrices por lo que O(m^2 * n + n)

let result = matrixProduct(matrixA, matrixB);
console.log(result);