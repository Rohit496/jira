import { Component, signal, computed } from '@angular/core';
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
                  <button class="primary sm" (click)="editEmployee(e)">Edit</button>
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

      @if (showEditModal) {
        <div class="modal-overlay" (click)="cancelEdit()">
          <div class="modal-card" (click)="$event.stopPropagation()">
            <h3>Edit Employee</h3>
            <div class="form-grid">
              <input [(ngModel)]="editEmployeeData!.name" placeholder="Name" />
              <input [(ngModel)]="editEmployeeData!.department" placeholder="Department" />
              <input [(ngModel)]="editEmployeeData!.position" placeholder="Position" />
              <input [(ngModel)]="editEmployeeData!.email" placeholder="Email" />
              <input [(ngModel)]="editEmployeeData!.phone" placeholder="Phone" />
              <input [(ngModel)]="editEmployeeData!.date_hired" placeholder="Date Hired" />
            </div>
            <div class="modal-actions">
              <button class="ghost" (click)="cancelEdit()">Cancel</button>
              <button class="primary" (click)="saveEmployee()">Save</button>
            </div>
          </div>
        </div>
      }

      @if (showModal) {
        <div class="modal-overlay" (click)="cancelDelete()">
          <div class="modal-card" (click)="$event.stopPropagation()">
            <h3>Confirm deletion</h3>
            <p>Are you sure you want to delete <strong>{{ employeeToDelete?.name }}</strong>? This action can't be undone.</p>
            <div class="modal-actions">
              <button class="ghost" (click)="cancelDelete()">Cancel</button>
              <button class="danger" (click)="deleteEmployee()">Delete</button>
            </div>
          </div>
        </div>
      }
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

    .modal-overlay {
      position: fixed; inset: 0;
      background: rgba(5, 8, 16, 0.66);
      backdrop-filter: blur(2px);
      display: flex; align-items: center; justify-content: center;
      padding: 1rem; z-index: 50;
    }
    .modal-card {
      background: var(--bg-1);
      border: 1px solid var(--border);
      border-radius: var(--r-xl);
      box-shadow: var(--sh-lg);
      padding: 1.4rem 1.5rem;
      width: 100%; max-width: 400px;
    }
    .modal-card h3 { font-size: 1.05rem; color: var(--text-0); margin-bottom: 0.5rem; }
  `],
})
export class EmployeeDetailComponent {
  private _employees = signal<Employee[]>([
    { id: 1, name: 'Alice Johnson', department: 'Engineering', position: 'Software Engineer', email: 'alice.j@example.com', phone: '555-0101', date_hired: '2020-01-15' },
    { id: 2, name: 'Bob Smith', department: 'Marketing', position: 'Marketing Manager', email: 'bob.s@example.com', phone: '555-0102', date_hired: '2019-03-22' },
    { id: 3, name: 'Charlie Brown', department: 'Sales', position: 'Sales Executive', email: 'charlie.b@example.com', phone: '555-0103', date_hired: '2018-07-11' },
    { id: 4, name: 'Diana Prince', department: 'HR', position: 'HR Specialist', email: 'diana.p@example.com', phone: '555-0104', date_hired: '2021-05-30' },
    { id: 5, name: 'Eve Adams', department: 'Finance', position: 'Accountant', email: 'eve.a@example.com', phone: '555-0105', date_hired: '2017-09-18' }
  ]);
  employees = this._employees.asReadonly();

  newEmployeeName = '';
  newEmployeeDepartment = '';
  newEmployeePosition = '';
  newEmployeeEmail = '';
  newEmployeePhone = '';
  newEmployeeDateHired = '';

  showEditModal = false;
  showModal = false;
  editEmployeeData: Employee | null = null;
  employeeToDelete: Employee | null = null;

  addEmployee() {
    const newEmployee: Employee = {
      id: Date.now(),
      name: this.newEmployeeName,
      department: this.newEmployeeDepartment,
      position: this.newEmployeePosition,
      email: this.newEmployeeEmail,
      phone: this.newEmployeePhone,
      date_hired: this.newEmployeeDateHired
    };
    this._employees.update(list => [...list, newEmployee]);
    this.clearForm();
  }

  clearForm() {
    this.newEmployeeName = '';
    this.newEmployeeDepartment = '';
    this.newEmployeePosition = '';
    this.newEmployeeEmail = '';
    this.newEmployeePhone = '';
    this.newEmployeeDateHired = '';
  }

  editEmployee(employee: Employee) {
    this.editEmployeeData = { ...employee };
    this.showEditModal = true;
  }

  saveEmployee() {
    if (this.editEmployeeData) {
      this._employees.update(list => list.map(e => e.id === this.editEmployeeData!.id ? this.editEmployeeData! : e));
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.showEditModal = false;
    this.editEmployeeData = null;
  }

  confirmDelete(id: number) {
    this.employeeToDelete = this._employees().find(e => e.id === id) || null;
    this.showModal = true;
  }

  deleteEmployee() {
    if (this.employeeToDelete) {
      this._employees.update(list => list.filter(e => e.id !== this.employeeToDelete!.id));
      this.cancelDelete();
    }
  }

  cancelDelete() {
    this.showModal = false;
    this.employeeToDelete = null;
  }
}