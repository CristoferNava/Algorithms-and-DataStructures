// Inserts (append, prepend, random-location)

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

  insert(index) {

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

// 5, 7, 4, 1, 3
let linkedList = new LinkedList(5);
linkedList.append(7);
linkedList.prepend(2)
console.log(linkedList.values());
console.log(linkedList.length);
console.log(linkedList.search(3).data);