from backend.app.models.employee import Employee

class EmployeeService:
    def __init__(self):
        self.employees = [Employee(1, 'John Doe', 'Employee details here'), Employee(2, 'Jane Smith', 'Employee details here')]

    def get_all_employees(self):
        return self.employees

    def delete_employee(self, id: int):
        self.employees = [emp for emp in self.employees if emp.id != id]
