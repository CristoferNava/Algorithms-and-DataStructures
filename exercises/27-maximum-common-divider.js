function maximumCommonDivider(number1, number2) {
  let dividersNumber1 = [];
  let dividersNumber2 = [];

  // Cálculamos los divisores del primer número
  for (let i = 1; i <= number1; i++) {
    if (number1 % i === 0) {
      dividersNumber1.push(i);
    }
  }

  // Cálculamos los divisores del segundo número
  for (let i = 1; i <= number2; i++) {
    if (number2 % i === 0) {
      dividersNumber2.push(i);
    }
  }

  // Revisamos los divisores en común de ambos números
  let commonsDividers = [];
  for (let i = 0; i < dividersNumber1.length; i++) {
    for (let j = 0; j < dividersNumber2.length; j++) {
      if (dividersNumber1[i] === dividersNumber2[j]) {
        commonsDividers.push(dividersNumber1[i]);
      }
    }
  }

  // Regrasomos el MCD, el cual fue el último en entrar al arreglo de divisores
  // en común
  return commonsDividers[commonsDividers.length - 1];
}