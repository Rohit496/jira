from flask import Blueprint, request
from ..models.employee import Employee

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/delete', methods=['DELETE'])
def delete_employee():
    # Logic to delete employee
    return {'message': 'Employee deleted successfully'}, 200
