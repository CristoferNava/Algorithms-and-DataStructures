class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    // if it is the first node then it will be the root
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    
  }

  search(data) {

  }
}

//       9 
//   4      20
// 1   6  5   170
const myTree = new BinarySearchTree();
