class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.first) {
      return this.first.value;
    }
    return null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
      this.length++;
      return;
    }
    this.last.next = node;
    this.last = node;
    this.length++;
  }

  dequeue() {
    const temp = this.first;
    delete this.first;
    this.first = temp.next;
  }
    
}

const myQueue = new Queue();
myQueue.enqueue("Cristofer");
myQueue.enqueue("Ilse");
myQueue.enqueue("Dai");
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());