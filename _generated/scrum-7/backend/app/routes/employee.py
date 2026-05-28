from flask import Blueprint, request
from backend.app.models.employee import Employee

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/delete/<int:id>', methods=['DELETE'])
def delete_employee(id):
    # Logic to delete employee from database
    return {'message': 'Employee deleted'}, 200