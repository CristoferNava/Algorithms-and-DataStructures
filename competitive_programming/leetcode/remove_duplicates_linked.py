def deleteDuplicates(self, head):
    # Traverse the Linked List
    node = head
    while node.next:
        if node.val == node.next.val:
            node.next = node.next.next 
        node = node.next  

    return head