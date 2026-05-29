import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  date_hired: string;
}

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Employees</h2>
    <div>
      <input [(ngModel)]="newEmployeeName" placeholder="Name" />
      <input [(ngModel)]="newEmployeeDepartment" placeholder="Department" />
      <input [(ngModel)]="newEmployeePosition" placeholder="Position" />
      <input [(ngModel)]="newEmployeeEmail" placeholder="Email" />
      <input [(ngModel)]="newEmployeePhone" placeholder="Phone" />
      <input [(ngModel)]="newEmployeeDateHired" placeholder="Date Hired" />
      <button (click)="addEmployee()">Add</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Position</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date Hired</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        @for (e of employees(); track e.id) {
          <tr>
            <td>{{ e.name }}</td>
            <td>{{ e.department }}</td>
            <td>{{ e.position }}</td>
            <td>{{ e.email }}</td>
            <td>{{ e.phone }}</td>
            <td>{{ e.date_hired }}</td>
            <td>
              <button (click)="remove(e.id)">Delete</button>
            </td>
          </tr>
        }
      </tbody>
    </table>
    @if (employees().length === 0) {
      <p>No entries.</p>
    }
  `,
  styles: [`
    h2 { font-size: 1.5rem; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
    tr:hover { background-color: #f5f5f5; }
    button { margin: 5px; }
  `],
})
export class EmployeeDetailComponent {
  private _employees = signal<Employee[]>([
    { id: 1, name: 'Alice', department: 'HR', position: 'Manager', email: 'alice@example.com', phone: '123-456-7890', date_hired: '2020-01-15' },
    { id: 2, name: 'Bob', department: 'Engineering', position: 'Developer', email: 'bob@example.com', phone: '123-456-7891', date_hired: '2021-02-20' },
    { id: 3, name: 'Charlie', department: 'Marketing', position: 'Analyst', email: 'charlie@example.com', phone: '123-456-7892', date_hired: '2022-03-25' },
    { id: 4, name: 'David', department: 'Sales', position: 'Sales Rep', email: 'david@example.com', phone: '123-456-7893', date_hired: '2023-04-30' },
    { id: 5, name: 'Eve', department: 'Finance', position: 'Accountant', email: 'eve@example.com', phone: '123-456-7894', date_hired: '2023-05-05' },
  ]);
  employees = this._employees.asReadonly();
  newEmployeeName = '';
  newEmployeeDepartment = '';
  newEmployeePosition = '';
  newEmployeeEmail = '';
  newEmployeePhone = '';
  newEmployeeDateHired = '';

  addEmployee() {
    const newId = this._employees().length + 1;
    this._employees.update(list => [...list, { id: newId, name: this.newEmployeeName, department: this.newEmployeeDepartment, position: this.newEmployeePosition, email: this.newEmployeeEmail, phone: this.newEmployeePhone, date_hired: this.newEmployeeDateHired }]);
    this.newEmployeeName = '';
    this.newEmployeeDepartment = '';
    this.newEmployeePosition = '';
    this.newEmployeeEmail = '';
    this.newEmployeePhone = '';
    this.newEmployeeDateHired = '';
  }

  remove(id: number) {
    this._employees.update(list => list.filter(e => e.id !== id));
  }
}