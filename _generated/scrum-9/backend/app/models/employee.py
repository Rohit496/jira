class Employee:
    def __init__(self, id: int, name: str, department: str, position: str, email: str, phone: str, date_hired: str):
        self.id = id
        self.name = name
        self.department = department
        self.position = position
        self.email = email
        self.phone = phone
        self.date_hired = date_hired

class DeletionLog:
    def __init__(self, user_id: int, employee_id: int, timestamp: str):
        self.user_id = user_id
        self.employee_id = employee_id
        self.timestamp = timestamp
