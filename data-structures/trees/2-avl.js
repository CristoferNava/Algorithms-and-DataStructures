// TODO: Implementación de right-rotation

class Node {
	constructor(data) {
		this.data = data;
		this.parent = null;
		this.right = null;
		this.left = null;
		this.level;
		this.balanceFactor = 0;
	}
}

class AVLTree {
	constructor() {
		this.root = null;
		this.height = 0;
		this.heightAfterRemove;
	}

	// método para insertar nodo
	insert(data) {
		const newNode = new Node(data);
		// si es el primer nodo en ser insertado entonces va a ser el nodo raíz
		if (this.root === null) {
			this.root = newNode;
			this.root.level = 1;
			this.height = 1;
			return newNode;
		}

		// si no es el primer nodo en ser insertado tenemos que insertarlo en su 
		// respectiva posición
		let currentNode = this.root;
		let levelsCounter = 1; // Nos ayuda a contar el número de niveles recorridos

		while (true) {
			levelsCounter += 1;
			// nos movemos a la izquierda si el nodo a insertar es menor que el actual
			if (newNode.data < currentNode.data) {
				// si no hay un nodo a la izquierda lo insertamos ahí puesto que llegamos
				// al último nivel
				if (currentNode.left === null) {
					// sumamos -1 al FE puesto que se insertó el nodo a la izquierda
					currentNode.balanceFactor += -1;
					currentNode.left = newNode;
					newNode.parent = currentNode;
					newNode.level = levelsCounter;
					// revisamos los niveles recorridos y lo comparamos con la altura del árbol
					if (levelsCounter > this.height) this.height = levelsCounter;

					// Puesto que se añadío un nodo tenemos que reportar a todos los nodos
					// superiores que revisen su FE
					currentNode = currentNode.parent;
					while (currentNode) {
						currentNode.balanceFactor = this.calculateBalanceFactor(currentNode);
						if (Math.abs(currentNode.balanceFactor) >= 2) {
							// Encontramos un FE >= 2 por lo que tenemos que revisar cual caso de rotación tenemos que realizar
							// Rotación Simple Izquierda: El hijo derecho tiene un FE positivo
							if (currentNode.right) {
								if (currentNode.right.balanceFactor > 0) this.leftRotation(currentNode);
							}
							// Rotación Simple Derecha: El hijo izquierdo tiene un FE negativo
							if (currentNode.left.balanceFactor < 0) this.rightRotation(currentNode);
							break;
						} 
						currentNode = currentNode.parent;
					}
					return newNode;
				}
				// si hay un nodo a la izquierda continuamos recorriendo
				currentNode = currentNode.left;
				continue;
			}
			// nos movemos a la derecha si el nodo a insertar es mayor que el actual
			if (newNode.data > currentNode.data) {
				// si no hay nodo a la derecha lo insertamos ahí puesto que llegamos al
				// último nivel
				if (currentNode.right === null) {
					// sumamos +1 al FE de equilibrió puesto que se insertó a la derecha
					currentNode.balanceFactor += 1;
					currentNode.right = newNode;
					newNode.parent = currentNode;
					newNode.level = levelsCounter;
					if (levelsCounter > this.height) this.height = levelsCounter;

					// Puesto que se añadío un nodo tenemos que reportar a todos los nodos
					// superiores que revisen su FE
					currentNode = currentNode.parent;
					while (currentNode) {
						currentNode.balanceFactor = this.calculateBalanceFactor(currentNode);
						if (Math.abs(currentNode.balanceFactor) >= 2) {
							// Encontramos un FE >= 2 por lo que tenemos que revisar cual caso de rotación tenemos que realizar
							// Rotación Simple Izquierda: El hijo derecho tiene un FE positivo
							if (currentNode.right) {
								if (currentNode.right.balanceFactor > 0) this.leftRotation(currentNode);
							}
							// Rotación Simple Derecha: El hijo izquierdo tiene un FE negativo
							if (currentNode.left.balanceFactor < 0) this.rightRotation(currentNode);
							break;
						} 
						currentNode = currentNode.parent;
					}
					return newNode;
				}
				// si hay un nodo a la derecha
				currentNode = currentNode.right;
				continue;
			}
			// si el nodo insertado ya existe en el árbol regresamos false
			return false;
		}
	}

