from dataclasses import dataclass

@dataclass
class Employee:
    id: int
    name: str
    department: str
    position: str
    email: str
    phone: str
    date_hired: str
