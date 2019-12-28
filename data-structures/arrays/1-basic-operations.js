// Elements in the array are one next to the other in memory.

const elements = ['a', 'b', 'c', 'd'];

// push O(1)
elements.push('e');

// pop O(1)
elements.pop();

// unshift O(n)
elements.unshift('x');

// splice O(n)
elements.splice(2, 0, 'alien');

// look O(1)
elements[2]

console.log(elements);