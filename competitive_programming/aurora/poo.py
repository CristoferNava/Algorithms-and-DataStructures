class Person:
    def __init__(self, name, last_name):
        self.name = name
        self.last_name = last_name

    def hello(self):
        print('hola, soy una persona')

    def __str__(self): 
        return self.name

class Employee(Person):
    def __init__(self, name, last_name, payroll):
        Person.__init__(self, name, last_name)
        self.payroll = payroll
    
    def hello(self):
        print('hola, soy un empleado')


auro = Employee('aurora', 'pérez', 100)
auro.hello()