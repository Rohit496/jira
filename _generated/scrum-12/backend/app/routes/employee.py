from flask import Blueprint, jsonify, request
from ..models.employee import EmployeeRecord, PaginationSettings

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/employees', methods=['GET'])
def get_employees():
    # This is a stub for fetching employees
    employees = [
        EmployeeRecord(1, 'Alice Johnson', 'Engineering', 'Developer', 'alice.j@example.com', '123-456-7890', '2020-01-15'),
        EmployeeRecord(2, 'Bob Smith', 'Marketing', 'Manager', 'bob.s@example.com', '234-567-8901', '2019-03-22'),
        EmployeeRecord(3, 'Charlie Brown', 'Sales', 'Salesperson', 'charlie.b@example.com', '345-678-9012', '2021-06-10'),
        EmployeeRecord(4, 'Diana Prince', 'HR', 'HR Specialist', 'diana.p@example.com', '456-789-0123', '2018-11-05'),
        EmployeeRecord(5, 'Eve Adams', 'Finance', 'Accountant', 'eve.a@example.com', '567-890-1234', '2022-02-28')
    ]
    return jsonify([e.__dict__ for e in employees])
