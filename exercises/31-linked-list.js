// Implementación de Linked List con métodos de agregar, remover y mostrar
// link para probar el código online:
// https://repl.it/@CristoferNava/linked-list-implementation

// Definición de la clase persona
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showPerson() {
    console.log(`${this.name} ${this.name}`);
  }
}

// Definición de la clase nodo
// Cada nodo contiene la información que va almacenar (data) y su propiedad next
// (referencia) para el siguiente nodo
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Definicón de la clase Linked List (implementación)
// head es el primer nodo de la lista
// tail es el último nodo de la lista
class LinkedList {
  constructor(data) {
    const node = new Node(data);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  // Agrega nodo al inicio de la lista
  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  // Agrega nodo al final de la lista
  append(data) {
    const node = new Node(data);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  // Elimina el nodo por índice del nodo
  remove(index) {
    let currentNode = this.head;
    // Si se quiere eliminar el head de la lista (primer elemento)
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    // Current node es el nodo anterior al que se quiere eliminar 
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    // Si se quiere eliminar el tail de la lista (último elemento)
    if (index >= this.length - 1) {
      this.tail = currentNode;
      delete currentNode.next;
      this.length--;
      return;
    }

    // Para borrar cualquier nodo intermedio
    let tempNode = currentNode.next.next;
    delete currentNode.next;
    currentNode.next = tempNode;
    this.length--;
  }

  // Muestra la lista de nodos
  showList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const myLinkedList = new LinkedList(new Person('Cristofer', 21));
myLinkedList.append(new Person('Nestor', 22));
myLinkedList.append(new Person('Damaris', 20));
myLinkedList.append(new Person('Alfred', 19));
myLinkedList.showList();
console.log();
myLinkedList.remove(2);
myLinkedList.showList();