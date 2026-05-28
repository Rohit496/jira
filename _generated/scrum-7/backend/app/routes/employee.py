from flask import Blueprint, jsonify, request
from backend.app.models.employee import Employee

employee_bp = Blueprint('employee', __name__)

employees = [Employee(1, 'John Doe', 'Employee details here'), Employee(2, 'Jane Smith', 'Employee details here')]

@employee_bp.route('/employees', methods=['GET'])
def get_employees():
    return jsonify([{'id': emp.id, 'name': emp.name, 'details': emp.details} for emp in employees])

@employee_bp.route('/employees/<int:id>', methods=['DELETE'])
def delete_employee(id):
    global employees
    employees = [emp for emp in employees if emp.id != id]
    return jsonify({'message': 'Employee deleted'}), 204
