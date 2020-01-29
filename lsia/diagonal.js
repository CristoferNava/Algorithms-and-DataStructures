const distance = (p1, p2) => Math.sqrt(((p1[0] - p2[0]) ** 2) + ((p1[1] - p2[1]) ** 2));

let matriz = [[1, 1],
              [1, 3],
              [3, 4],
              [3, 1]];

let min = distance(matriz[0], matriz[1]);
let max = min;

for (let i = 0; i < matriz.length - 1; i++) {
  for (let j = i + 1; j < matriz.length; j++) {
    let distancePts = distance(matriz[i], matriz[j]);
    if (distancePts < min) {
      min = distancePts;
    }
    if (distancePts > max) {
      max = distancePts;
    }
  }
}

console.log(min, max);