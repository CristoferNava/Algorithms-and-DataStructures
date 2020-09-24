# Main operations in arrays

names = ['Cristofer']
names.append('Lizeth') # Adds an element at the end of the list 
names.clear() # Removes all the elements from the list
same_names = names.copy() # Returns a copy of the list
names.pop(0) # Removes the element at the specified position 
names.count('Cristofer') # Returns the number of elements with the specified value
names.extend(same_names) # Add the elements of a list (or any iterable), to the end of the curren list
names.index('Cristofer') # Returns the index of the element specified (check value, start, stop)
names.insert(0, 'Cristofer') # Adds the element at the specified position 
names.remove('Cristofer') # Removes first occurrence value
names.reverse()
names.sort()
