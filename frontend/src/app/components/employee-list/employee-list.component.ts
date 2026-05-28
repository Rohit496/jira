import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  template: `
    <h1>Employee List</h1>
    <ul>
      <li *ngFor="let employee of employees">{{ employee.name }} - {{ employee.email }}</li>
    </ul>
    <button (click)="addEmployee()">Add Employee</button>
  `,
  styles: [
    'h1 { font-size: 24px; }',
    'ul { list-style-type: none; }'
  ]
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  addEmployee() {
    const newEmployee: Employee = { name: 'New Employee', email: 'new@example.com', phone_number: '1234567890', department: 'HR', designation: 'Manager', joining_date: new Date(), employment_status: 'Active', audit_info: {} };
    this.employeeService.createEmployee(newEmployee).subscribe(() => this.loadEmployees());
  }
}