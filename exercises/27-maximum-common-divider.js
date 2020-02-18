function maximumCommonDivider(number1, number2) {
  let dividersNumber1 = []; // O(1)
  let dividersNumber2 = []; // O(1)

  // Cálculamos los divisores del primer número
  for (let i = 1; i <= number1; i++) { // O(n)
    if (number1 % i === 0) {
      dividersNumber1.push(i);
    }
  }

  // Cálculamos los divisores del segundo número
  for (let i = 1; i <= number2; i++) { // O(m)
    if (number2 % i === 0) {
      dividersNumber2.push(i);
    }
  }

  // Revisamos los divisores en común de ambos números
  let commonsDividers = []; // O(1)
  for (let i = 0; i < dividersNumber1.length; i++) { // O(n)
    for (let j = 0; j < dividersNumber2.length; j++) { // O(m) --> O(m * n)
      if (dividersNumber1[i] === dividersNumber2[j]) {
        commonsDividers.push(dividersNumber1[i]);
      }
    }
  }

  // Regrasomos el MCD, el cual fue el último en entrar al arreglo de divisores
  // en común
  return commonsDividers[commonsDividers.length - 1]; // O(1)
}

// Time Complexity: m*n + m + n + c  => O(m*n + m + n + c)
// Tomando en cuenta sólo el término mayor: O(m*n)

// Peor caso: El programa ejecuta todas los procesos puesto que compara los  
// divisores de ambos números O(m*n + m + n + c)

// Mejor caso: El programa ejecuta todas los procesos puesto que compara los  
// divisores de ambos números O(m*n + m + n + c)