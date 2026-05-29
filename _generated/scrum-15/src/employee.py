from typing import List, Dict

Employee = Dict[str, str]

employees: List[Employee] = [
    {'id': '1', 'name': 'Alice Johnson', 'department': 'Engineering', 'position': 'Software Engineer', 'email': 'alice.johnson@example.com', 'phone': '555-1234', 'date_hired': '2022-01-15'},
    {'id': '2', 'name': 'Bob Smith', 'department': 'Marketing', 'position': 'Marketing Manager', 'email': 'bob.smith@example.com', 'phone': '555-5678', 'date_hired': '2021-11-23'},
    {'id': '3', 'name': 'Charlie Brown', 'department': 'Sales', 'position': 'Sales Executive', 'email': 'charlie.brown@example.com', 'phone': '555-8765', 'date_hired': '2020-05-12'},
    {'id': '4', 'name': 'Diana Prince', 'department': 'HR', 'position': 'HR Specialist', 'email': 'diana.prince@example.com', 'phone': '555-4321', 'date_hired': '2019-08-30'},
    {'id': '5', 'name': 'Eve Adams', 'department': 'Finance', 'position': 'Accountant', 'email': 'eve.adams@example.com', 'phone': '555-9876', 'date_hired': '2021-03-18'}
]


def paginate(items: List[Employee], page: int, per_page: int) -> List[Employee]:
    start = (page - 1) * per_page
    end = start + per_page
    return items[start:end]


def total_pages(total: int, per_page: int) -> int:
    return (total + per_page - 1) // per_page
