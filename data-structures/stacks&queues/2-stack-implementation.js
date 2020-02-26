class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  push(value) {
    this.bottom = this.top;
    const node = new Node(value);
    this.top = node;
    this.top.next = this.bottom;
    this.length++;
  }

  pop() {
    delete this.top;
    this.top = this.bottom;
    this.bottom = this.top.next;
    this.length--;
  }
}

let myStack = new Stack();
myStack.push("Js");
myStack.push("Python");
myStack.push("Java");
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());