	// método para eliminar un nodo
	remove(data) {
		this.heightAfterRemove = 0;
		const nodeToRemove = this.search(data); // buscamos el nodo a eliminar
		// si no existe el node devolvemos false
		if (!nodeToRemove) return false;
		
		// si existe el nodo revisamos cual de los tres posibles casos es
		// Primer caso: El nodo no tiene hijos
		if (!nodeToRemove.left && !nodeToRemove.right) {
			// revisamos si nodeToRemove es el hijo izquierdo o derecho
			if (nodeToRemove.parent.left === nodeToRemove) nodeToRemove.parent.left = null;
			else nodeToRemove.parent.right = null;
			// En este caso no tenemos que cambiar los niveles de ningún nodo, puesto
			// el nodo eliminado no tiene hijos
			return;
		}

		// Segundo caso: El nodo tiene un hijo
		// comprobamos que el nodo solamente tenga un hijo
		if (!nodeToRemove.left ^ !nodeToRemove.right) {
			// revisamos si el hijo de nodeToRemove es el izquierdo o el derecho
			// En este caso el nodo hijo de nodeToRemove pasa a ocupar su lugar por lo 
			// que también su nivel
			if (nodeToRemove.left) { // si tiene un hijo a la izquierda
				nodeToRemove.left.level = nodeToRemove.level;
				nodeToRemove.left.parent = nodeToRemove.parent;
				// revisamos si nodeToRemove es el hijo derecho o izquierdo de su padre
				if (nodeToRemove === nodeToRemove.parent.left) {
					nodeToRemove.parent.left = nodeToRemove.left;
				} else {
					nodeToRemove.parent.right = nodeToRemove.left;
				}
			} else { // si tiene un hijo a la derecha
				nodeToRemove.right.level = nodeToRemove.level;
				nodeToRemove.right.parent = nodeToRemove.parent;
				// revisamos si nodeToRemove es el hijo derecho o izquierdo de su padre
				if (nodeToRemove === nodeToRemove.parent.left) {
					nodeToRemove.parent.left = nodeToRemove.right;
				} else {
					nodeToRemove.parent.right = nodeToRemove.right;
				}
			}
		}

		// Tercer caso: El nodo a remover tiene dos hijos
		if (nodeToRemove.left && nodeToRemove.right) {
			// Buscamos el nodo más a la izquierda
			let leftMostNode = nodeToRemove.right;
			while (leftMostNode.left) {
				leftMostNode = leftMostNode.left;
			}
			// Revisamos si el nodo a la derecha de nodeToRemove no tiene nodos a la
			// izquierda
			if (leftMostNode === nodeToRemove.right) {
				// En este caso el nodo más a la izquierda puede tener un subarbol a su
				// derecha, por lo que todos los nodos de es subarbol ven reducidos su
				// nivel en 1
				leftMostNode.level = leftMostNode.parent.level;
				this.reduceOneLevel(nodeToRemove.right);

				leftMostNode.parent = nodeToRemove.parent;
				nodeToRemove.parent.left = leftMostNode;

				nodeToRemove.left.parent = leftMostNode;
				leftMostNode.left = nodeToRemove.left;

				leftMostNode.level = leftMostNode.parent.level + 1;
				return;
			}
			// En caso de que sí existan nodos a la izquierda
			this.reduceOneLevel(nodeToRemove.right);
			leftMostNode.parent.left = leftMostNode.right;
			if (leftMostNode.right) leftMostNode.right.parent = leftMostNode.parent;

			leftMostNode.parent = nodeToRemove.parent;
      nodeToRemove.parent.left = leftMostNode;

      leftMostNode.left = nodeToRemove.left;
      nodeToRemove.left.parent = leftMostNode;
      leftMostNode.right = nodeToRemove.right;
			nodeToRemove.right.parent = leftMostNode;
			
			leftMostNode.level = leftMostNode.parent.level + 1;
		}

		// Revisamos la altura del árbol después de los posible casos
		this.calculateHeight(this.root);
	}

