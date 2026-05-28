from backend.app.models.employee import Employee

class EmployeeService:
    def __init__(self):
        self.employees = [
            Employee(id=1, name='Alice', position='Developer', department='Engineering'),
            Employee(id=2, name='Bob', position='Designer', department='Design'),
            Employee(id=3, name='Charlie', position='Manager', department='Sales'),
            Employee(id=4, name='David', position='Developer', department='Engineering'),
            Employee(id=5, name='Eve', position='Designer', department='Design'),
            Employee(id=6, name='Frank', position='Manager', department='Sales'),
            Employee(id=7, name='Grace', position='Developer', department='Engineering'),
            Employee(id=8, name='Heidi', position='Designer', department='Design'),
            Employee(id=9, name='Ivan', position='Manager', department='Sales'),
            Employee(id=10, name='Judy', position='Developer', department='Engineering'),
            Employee(id=11, name='Karl', position='Designer', department='Design')
        ]

    def get_all_employees(self):
        return self.employees
