from flask import Blueprint, jsonify
from backend.app.models.employee import Employee

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/employees')
def get_employees():
    employees = [
        Employee(id=1, name='Alice', position='Developer', department='Engineering'),
        Employee(id=2, name='Bob', position='Designer', department='Design'),
        Employee(id=3, name='Charlie', position='Manager', department='Sales'),
        Employee(id=4, name='David', position='Developer', department='Engineering'),
        Employee(id=5, name='Eve', position='Designer', department='Design'),
        Employee(id=6, name='Frank', position='Manager', department='Sales'),
        Employee(id=7, name='Grace', position='Developer', department='Engineering'),
        Employee(id=8, name='Heidi', position='Designer', department='Design'),
        Employee(id=9, name='Ivan', position='Manager', department='Sales'),
        Employee(id=10, name='Judy', position='Developer', department='Engineering'),
        Employee(id=11, name='Karl', position='Designer', department='Design')
    ]
    return jsonify([emp.__dict__ for emp in employees])