	// método para buscar un nodo y retornarlo en caso de que se encuentre
	search(data) {
		let currentNode = this.root;
		while (currentNode) {
			if (data === currentNode.data) return currentNode;

			if (data < currentNode.data) currentNode = currentNode.left;
			else currentNode = currentNode.right;
		}
		// si no se encontró el nodo regresamos false
		return false;
	}

	// Método que reduce en 1 los niveles de todos los nodes dada la raíz (punto de inicio)
	reduceOneLevel(node) {
		if (node) {
			node.level -= 1;
			this.reduceOneLevel(node.left);
			this.reduceOneLevel(node.right);
		}
	}

	// Método que cálcula la altura del árbol después de que se eliminó un nodo
	calculateHeight(node) {
		if (node) {
			if (node.level > this.heightAfterRemove) this.heightAfterRemove = node.level;
			this.calculateHeight(node.left);
			this.calculateHeight(node.right);
			this.height = this.heightAfterRemove;
		}
	}

	// Método que dado un nodo cálcula su factor de equilibrio
	calculateBalanceFactor(node) {
		if (!node.right && !node.left) return 0;
		if (node.right === null) return 0 - this.calcTreeHeight(node.left);
		if (node.left === null) return this.calcTreeHeight(node.right) - 0;
		return this.calcTreeHeight(node.right) - this.calcTreeHeight(node.left);
	}

	// Método que dado un nodo (el cual toma como raíz) regresa la altura del árbol
	calcTreeHeight(node) {
		this.minLevel = node.level;
		this.maxLevel = node.level;
		this.helper(node);
		return this.maxLevel - this.minLevel + 1;
	}

	helper(node) {
		if (node) {
			if (node.level > this.maxLevel) this.maxLevel = node.level;
			if (node.level < this.minLevel) this.minLevel = node.level;
			this.helper(node.left);
			this.helper(node.right);
		}
	}

	static inOrderTraversal(node) {
		if (node) {
			this.inOrderTraversal(node.left);
			console.log(`value=${node.data} level=${node.level}`);
			this.inOrderTraversal(node.right);
		}
	}

	leftRotation(node) {
		// Hacemos el cambio de los niveles
		node.right.right.level = node.right.level;
		node.right.level = node.level;
		node.level += 1;

		// Hacemos el cambio de nodos
		node.parent.right = node.right;
		node.right.left = node;
		node.right.parent = node.parent;
		node.parent = node.right;
		node.right = null;

		// Hacemos el cambio de los FE
		node.balanceFactor = this.calculateBalanceFactor(node);
		node.parent.balanceFactor = this.calculateBalanceFactor(node.parent);
		node.parent.right.balanceFactor = this.calculateBalanceFactor(node.parent.right);

		// Recalculamos la altura de todo el árbol
		this.height = this.calcTreeHeight(this.root);
	}

	rightRotation(node) {
		// Hacemos el cambio de niveles
		node.left.left.level = node.left.level;
		node.left.level = node.level;
		node.level += 1; 

		// Hacemos el cambio de nodos
		node.parent.left = node.left;
		node.left.right = node;
		node.left.parent = node.parent;
		node.parent = node.left;
		node.left = null;

		// Hacemos el cambio de los FE
		node.balanceFactor = this.calculateBalanceFactor(node);
		node.parent.balanceFactor = this.calculateBalanceFactor(node.parent);
		node.parent.left.balanceFactor = this.calculateBalanceFactor(node.parent.left);

		// Recalculamos la altura de todo el árbol
		this.height = this.calcTreeHeight(this.root);
	}
}

const myTree = new AVLTree();
myTree.insert(5);
myTree.insert(4);
myTree.insert(6);
myTree.insert(3);
myTree.insert(2);

console.log(myTree.height);