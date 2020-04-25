let counter = 0;
let counter2 = 0;

function inception() {
  if (counter > 3) {
    // we only have the return to base case (the last calle in the stack)
    return 'done';
  }
  console.log(counter);
  counter++;
  inception(); // Only call inception
}

function inception2() {
  if (counter2 > 3) {
    return 'done'; // return when the base case is reached
  }
  counter2++;
  return inception2(); // Call inception and return its value return
}
// console.log(inception());
console.log(inception2());