from flask import Blueprint, jsonify
from ..models.employee import Employee
from ..services.employee import get_paginated_employees

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/employees', methods=['GET'])
def list_employees():
    employees = get_paginated_employees()
    return jsonify(employees)
