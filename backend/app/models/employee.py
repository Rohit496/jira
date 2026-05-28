from typing import Optional

class Employee:
    def __init__(self, id: int, name: str, position: str, department: str) -> None:
        self.id = id
        self.name = name
        self.position = position
        self.department = department
