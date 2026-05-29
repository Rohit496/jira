from flask import Blueprint, jsonify
from backend.app.models.employee import EmployeeRecord

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/employees', methods=['GET'])
def get_employees():
    employees = [
        EmployeeRecord(1, 'Alice', 'Developer', 'Engineering', 'alice@example.com', '123-456-7890', '2021-01-15'),
        EmployeeRecord(2, 'Bob', 'Designer', 'Marketing', 'bob@example.com', '123-456-7891', '2020-03-22'),
        EmployeeRecord(3, 'Charlie', 'Manager', 'Sales', 'charlie@example.com', '123-456-7892', '2019-07-30'),
    ]
    return jsonify([emp.__dict__ for emp in employees])