// Link para probar el código:
// https://repl.it/@CristoferNava/binary-search-tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
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
          newNode.parent = currentNode;
          return true;
        }
        // if there's a node to the left
        currentNode = currentNode.left;
        continue;
      }

      // to the right
      if (newNode.data > currentNode.data) {
        // if there's not a node to the left
        if (currentNode.right === null) {
          currentNode.right = newNode;
          newNode.parent = currentNode;
          return true;;
        }

        // if there's a node to the right
        currentNode = currentNode.right;
        continue;
      }
      // if the node to insert already exists
      return false;
    }
  }

  search(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (data === currentNode.data) return true;
  
      if (data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return false;
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

console.log(myTree.root.right.right.parent.data);