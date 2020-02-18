function gaussianElimination(augmentedMatrix) {
  for (let i = 0; i < augmentedMatrix.length; i++) {
    let value = augmentedMatrix[i][i];
    for (let x = 0; x < augmentedMatrix.length + 1; x++) {
      augmentedMatrix[i][x] = augmentedMatrix[i][x] / value;
    }
    for (let j = 0; j < augmentedMatrix.length; j++) {
      let c = augmentedMatrix[j][i];
      for (let k = 0; k < augmentedMatrix.length + 1; k++) {
        if (j === i) {
          continue;
        }
        augmentedMatrix[j][k] = augmentedMatrix[j][k] - augmentedMatrix[i][k] * c;
      }
    }
  }

  return augmentedMatrix;
}

let augmentedMatrix = [[1, -2, 9, 8],
                       [3, 1, -1, 3],
                       [2, 8, 1, -5]];