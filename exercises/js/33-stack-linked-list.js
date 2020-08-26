// Implementación de pila con Linked List
// Link para probar el código:
// https://repl.it/@CristoferNava/stack-implementation

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//  D ---> C ---> B ---> A
// tail                 head     
class Stack {
  constructor(data) {
    const node = new Node(data);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.tail;
    this.tail = node;
    this.length--;
  }

  pop() {
    const lastNodeData = this.tail.data;
    this.tail = this.tail.next;
    this.length--;
    return lastNodeData;
  }

  showStack() {
    let currentNode = this.tail;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const myStack = new Stack('Cristofer');
myStack.push('Oliver');
myStack.push('Alfonso');
myStack.showStack();
console.log();

myStack.pop();
myStack.showStack();