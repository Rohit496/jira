from ..models.employee import Employee

EMPLOYEES = [
    Employee(id=1, name='Alice Johnson', department='Engineering', position='Software Engineer', email='alice.johnson@example.com', phone='555-1234', date_hired='2022-01-15'),
    Employee(id=2, name='Bob Smith', department='Marketing', position='Marketing Manager', email='bob.smith@example.com', phone='555-5678', date_hired='2021-06-23'),
    Employee(id=3, name='Charlie Brown', department='Sales', position='Sales Executive', email='charlie.brown@example.com', phone='555-8765', date_hired='2020-11-30'),
    Employee(id=4, name='Diana Prince', department='HR', position='HR Specialist', email='diana.prince@example.com', phone='555-4321', date_hired='2019-09-12'),
    Employee(id=5, name='Eve Adams', department='Finance', position='Accountant', email='eve.adams@example.com', phone='555-6789', date_hired='2018-03-05')
]

def get_paginated_employees(page: int = 1, per_page: int = 2):
    start = (page - 1) * per_page
    end = start + per_page
    return EMPLOYEES[start:end]
