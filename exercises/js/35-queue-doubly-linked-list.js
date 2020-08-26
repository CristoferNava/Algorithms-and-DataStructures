// Implementación de una cola usando Doubly Linked List
// Link para probar el código:
// https://repl.it/@CristoferNava/queue-doubly-linked-list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
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
    const dataNode = this.head.data;
    this.head = this.head.next;
    delete this.head.prev;
    this.length--;
    return dataNode;
  }

  showQueue() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const myQueue = new Queue('Cristofer');
myQueue.push('Nestor');
myQueue.push('Damaris');
myQueue.showQueue();
console.log();

myQueue.pop();
myQueue.showQueue();