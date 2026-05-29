from backend.app.models.employee import Employee

class EmployeeService:
    def __init__(self):
        self.employees = []

    def add_employee(self, employee: Employee):
        self.employees.append(employee)

    def delete_employee(self, id: int):
        self.employees = [e for e in self.employees if e.id != id]

    def get_all_employees(self):
        return self.employees
