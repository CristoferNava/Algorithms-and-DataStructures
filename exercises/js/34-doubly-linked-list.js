class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(data) {
    const node = new Node(data);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  append(data) {
    const node = new Node(data);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  showList() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

const myDoublyLinkedList = new DoublyLinkedList('Cristofer');
myDoublyLinkedList.append('Nestor');
myDoublyLinkedList.append('Oliver');
myDoublyLinkedList.append('Omar');
myDoublyLinkedList.showList();