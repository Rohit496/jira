import pytest
from backend.app.models.employee import Employee
from backend.app.routes.employee import employees
from datetime import date


def test_create_employee():
    employee = Employee(
        name='John Doe',
        email='john.doe@example.com',
        phone_number='1234567890',
        department='HR',
        designation='Manager',
        joining_date=date.today(),
        employment_status='Active',
        audit_info={}
    )
    employees[employee.email] = employee
    assert employees[employee.email] == employee


def test_create_employee_duplicate_email():
    employee1 = Employee(
        name='Jane Doe',
        email='jane.doe@example.com',
        phone_number='0987654321',
        department='Finance',
        designation='Analyst',
        joining_date=date.today(),
        employment_status='Active',
        audit_info={}
    )
    employees[employee1.email] = employee1
    with pytest.raises(Exception):
        employee2 = Employee(
            name='John Smith',
            email='jane.doe@example.com',
            phone_number='1234567890',
            department='HR',
            designation='Manager',
            joining_date=date.today(),
            employment_status='Active',
            audit_info={}
        )
        if employee2.email in employees:
            raise Exception('Email already exists')


def test_joining_date_future():
    with pytest.raises(ValueError):
        Employee(
            name='Future Employee',
            email='future@example.com',
            phone_number='1234567890',
            department='HR',
            designation='Manager',
            joining_date=date(3000, 1, 1),
            employment_status='Active',
            audit_info={}
        )


def test_employment_status_invalid():
    with pytest.raises(ValueError):
        Employee(
            name='Invalid Status',
            email='invalid@example.com',
            phone_number='1234567890',
            department='HR',
            designation='Manager',
            joining_date=date.today(),
            employment_status='Unknown',
            audit_info={}
        )


def test_employee_creation_audit_info():
    employee = Employee(
        name='Audit Employee',
        email='audit@example.com',
        phone_number='1234567890',
        department='HR',
        designation='Manager',
        joining_date=date.today(),
        employment_status='Active',
        audit_info={'created_by': 'admin', 'created_at': str(date.today())}
    )
    assert employee.audit_info['created_by'] == 'admin'
    assert employee.audit_info['created_at'] is not None
