class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.head = None
        self.size = 0
    
    def push(self, data):
        node = Node(data)
        if self.size != 0:
            node.next = self.head
        self.head = node
        self.size += 1

    def pop(self):
        if self.size == 1:
            self.head = None
        else:
            self.head = self.head.next
        self.size -= 1

    def peek(self):
        if self.size:
            return self.head.data
        return None 

    def search(self, data):
        node = self.head
        while node:
            if node.data == data:
                return True
            node = node.next
        return False

my_stack = Stack()
my_stack.push(4)
my_stack.push(2)
my_stack.push(5)
my_stack.push(13)


print(my_stack.search(13))