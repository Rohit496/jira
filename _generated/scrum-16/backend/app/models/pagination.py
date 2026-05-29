from dataclasses import dataclass

@dataclass
class Pagination:
    current_page: int
    total_pages: int
    page_size: int
