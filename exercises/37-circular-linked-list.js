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

    // we move to the right
    if (newNode.data > this.start.data) {
      // at the end (replace max)
      if (newNode.data > this.max.data) {
        this.max.next = newNode;
        newNode.prev = this.max;
        newNode.next = this.min;
        this.max = newNode;
        this.min.prev = this.max;
      } else { // between start and max
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
    } else { // we move to the left
      // at the begining (replace min)
      if (newNode.data < this.min.data) {
        this.min.prev = newNode;
        newNode.prev = this.max;
        newNode.next = this.min;
        this.min = newNode;
        this.max.next = this.min;
      } else { // between min and start
        let currentNode = this.start;
        while (newNode.data < currentNode.data) {
          currentNode = currentNode.prev;
        }
        // CurrentNode is to the left of the newNode to insert
        newNode.prev = currentNode;
        newNode.next = currentNode.next;
        currentNode.next.prev = newNode;
        currentNode.next = newNode;
      }
    }
    this.length++;
  }

  search(data) {
    if (data === this.min.data) return true;

    if (data === this.start.data) return true;

    if (data === this.max.data) return true;

    let currentNode = this.start;
    if (data < this.start.data) {
      while (currentNode !== this.min) {
        currentNode = currentNode.prev;
        if (currentNode.data === data) return true;
      }
    } else {
      while (currentNode !== this.max.data) {
        currentNode = currentNode.next;
        if (currentNode.data === data) return true;
      }
    }

    return false;
  }

  remove(data) {
    if (data === this.min.data) {
      this.min.next.prev = this.max;
      this.max.next = this.min.next;
      this.min = this.min.next;
      this.length--;
      return true;
    }

    if (data === this.start.data) {
      this.start.prev.next = this.start.next;
      this.start.next.prev = this.start.prev;
      this.start = this.start.next;
      this.length--;
      return true;
    }

    if (data === this.max.data) {
      this.max.prev.next = this.min;
      this.min.prev = this.max.prev;
      this.max = this.max.prev;
      this.length--;
      return true;
    }

    let currentNode = this.start;
    if (data > this.start.data) {
      while (currentNode !== this.max) {
        currentNode = currentNode.next;
        if (currentNode.data === data) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          this.length--;
          return true;
        }
      }
    } else {
      while (currentNode !== this.min) {
        currentNode = currentNode.prev;
        if (currentNode.data === data) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          this.length--;
          return true;
        }
      }
    }

    return false
  }

  update(dataToRemove, dataToAdd) {
    const condition1 = this.search(dataToRemove);

    if (condition1) {
      this.remove(dataToRemove);
      this.add(dataToAdd);
      return true;
    }

    return false;
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
const test = [2, 1]
const myCircularLinkedList = new CircularLinkedList(8);
for (let i = 1; i < numbers.length; i++) {
  myCircularLinkedList.add(numbers[i]);
}

const testLinkedList = new CircularLinkedList(2);
testLinkedList.add(1);
testLinkedList.showList()