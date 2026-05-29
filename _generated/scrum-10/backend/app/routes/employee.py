from flask import Blueprint, jsonify, request
from backend.app.models.employee import Employee

employee_bp = Blueprint('employee', __name__)

employees = []

@employee_bp.route('/employees', methods=['GET'])
def get_employees():
    return jsonify([e.__dict__ for e in employees])

@employee_bp.route('/employees', methods=['POST'])
def add_employee():
    data = request.json
    new_employee = Employee(**data)
    employees.append(new_employee)
    return jsonify(new_employee.__dict__), 201

@employee_bp.route('/employees/<int:id>', methods=['DELETE'])
def delete_employee(id):
    global employees
    employees = [e for e in employees if e.id != id]
    return '', 204
