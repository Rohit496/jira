from typing import List, Dict

Employee = Dict[str, str]

EMPLOYEES: List[Employee] = [
    {'id': '1', 'name': 'Alice Johnson', 'department': 'Engineering', 'position': 'Software Engineer', 'email': 'alice.johnson@example.com', 'phone': '555-1234', 'date_hired': '2022-01-15'},
    {'id': '2', 'name': 'Bob Smith', 'department': 'Marketing', 'position': 'Marketing Manager', 'email': 'bob.smith@example.com', 'phone': '555-5678', 'date_hired': '2021-06-23'},
    {'id': '3', 'name': 'Charlie Brown', 'department': 'Sales', 'position': 'Sales Executive', 'email': 'charlie.brown@example.com', 'phone': '555-8765', 'date_hired': '2020-11-30'},
    {'id': '4', 'name': 'Diana Prince', 'department': 'HR', 'position': 'HR Specialist', 'email': 'diana.prince@example.com', 'phone': '555-4321', 'date_hired': '2019-09-12'},
    {'id': '5', 'name': 'Eve Adams', 'department': 'Finance', 'position': 'Accountant', 'email': 'eve.adams@example.com', 'phone': '555-6789', 'date_hired': '2018-03-05'}
]

def paginate_employees(page: int, per_page: int) -> List[Employee]:
    start = (page - 1) * per_page
    end = start + per_page
    return EMPLOYEES[start:end]

def total_pages(total_items: int, per_page: int) -> int:
    return (total_items + per_page - 1) // per_page
