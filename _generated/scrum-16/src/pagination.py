from dataclasses import dataclass
from typing import List, Dict

@dataclass
class Pagination:
    current_page: int
    total_pages: int
    page_size: int


def paginate(items: List[Dict], page: int, per_page: int) -> List[Dict]:
    start = (page - 1) * per_page
    end = start + per_page
    return items[start:end]


def total_pages(total_items: int, per_page: int) -> int:
    return (total_items + per_page - 1) // per_page
