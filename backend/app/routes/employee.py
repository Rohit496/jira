from fastapi import APIRouter
from backend.app.models.employee import Employee
from backend.app.services.employee import EmployeeService

router = APIRouter()

storage = {}

@router.post("/employee/")
async def create_employee(employee: Employee):
    storage[employee.id] = employee
    return employee

@router.get("/employee/{employee_id}")
async def read_employee(employee_id: int):
    return storage.get(employee_id)

@router.put("/employee/{employee_id}")
async def update_employee(employee_id: int, employee: Employee):
    storage[employee_id] = employee
    return employee

@router.delete("/employee/{employee_id}")
async def delete_employee(employee_id: int):
    return storage.pop(employee_id, None)
