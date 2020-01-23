// Delete first node, last node, random node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const node = new Node(data);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(data) {
    const node = new Node(data);
    node.next = this.head,
    this.head = node;
    this.length++;
  }

  insert(data, index) {
    if (index === 0) {
      this.prepend(data);
      return;
    }
    if (index > this.length) {
      this.append(data);
      return;
    }
    
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    let holdingNode = currentNode.next;
    const node = new Node(data);
    currentNode.next = node;
    node.next = holdingNode;
    this.length++;
  }

  // remove the first node
  unshift() {
    let currentNode = this.head.next;
    delete this.head;
    this.head = currentNode;
    this.length--;
  }

  // remove the last node
  pop() {
    let currentNode = this.head;
    for (let i = 1; i < this.length - 1; i++) {
      currentNode = currentNode.next;
    }
    delete this.tail;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
  }

  remove(index) {
    if (index === 0) {
      this.unshift();
      return;
    }
    if (index > this.length) {
      this.pop();
      return;
    }

    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    let holdingNode = currentNode.next.next;
    delete currentNode.next;
    currentNode.next = holdingNode;
    this.length--;
  }

  search(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  values() {
    let currentNode = this.head;
    const values = [];
    while (currentNode !== null) {
      values.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return values;
  }
}