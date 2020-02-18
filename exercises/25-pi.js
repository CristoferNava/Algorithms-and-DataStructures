function estimatePi(n, i, sum) {
  if (i < n) {
    sum += ((-1)**i) / (2*i + 1);
    return estimatePi(n, i + 1, sum);
  }

  return sum * 4;
}

// La primera vez que mandamos llamar la función le decimos que queremos usar
// los primeros 1000 términos, el valor inicial del contador, en este caso 0
// para que vaya de 0 a 1000 (sin incluir 1000), así nos aseguramos de obtener
// el valor para 1000 términos, por último pasamos el valor inicial del parámetro
// encargado de hacer la suma (por le pasamos cero)
let piValue = estimatePi(1000, 0, 0);
console.log(piValue);