from typing import TypedDict

class EmployeeRecord(TypedDict):
    id: int
    name: str
    department: str
    position: str
    email: str
    phone: str
    date_hired: str
