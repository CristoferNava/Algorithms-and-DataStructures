class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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
    this.tail = node;
    this.length--;
  }
  
  pop() {
    const firstNode = this.head;
    this.head = this.head.next;
    this.length--;
    return firstNode.data;
  } 

  showList() {
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
myQueue.showList();

myQueue.pop();
myQueue.pop();
console.log();
myQueue.showList();

myQueue.push("Alfonso");
console.log();
myQueue.showList();
