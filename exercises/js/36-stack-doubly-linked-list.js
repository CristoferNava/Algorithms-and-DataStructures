// Implementación de pila usando Doubly Linked List
// Link para probar el código;
// https://repl.it/@CristoferNava/stack-doubly-linked-list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null
  }
}

class Stack {
  constructor(data) {
    const node = new Node(data);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(data) {
    const node = new Node(data);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }

  pop() {
    const dataNode = this.tail.data;
    this.tail = this.tail.prev;
    delete this.tail.next;
    this.length--;
    return dataNode;
  }

  showStack() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const myStack = new Stack('Cristofer');
myStack.push('Nestor');
myStack.push('Damaris');
myStack.showStack();
console.log();

myStack.pop();
myStack.showStack();