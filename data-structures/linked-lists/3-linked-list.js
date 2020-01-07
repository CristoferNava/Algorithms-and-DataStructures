class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.current = this.head;
    this.length = 1;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (index > this.length) {
      this.append(value);
      return this;
    }

    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    let holdingNode = currentNode.next;
    const newNode = new Node(value);
    currentNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
    return this;
  }

  search(index) {
    let currentNode = this.head;
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value; 
  }

  showList() {
    let listElements = [];
    let currentNode = this.head;
    while (currentNode != null) {
      listElements.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listElements;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1)
myLinkedList.prepend(3);
console.log(myLinkedList.showList());
myLinkedList.insert(5, 11);
console.log(myLinkedList.showList());
console.log(myLinkedList.length);