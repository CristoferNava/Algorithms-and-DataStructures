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
      return true;
    }
    
    // Inserting in another place
    let currentNode = this.root;
    while (true) {
      // to the left
      if (newNode.data < currentNode.data) {
        // if there's not node to the leff
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return true;
        }
        // if there's a node to the left
        currentNode = currentNode.left;
        continue;
      }

      // to the left
      if (newNode.data > currentNode.data) {
        // if there's not a node to the left
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return true;;
        }

        // if there's a node to the right
        currentNode = currentNode.right;
      }
    }

    // if the node to insert already exists
    return false;
  }

  search(data) {
    let currentNode = this.root;
    if (data === this.root.data) {
      return true;
    }

    while (true) {
      // to the left
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        if (currentNode.data === data) return true;
        continue;
      }

      // to the right
      if (data > currentNode.data) {
        currentNode = currentNode.right;
        if (currentNode.data === data) return true;
      }

      return false;
    }
  }
}

//       9 
//   4      20
// 1   6  18   170
const myTree = new BinarySearchTree();
myTree.insert(9);
myTree.insert(4);
myTree.insert(20);
myTree.insert(1);
myTree.insert(6);
myTree.insert(18);
myTree.insert(170);

console.log(myTree.root.right.right.data);