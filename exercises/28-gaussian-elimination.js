function gaussianElimination(matriz) {
  for (let a = 0; a < matriz.length; a++) {
    let k = matriz[a][a];
    for (let x = 0; x < matriz.length + 1; x++) {
      matriz[a][x] = matriz[a][x] / k;
    }
    for (let i = 0; i < matriz.length; i++) {
      let m = matriz[i][a];
      for (let j = 0; j < matriz.length + 1; j++) {
        if (i === a) {
          continue;
        }
        matriz[i][j] = matriz[i][j] - matriz[a][j] * m;
      }
    }
  }

  console.log(matriz);
}

let matriz = [[1, -2, 9, 8],
              [3, 1, -1, 3],
              [2, 8, 1, -5]];

gaussianElimination(matriz);