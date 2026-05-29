from typing import List, Dict


def paginate(employees: List[Dict], page: int, per_page: int) -> List[Dict]:
    start = (page - 1) * per_page
    end = start + per_page
    return employees[start:end]


def total_pages(total: int, per_page: int) -> int:
    return (total + per_page - 1) // per_page
