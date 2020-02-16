function evaluaciones(n) {
  // Capturamos las calificaciones de las 3 evaluaciones para cada alumno
  let alumnosCal = []; // 1
  for (let i = 0; i < n; i++) { // n
    let alumonoCal = 0;
    for (let j = 0; j < 3; j++) { // 3 => n * 3
      let cal = prompt(`Introduzca la calificación del examen ${j+1}`);
      alumnoCal += cal;
    }
    // Agregamos el promedio del alumno a lista de promedios general
    alumnosCal.push(alumonoCal/3); // 1
  }

  // Calculamos el promedio grupal
  let promedioGrupal = 0; // 1
  for (let i = 0; i < n; i++) { // n
    promedioGrupal += alumnosCal[i];
  }
  promedioGrupal = promedioGrupal / n; // 1

  // Revisamos la condición
  if (promedioGrupal < 60) {
    // Realizamos otras dos evaluaciones a los n alumnos
    for (let i = 0; i < n; i++) { // n
      let alumonoCal = 0;
      for (let j = 0; j < 2; j++) { // 2 => n * 2
        let cal = prompt(`Introduzca la calificación del examen ${j+1}`);
        alumnoCal += cal;
      }
      // Le agregamos sus nuevas calificaciones cada alumno
      // splice es el equivalente a insert
      alumnosCal.splice(1, 0, alumnoCal / 2);
    }
    // Volvemos a revisar el promedio grupal
    promedioGrupal = 0; // 1
    for (let i = 0; i < n; i++) { // n
      promedioGrupal += alumnosCal[i];
    }
    promedioGrupal = promedioGrupal / n; // 1
  }

  return promedioGrupal; // 1
}
// Complejidad de tiempo: O(7n) => O(n)
// Cota inferior: O(4n)
// Cota superior: O(7n)
// El cuello de botella se produce si se entra en el if