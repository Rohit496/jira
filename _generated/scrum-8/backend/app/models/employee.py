from dataclasses import dataclass

@dataclass
class EmployeeRecord:
    id: int
    name: str
    position: str
    department: str
    email: str
    phone: str
    date_hired: str