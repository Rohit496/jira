from dataclasses import dataclass

@dataclass
class PaginationControl:
    current_page: int
    total_pages: int
    is_fixed: bool
    is_centered: bool
    is_accessible: bool
