// Link para probar el código
// https://repl.it/@CristoferNava/circular-linked-list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularLinkedList {
  constructor(data) {
    const startNode = new Node(data);
    this.start = startNode;
    this.min = startNode;
    this.max = startNode;
    this.length = 1;
  }

  add(data) {
    const newNode = new Node(data);

    // we move to the right
    if (newNode.data > this.start.data) {
      // at the end (replace max)
      if (newNode.data > this.max.data) {
        this.max.next = newNode;
        newNode.prev = this.max;
        newNode.next = this.min;
        this.max = newNode;
        this.min.prev = this.max;
      } else { // between start and max
        let currentNode = this.start;
        while(newNode.data > currentNode.data) {
          currentNode = currentNode.next;
        }
        // CurrentNode is to the right of the newNode to insert
        newNode.next = currentNode;
        newNode.prev = currentNode.prev;
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
      }
    } else { // we move to the left
      // at the begining (replace min)
      if (newNode.data < this.min.data) {
        this.min.prev = newNode;
        newNode.prev = this.max;
        newNode.next = this.min;
        this.min = newNode;
        this.max.next = this.min;
      } else { // between min and start
        let currentNode = this.start;
        while (newNode.data < currentNode.data) {
          currentNode = currentNode.prev;
        }
        // CurrentNode is to the left of the newNode to insert
        newNode.prev = currentNode;
        newNode.next = currentNode.next;
        currentNode.next.prev = newNode;
        currentNode.next = newNode;
      }
    }
    this.length++;
    return true;
  }

  search(data) {
    if (data === this.min.data) return true;

    if (data === this.start.data) return true;

    if (data === this.max.data) return true;

    let currentNode = this.start;
    if (data < this.start.data) {
      while (currentNode !== this.min) {
        currentNode = currentNode.prev;
        if (currentNode.data === data) return true;
      }
    } else {
      while (currentNode !== this.max.data) {
        currentNode = currentNode.next;
        if (currentNode.data === data) return true;
      }
    }

    return false;
  }

  remove(data) {
    if (data === this.min.data) {
      this.min.next.prev = this.max;
      this.max.next = this.min.next;
      this.min = this.min.next;
      this.length--;
      return true;
    }

    if (data === this.start.data) {
      this.start.prev.next = this.start.next;
      this.start.next.prev = this.start.prev;
      this.start = this.start.next;
      this.length--;
      return true;
    }

    if (data === this.max.data) {
      this.max.prev.next = this.min;
      this.min.prev = this.max.prev;
      this.max = this.max.prev;
      this.length--;
      return true;
    }

    let currentNode = this.start;
    if (data > this.start.data) {
      while (currentNode !== this.max) {
        currentNode = currentNode.next;
        if (currentNode.data === data) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          this.length--;
          return true;
        }
      }
    } else {
      while (currentNode !== this.min) {
        currentNode = currentNode.prev;
        if (currentNode.data === data) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          this.length--;
          return true;
        }
      }
    }

    return false
  }

  update(dataToRemove, dataToAdd) {
    if (this.remove(dataToRemove)) {
      this.add(dataToAdd)
    };

    return false;
  }

  showList() {
    let currentNode = this.min;
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  minValue() {
    return this.min.data;
  }

  maxValue() {
    return this.max.data;
  }
}

// Números que queremos agregar a la lista
const numbers = [8, 5, 11, 13, 2, 4, 6];

// Creamos la lista, el constructor de la lista recibe un número (primer nodo)
// por ello pasamos el primer número de numbers
const myCircularLinkedList = new CircularLinkedList(numbers[0]);

// Añadimos los números restantes a lista
for (let i = 1; i < numbers.length; i++) {
  myCircularLinkedList.add(numbers[i]);
}
// Verificamos que el método add funcione:
myCircularLinkedList.showList();
console.log(); // Imprimir un espacio en blanco

// Eliminamos un número de la lista
myCircularLinkedList.remove(11)
// Verificamos que el método remove funcione
myCircularLinkedList.showList();
console.log();

// Actualizamos un número en la lista
myCircularLinkedList.update(5, 3)
// Verificamos que el método update funcione
myCircularLinkedList.showList()
console.log()

// Buscamos un número en la lista
const exits = myCircularLinkedList.search(2)
// Verificamos que el método search funcione
console.log(exits)