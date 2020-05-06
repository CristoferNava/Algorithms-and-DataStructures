// Link para probar el código:
// https://repl.it/@CristoferNava/binary-search-tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.level;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.height = 0;
  }

  insert(data) {
    const newNode = new Node(data);
    // if it is the first node then it will be the root
    if (this.root === null) {
      this.root = newNode;
      this.height = 1;
      newNode.level = 1;
      return true;
    }
    
    // Inserting in another place
    let currentNode = this.root;
    let levelsCounters = 1;

    while (true) {
      levelsCounters++;
      // to the left
      if (newNode.data < currentNode.data) {
        // if there's not node to the left
        if (currentNode.left === null) {
          currentNode.left = newNode;
          newNode.parent = currentNode;
          newNode.level = levelsCounters;
          // check the height vs the levelsCounter
          if (levelsCounters > this.height) this.height = levelsCounters;
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
          newNode.level = levelsCounters;
          // check the height vs the levelsCounter
          if (levelsCounters > this.height) this.height = levelsCounters;
          return true;
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
    this.heightAfterRemove = 0;
    const nodeToRemove = this.search(data);
    // first case. No children
    if (!nodeToRemove.left && !nodeToRemove.right) {
      // we check if it's the left or the right node
      if (nodeToRemove.parent.left === nodeToRemove) {
        nodeToRemove.parent.left = null;
      } else {
        nodeToRemove.parent.right = null;
      } 
      // en este caso no tenemos que cambiar niveles de ningún nodo, puesto que 
      // el nodo eliminado no tiene hijos
    }

    // second case. One child
    // comprobamos que tenga uno, y sólo un hijo
    if (!nodeToRemove.left ^ !nodeToRemove.right) {
      // revisamos si el hijo de nodeToRemove es el izquierdo o el derecho
      // En este caso el nodo hijo del nodo eliminado pasa a ocupar su lugar y por
      // lo tanto también que cambia su nivel (ahora debe tener el nivel del padre eliminado)
      if (nodeToRemove.left) {
        nodeToRemove.left.level = nodeToRemove.level; // Cambiamos el nivel del nodo
        nodeToRemove.left.parent = nodeToRemove.parent;
        nodeToRemove.parent.right = nodeToRemove.left;
      } else {
        nodeToRemove.right.level = nodeToRemove.level; // Cambiamos el nivel del nodo
        nodeToRemove.right.parent = nodeToRemove.parent;
        nodeToRemove.parent.left = nodeToRemove.right;
      }
      
    }

    // third case. Two childs
    if (nodeToRemove.left && nodeToRemove.right) {
      // buscamos el nodo más a la izquierda
      let leftMostNode = nodeToRemove.right;
      while (leftMostNode.left) {
        leftMostNode = leftMostNode.left;
      }

      // revisamos si el nodo a la derecha de nodeToRemove no tiene nodos a la izquierda
      if (leftMostNode === nodeToRemove.right) {
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

    this.maxHeight(this.root);
  }

  // O(log N) in a balanced BST
  search(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (data === currentNode.data) return currentNode;
  
      if (data < currentNode.data) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }

    return false;
  }

  static inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(`value=${node.data} level=${node.level}`);
      this.inOrderTraversal(node.right);
    }
  }

  preOrderTraversal(node) {
    if (node) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node) {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data);
    }
  }

  maxHeight(node) {
    if (node) {
      if (node.level > this.heightAfterRemove) this.heightAfterRemove = node.level;
      this.maxHeight(node.left);
      this.maxHeight(node.right);
      this.height = this.heightAfterRemove;
    }
  }
}

const myTree = new BinarySearchTree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(7);
myTree.insert(12);
myTree.insert(20);

BinarySearchTree.inOrderTraversal(myTree.root);
console.log();
myTree.remove(5);
BinarySearchTree.inOrderTraversal(myTree.root);
// Ignorar esto
// Función para mostrar de forma más gráfica el arbol
function traverse(node) {
  const tree = { value: node.data };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
// ˆ.log(JSON.stringify(traverse(myTree.root)));