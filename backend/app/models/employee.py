from pydantic import BaseModel, EmailStr, constr, validator
from datetime import date
from typing import Literal, Dict

class Employee(BaseModel):
    name: constr(max_length=100)
    email: EmailStr
    phone_number: constr(min_length=10, max_length=15)
    department: constr(max_length=50)
    designation: constr(max_length=50)
    joining_date: date
    employment_status: Literal['Active', 'Inactive', 'Terminated', 'On Leave']
    audit_info: Dict[str, str]

    @validator('joining_date')
    def check_joining_date(cls, v):
        if v > date.today():
            raise ValueError('Joining date cannot be in the future')
        return v