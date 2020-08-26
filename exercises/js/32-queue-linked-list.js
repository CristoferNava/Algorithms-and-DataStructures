// Implementación de cola con Linked List
// Link para probar el código:
// https://repl.it/@CristoferNava/queue-implementation

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//  A ---> B ---> C ---> D
// head                  tail
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
    this.tail = node;
    this.length--;
  }
  
  pop() {
    const firstNodeData = this.head.data;
    this.head = this.head.next;
    this.length--;
    return firstNodeData;
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
myQueue.push('Damaris');
myQueue.push('Nestor');
myQueue.showQueue();

myQueue.pop();
myQueue.pop();
console.log();
myQueue.showQueue();

myQueue.push("Alfonso");
console.log();
myQueue.showQueue();
