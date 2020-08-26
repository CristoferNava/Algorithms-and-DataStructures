function vidaMedia(elemento) {
  let vidaMedia; // 1
  if (elemento === 'carbono') {
    vidaMediaPorcentaje = 100;
    // Calculamos la vida media a los 1000 segundos
    for (let i = 0; i < 1000; i++) { // 1000
      vidaMedia -= vidaMedia ** 97;
      if (vidaMedia < 0) {
        vidaMedia = 0; // El elemento ha decaido
        break;
      }
    }
  }
  if (elemento === 'uranio') { // 1000
    // Calculamos la vida media a los 1000 segundos
    for (let i = 0; i < 1000; i++) {
      vidaMedia -= vidaMedia ** 0.03;
      if (vidaMedia < 0) {
        vidaMedia = 0; // El elemento ha decaido
        break;
      }
    }
  }

  return vidaMedia; // 1
}
// Complejidad de tiempo: O(c)
// Cota superior: O(c)
// Cota inferior: O(c)
// Cuello de botella: No hay un cuello de botella, puesto que tenemos que ver 
// sólo 1000 segundos, si fuera n en lugar de 1000 sería otra historia