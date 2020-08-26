// Función que recibe dos puntos y regresa la distancia entre ellos
const distancia = (p1, p2) => Math.sqrt(((p1[0] - p2[0]) ** 2) + ((p1[1] - p2[1]) ** 2));

function distanciaParadas(coordanadas) {
  let distancias = []; // 1
  let distanciaParadas; // 1

  for (let i = 0; i < coordanadas.length - 1; i++) { // n - 1
    for (let j = i + 1; j < coordanadas.length; j++) { // n / 2
      distanciaParadas = distancia(coordanadas[i], coordanadas[j]);
      distancias.push(distanciaParadas);
    }
  }
  return distancias; // 1
}
// Complejidad O(n^2/2 - n/2) => O(n^2)
// Cota inferior: O(n^2/2 - n/2)
// Cota superior: O(n^2/2 - n/2)
// Cuello de botella: El ciclo externo O(n - 1)