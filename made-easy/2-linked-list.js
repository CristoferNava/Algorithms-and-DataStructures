// Inserts random-location

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
    }
    if (index > this.length - 1) {
      this.append(data);
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

// 5, 8, 2, 11, 3
let linkedList = new LinkedList(5);
linkedList.append(8);
linkedList.append(2);
linkedList.append(11);
linkedList.append(3);
console.log(linkedList.values());
linkedList.insert(12, 4);
console.log(linkedList.values());