# array
# a = [12, 12, 55, 34, 11, 14]
#      0   1   2   3   4   5
# add element at the end: O(1) append
# insert: O(n)
# search: O(n)
# access: O(1)

# Linked List
# append: O(1)
# prepend: (1) vs array O(n)
# search: (n)
# acess: O(n) first you have to look up vs array O(1)
# insert: O(n)


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = Node

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
    
    def append(self, value):
        node = Node(value)
        if self.size == 0: # primer nodo que voy a agregar
            self.head = node
            self.tail = node
            self.size += 1
            return

        # no es el primer nodo
        self.tail.next = node
        self.tail = node
        self.size += 1
    
    def prepend(self, value):
        node = Node(value)
        self.head = node
        self.size += 1




myLK = LinkedList()
myLK.append(5)
myLK.append(3)
myLK.append(7)

print(myLK.head.next.next.next)

class Stack:


class Node:
    def __init__(self, value):
        self.parent = None
        self.right = None
        self.left = None
        self.value = value

// 8 elementos (array) a lo más 8 veces. Ordenado: log2(8) = 3
// log2(100) = 7 BS
100
50
25
12
6
3
1

def preorder(node):
    if node is not None:
        print(node.value)
        preorder(node.left)
        preorder(node.right)

def inorder(node):
    if node is not None:
        inorder(node.left)
        print(node.value)
        inorder(node.right)

def postorder(node):
    if node is not None:
        postorder(node.left)
        postorder(node.right)
        print(node.value)

two sum 
[2, 3, 5, 6] -> 11  (2, 3)
[10, 1, 5, 3, 12, 23], 15 (0, 2)

maxSubarray()
[10, 1, -8, 5, 3, 12, 23, -10, -4, 200]
# dos problemas con arrays
# arrays
# strings
# linked lists
# stacks & queues
# bst
# graphs