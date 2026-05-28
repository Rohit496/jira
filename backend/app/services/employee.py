class EmployeeService:
    @staticmethod
    def get_employee(employee_id: int, storage: dict):
        return storage.get(employee_id)

    @staticmethod
    def create_employee(employee, storage: dict):
        storage[employee.id] = employee
        return employee

    @staticmethod
    def update_employee(employee_id: int, employee, storage: dict):
        storage[employee_id] = employee
        return employee

    @staticmethod
    def delete_employee(employee_id: int, storage: dict):
        return storage.pop(employee_id, None)
