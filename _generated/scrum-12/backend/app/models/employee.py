from datetime import datetime

class EmployeeRecord:
    def __init__(self, id: int, name: str, department: str, position: str, email: str, phone: str, date_hired: str):
        self.id = id
        self.name = name
        self.department = department
        self.position = position
        self.email = email
        self.phone = phone
        self.date_hired = date_hired

class PaginationSettings:
    def __init__(self, records_per_page: int, current_page: int):
        self.records_per_page = records_per_page
        self.current_page = current_page
