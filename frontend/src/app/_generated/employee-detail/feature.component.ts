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
    <div class="page">
      <header class="page-head">
        <h2>Employees</h2>
        <span class="count">{{ employees().length }} total</span>
      </header>

      <div class="card form-card">
        <div class="form-grid">
          <input [(ngModel)]="newEmployeeName" placeholder="Name" />
          <input [(ngModel)]="newEmployeeDepartment" placeholder="Department" />
          <input [(ngModel)]="newEmployeePosition" placeholder="Position" />
          <input [(ngModel)]="newEmployeeEmail" placeholder="Email" />
          <input [(ngModel)]="newEmployeePhone" placeholder="Phone" />
          <input [(ngModel)]="newEmployeeDateHired" placeholder="Date Hired" />
        </div>
        <button class="primary" (click)="addEmployee()">+ Add employee</button>
      </div>

      <div class="card table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date Hired</th>
              <th class="actions">Actions</th>
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
                <td class="actions">
                  <button class="danger sm" (click)="confirmDelete(e.id)">Delete</button>
                </td>
              </tr>
            }
          </tbody>
        </table>
        @if (employees().length === 0) {
          <p class="empty">No employees yet — add one above.</p>
        }
      </div>

      <div *ngIf="showModal" class="modal">
        <div class="modal-content">
          <h3>Confirm Deletion</h3>
          <p>Are you sure you want to delete {{ employeeToDelete?.name }}?</p>
          <button (click)="deleteEmployee()">Yes</button>
          <button (click)="cancelDelete()">No</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `:host { display: block; }
    .page { max-width: 1100px; margin: 0 auto; padding: 1.75rem 1.25rem 3rem; }
    .page-head { display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1.1rem; }
    .page-head h2 { font-size: 1.4rem; color: var(--text-0); }
    .count { color: var(--text-2); font-size: 0.8rem; }

    .card { background: var(--bg-1); border: 1px solid var(--border); border-radius: var(--r-xl); box-shadow: var(--sh-sm); }
    .form-card { padding: 1.1rem; margin-bottom: 1.25rem; }
    .form-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.7rem; margin-bottom: 0.95rem; }

    .table-card { padding: 0.35rem 0.35rem 0.1rem; overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; }
    thead th { text-align: left; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-2); font-weight: 600; padding: 0.7rem 0.85rem; border-bottom: 1px solid var(--border); white-space: nowrap; }
    tbody td { padding: 0.7rem 0.85rem; border-bottom: 1px solid var(--border); color: var(--text-1); font-size: 0.85rem; }
    tbody tr:last-child td { border-bottom: none; }
    tbody tr { transition: background 0.12s ease; }
    tbody tr:hover { background: var(--bg-2); }

    th.actions, td.actions { text-align: right; white-space: nowrap; }
    button.sm { min-height: 30px; padding: 0.28rem 0.7rem; font-size: 0.78rem; }

    .empty { padding: 1.75rem; text-align: center; color: var(--text-2); }
    .modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center; }
    .modal-content { background: white; padding: 1.5rem; border-radius: 8px; }
    `,
  ],
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
  showModal = false;
  employeeToDelete: Employee | null = null;

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

  confirmDelete(id: number) {
    this.employeeToDelete = this._employees().find(e => e.id === id) || null;
    this.showModal = true;
  }

  deleteEmployee() {
    if (this.employeeToDelete) {
      this._employees.update(list => list.filter(e => e.id !== this.employeeToDelete!.id));
    }
    this.showModal = false;
    this.employeeToDelete = null;
  }

  cancelDelete() {
    this.showModal = false;
    this.employeeToDelete = null;
  }

  remove(id: number) {
    this.confirmDelete(id);
  }
}