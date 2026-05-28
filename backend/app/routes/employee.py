from fastapi import APIRouter, HTTPException
from typing import List
from backend.app.models.employee import Employee

router = APIRouter()

# In-memory storage for employees
employees = {}

@router.post('/employee/', response_model=Employee)
async def create_employee(employee: Employee):
    if employee.email in employees:
        raise HTTPException(status_code=400, detail='Email already exists')
    employees[employee.email] = employee
    return employee

@router.get('/employee/', response_model=List[Employee])
async def get_employees():
    return list(employees.values())

@router.put('/employee/{email}', response_model=Employee)
async def update_employee(email: str, employee: Employee):
    if email not in employees:
        raise HTTPException(status_code=404, detail='Employee not found')
    employees[email] = employee
    return employee

@router.delete('/employee/{email}')
async def delete_employee(email: str):
    if email not in employees:
        raise HTTPException(status_code=404, detail='Employee not found')
    del employees[email]
    return {'detail': 'Employee deleted'}