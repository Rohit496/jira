from flask import Blueprint, jsonify
from backend.app.models.employee import Employee

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/employees', methods=['GET'])
def get_employees():
    # Stub: Replace with actual data retrieval logic
    employees = [Employee(1, 'John Doe', 'Developer', 'Engineering', 'john@example.com', '123-456-7890', '2021-01-01')]
    return jsonify([e.__dict__ for e in employees])
