// Given a string return the string reversed.

function reverse(string) {
  let elements = [];
  for (let i = string.length - 1; i >= 0; i--) {
    elements.push(string[i]);
  }
  elements = (String(elements)).replace(/,/g, '');
  
  return elements;
}