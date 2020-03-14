class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularLinkedList {
  constructor(data) {
    const startNode = new Node(data);
    this.start = startNode;
    this.min = startNode;
    this.max = startNode;
    this.length = 1;
  }

  add(data) {
    const newNode = new Node(data);

    // To the right
    if (newNode.data > this.start.data) {
      // At the end
      if (newNode.data > this.max.data) {
        this.max.next = newNode;
        newNode.prev = this.max;
        newNode.next = this.min;
        this.max = newNode;
        this.min.prev = this.max;
      } else { // Between
        let currentNode = this.start;
        while(newNode.data > currentNode.data) {
          currentNode = currentNode.next;
        }
        // CurrentNode is to the right of the newNode to insert
        newNode.next = currentNode;
        newNode.prev = currentNode.prev;
        currentNode.prev.next = newNode;
        currentNode.prev = newNode;
      }
    } else { // To the left
      // at the begining
      if (newNode.data < this.min.data) {
        this.min.prev = newNode;
        newNode.prev = this.max;
        newNode.next = this.min;
        this.min = newNode;
        this.max.next = this.min;
      } else { // in between
        let currentNode = this.start;
        while (newNode.data < currentNode.data) {
          currentNode = currentNode.prev;
        }
        newNode.prev = currentNode;
        newNode.next = currentNode.next;
        currentNode.next.prev = newNode;
        currentNode.next = newNode;
      }
    }
    this.length++;
  }

  showList() {
    let currentNode = this.min;
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  minValue() {
    return this.min.data;
  }

  maxValue() {
    return this.max.data;
  }
}

const numbers = [8, 5, 11, 13, 2, 4, 6];

const myCircularLinkedList = new CircularLinkedList(8);
myCircularLinkedList.add(5);
myCircularLinkedList.add(11);
myCircularLinkedList.add(13);
myCircularLinkedList.add(2);
myCircularLinkedList.add(4);
myCircularLinkedList.add(6);
myCircularLinkedList.add(3);
myCircularLinkedList.showList();
console.log();
console.log(myCircularLinkedList.minValue());