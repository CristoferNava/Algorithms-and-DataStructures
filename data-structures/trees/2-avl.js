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
					currentNode.left = newNode;
					newNode.parent = currentNode;
					newNode.level = levelsCounter;
					// revisamos los niveles recorridos y lo comparamos con la altura del árbol
					if (levelsCounter > this.height) this.height = levelsCounter;
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
					currentNode.right = newNode;
					newNode.parent = currentNode;
					newNode.level = levelsCounter;
					if (levelsCounter > this.height) this.height = levelsCounter;
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
		const nodeToRemove = this.search(data); // buscamos el nodo a eliminar
		// si no existe el node devolvemos false
		if (!nodeToRemove) return false;
		
		// si existe el nodo revisamos cual de los tres posibles casos es
		// Primer caso: El nodo no tiene hijos
		if (!nodeToRemove.left && !nodeToRemove.right) {
			// revisamos si nodeToRemove es el hijo izquierdo o derecho
			if (nodeToRemove.parent.left === nodeToRemove) nodeToRemove.parent.left = null;
			else nodeToRemove.parent.right = null;
		}

		// Segundo caso: El nodo tiene un hijo
		// comprobamos que el nodo solamente tenga un hijo
		if (!nodeToRemove.left ^ !nodeToRemove.right) {
			// revisamos si el hijo de nodeToRemove es el izquierdo o el derecho
			// En este caso el nodo hijo de nodeToRemove pasa a ocupar su lugar por lo 
			// que también su nivel
			if (nodeToRemove.left) { // si tiene un hijo a la izquierda
				nodeToRemove.left.parent = nodeToRemove.parent;
				// revisamos si nodeToRemove es el hijo derecho o izquierdo de su padre
				if (nodeToRemove === nodeToRemove.parent.left) {
					nodeToRemove.parent.left = nodeToRemove.left;
				} else {
					nodeToRemove.parent.right = nodeToRemove.left;
				}
			} else { // si tiene un hijo a la derecha
				nodeToRemove.right.parent = nodeToRemove.parent;
				// revisamos si nodeToRemove es el hijo derecho o izquierdo de su padre
				if (nodeToRemove === nodeToRemove.parent.left) {
					nodeToRemove.parent.left = nodeToRemove.right;
				} else {
					nodeToRemove.parent.right = nodeToRemove.right;
				}
			}
		}
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
}