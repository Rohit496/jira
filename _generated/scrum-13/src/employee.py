from typing import List
from backend.app.models.employee import Employee


def paginate_employees(employees: List[Employee], page: int, per_page: int) -> List[Employee]:
    start = (page - 1) * per_page
    end = start + per_page
    return employees[start:end]


def total_pages(total_items: int, per_page: int) -> int:
    return (total_items + per_page - 1) // per_page
