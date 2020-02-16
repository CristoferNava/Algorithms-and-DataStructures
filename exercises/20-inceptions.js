let counter = 0;

function inception() {
  if (counter > 3) {
    console.log('Its done');
  }
  counter++;
  inception();
}