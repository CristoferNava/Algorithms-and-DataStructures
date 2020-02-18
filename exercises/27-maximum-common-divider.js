function maximumCommonDivider(number1, number2) {
  let dividersNumber1 = [];
  let dividersNumber2 = [];

  for (let i = 1; i <= number1; i++) {
    if (number1 % i === 0) {
      dividersNumber1.push(i);
    }
  }

  for (let i = 1; i <= number2; i++) {
    if (number2 % i === 0) {
      dividersNumber2.push(i);
    }
  }

  let commonsDividers = [];
  for (let i = 0; i < dividersNumber1.length; i++) {
    for (let j = 0; j < dividersNumber2.length; j++) {
      if (dividersNumber1[i] === dividersNumber2[j]) {
        commonsDividers.push(dividersNumber1[i]);
      }
    }
  }

  console.log(dividersNumber1);
  console.log(dividersNumber2);
  console.log(commonsDividers);
  console.log(commonsDividers[commonsDividers.length - 1]);
}

maximumCommonDivider(10, 20);