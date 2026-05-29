from typing import List, Dict

Employee = Dict[str, str]

class Pagination:
    def __init__(self, employees: List[Employee], records_per_page: int):
        self.employees = employees
        self.records_per_page = records_per_page
        self.current_page = 1

    def paginate(self) -> List[Employee]:
        start = (self.current_page - 1) * self.records_per_page
        end = start + self.records_per_page
        return self.employees[start:end]

    def total_pages(self) -> int:
        return (len(self.employees) + self.records_per_page - 1) // self.records_per_page

    def next_page(self):
        if self.current_page < self.total_pages():
            self.current_page += 1

    def previous_page(self):
        if self.current_page > 1:
            self.current_page -= 1

    def set_records_per_page(self, records_per_page: int):
        self.records_per_page = records_per_page
        self.current_page = 1
