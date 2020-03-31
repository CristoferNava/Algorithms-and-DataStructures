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

  remove(data) {
    const nodeToRemove = this.search(data);
    // first case. No children
    if (!nodeToRemove.left && !nodeToRemove.right) {
      // we check if it's the left or the right node
      if (nodeToRemove.parent.left === nodeToRemove) {
        nodeToRemove.parent.left = null;
      } else {
        nodeToRemove.parent.right = null;
      } 
    }

    // second case. One child
    // comprobamos que tenga uno, y sólo un hijo
    if (!nodeToRemove.left ^ !nodeToRemove.right) {
      // revisamos si el hijo de nodeToRemove es el izquierdo o el derecho
      if (nodeToRemove.left) {
        nodeToRemove.left.parent = nodeToRemove.parent;
        nodeToRemove.parent.left = nodeToRemove.left;
      } else {
        nodeToRemove.right.parent = nodeToRemove.parent;
        nodeToRemove.parent.right = nodeToRemove.right;
      }
    }

    // third case. Two childs
    if (nodeToRemove.left && nodeToRemove.right) {
      // buscamos el nodo más a la izquierda
      let leftMostNode = nodeToRemove.right;
      while (leftMostNode.left) {
        leftMostNode = leftMostNode.left;
      }

      // si el nodo a la derecha de nodeToRemove no tiene nodos a la izquierda
      if (leftMostNode === nodeToRemove.right) {
        console.log('No hay nodos a la izquierda :0');
        leftMostNode.parent = nodeToRemove.parent;
        nodeToRemove.parent.left = leftMostNode;

        nodeToRemove.left.parent = leftMostNode;
        leftMostNode.left = nodeToRemove.left;
        return;
      }

      leftMostNode.parent.left = leftMostNode.right
      leftMostNode.right.parent = leftMostNode.parent;

      leftMostNode.parent = nodeToRemove.parent;
      nodeToRemove.parent.left = leftMostNode;

      leftMostNode.left = nodeToRemove.left;
      nodeToRemove.left.parent = leftMostNode;
      leftMostNode.right = nodeToRemove.right;
      nodeToRemove.right.parent = leftMostNode;
    }
  }

  search(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (data === currentNode.data) return currentNode;
  
      if (data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return false;
  }
}

//        9 
//   4         20
// 1   6     18  170
const myTree = new BinarySearchTree();
myTree.insert(50);
myTree.insert(15);
myTree.insert(2);
myTree.insert(40);

myTree.remove(15);
console.log(JSON.stringify(traverse(myTree.root)));
// console.log(myTree.root.left.right.left.left);

function traverse(node) {
  const tree = { value: node.data };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}