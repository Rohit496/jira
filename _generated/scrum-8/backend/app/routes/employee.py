from flask import Blueprint, jsonify
from backend.app.models.employee import Employee

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/employees', methods=['GET'])
def get_employees():
    # Simulate fetching employees
    employees = [
        Employee(1, 'John Doe', 'Developer', 'Engineering', 'john@example.com', '123-456-7890', 'Active'),
        Employee(2, 'Jane Smith', 'Manager', 'Sales', 'jane@example.com', '098-765-4321', 'Active')
    ]
    return jsonify([e.__dict__ for e in employees])
