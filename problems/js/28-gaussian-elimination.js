function gaussianElimination(augmentedMatrix) {
  for (let i = 0; i < augmentedMatrix.length; i++) { // O(n)
    let value = augmentedMatrix[i][i]; 
    for (let x = 0; x < augmentedMatrix.length + 1; x++) { // O(n+1) * O(n) --> O(n^2 + n) 
      augmentedMatrix[i][x] = augmentedMatrix[i][x] / value;
    }
    for (let j = 0; j < augmentedMatrix.length; j++) { // O(n) * O(n) --> O(n^2)
      let c = augmentedMatrix[j][i];
      for (let k = 0; k < augmentedMatrix.length + 1; k++) { // O(n+1) * O(n^2) --> O(n^3 + n^2)
        if (j === i) {
          continue;
        }
        augmentedMatrix[j][k] = augmentedMatrix[j][k] - augmentedMatrix[i][k] * c;
      }
    }
  }

  return augmentedMatrix; // O(1)
}

let augmentedMatrix = [[1, -2, 9, 8],
                       [3, 1, -1, 3],
                       [2, 8, 1, -5]];
// Time Complexity: n^3 + n^2 + n^2 + n + c => O(n^3 + 2n^2 + n + c)
// Tomando en cuenta el mayor término O(n^3)

// Peor caso: Se ejecutan todos los ciclos
// O(n^3 + 2n^2 + n + c)

// Mejor caso: Aún con el if sólo se salta una instrucción pero se sigue entrando
// al peor caso (el tercer for anidado)
// O(n^3 + 2n^2 + n + c)

let result = gaussianElimination(augmentedMatrix);
console.log(result);