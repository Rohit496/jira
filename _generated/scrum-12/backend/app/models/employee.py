from dataclasses import dataclass

@dataclass
class EmployeeRecord:
    id: int
    name: str
    department: str
    position: str
    email: str
    phone: str
    date_hired: str

@dataclass
class PaginationState:
    current_page: int
    total_records: int
    records_per_page: int = 10
