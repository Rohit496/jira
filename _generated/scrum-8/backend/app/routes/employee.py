from flask import Blueprint, jsonify
from backend.app.models.employee import EmployeeRecord

employee_routes = Blueprint('employee', __name__)

@employee_routes.route('/employees', methods=['GET'])
def get_employees():
    # Stub: Replace with actual data retrieval logic
    return jsonify([])
