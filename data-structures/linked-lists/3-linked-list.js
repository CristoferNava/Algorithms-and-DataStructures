// 1 --> 10 --> 5 --> 16

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
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  insert(index, value) {

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
myLinkedList.prepend(0);
console.log(myLinkedList.showList());