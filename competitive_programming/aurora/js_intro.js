// variables
/*
let a = 2;
let b = '2';
console.log(typeof b);

console.log(a === b);


// Estructuras de datos
let names = ['aurora', 'cristofer', 'pedro']
let last = names[names.length - 1]
console.log(last);

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
// names.forEach(aurora => {
//   console.log(aurora);
// })

// Hash Tables. Objects
let aurora = {
  name: 'Aurora',
  lastName: 'Pérez',
  age: 20,
  sayHi: function() {
    console.log("Hola, me llamo Aurora");
  }
};

class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  sayHi() {
    console.log('Hola, me llamo Cristofer');
  }
}

aurora.sayHi();

cristofer = new Person('Cristofer', 'Nava', 22);
cristofer.sayHi();



let info = {
  name: 'algo',
  lastName: 'algo2',
};
*/
// Functions 
function sum(a = 3, b = 5) {
  return a + b;
}

const suma2 = (a, b) => {
  return a + b;
};

const suma3 = (a, b) => (a + b);

const s4 = (a, b) => a + b;



// console.log(s4(b=5, a=5));
// console.log(even(4));

const even = a => a % 2;

// if (even(2)) {
//   console.log('es par');
  
// }

// Programación funcional 
// cuando una función recibe como parámetro otra función se llama callbacks

function f1() {
  console.log('Hola desde la función 1');
}

function f2() {
  setTimeout(() => {
    console.log('Hola desde la función 2');
  }, 3000)
}

f2(); // la imagen puede tardar mucho
f1(); // el resto de la página

// Java
'Hola desde la función 2'
'Hola desde la función 1'

// Programación declarativa. Qué haces pero no cómo lo haces
table = {
  'cristofer': 1,
  'aurora': 2,
}

// regresa aquellos que su id es id
for k, v in table.items():
  if v == 1:
    return k

// Manipular el DOM
// Js nació para manipular HTML y CSS
<h1 id="algo">Hola Aurora</h1> 

-> DOM -> objeto que Js pueda manipular en memoria

const h1Obeject = Document.getElementById('algo')
h1Obeject.innerHTML 0
