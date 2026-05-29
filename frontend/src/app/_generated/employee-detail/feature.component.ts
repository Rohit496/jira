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
        <span class="count">{{ totalRecords() }} total</span>
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
            <tr *ngFor="let e of paginatedEmployees(); trackBy: trackById">
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
          </tbody>
        </table>
        <p *ngIf="employees().length === 0" class="empty">No employees yet — add one above.</p>
      </div>

      <div class="pagination-controls">
        <button class="ghost" (click)="firstPage()" [disabled]="currentPage() === 1">First</button>
        <button class="ghost" (click)="previousPage()" [disabled]="currentPage() === 1">Previous</button>
        <span>Page <span class="current-page">{{ currentPage() }}</span> of {{ totalPages() }}</span>
        <button class="ghost" (click)="nextPage()" [disabled]="currentPage() === totalPages()">Next</button>
        <button class="ghost" (click)="lastPage()" [disabled]="currentPage() === totalPages()">Last</button>
        <select [(ngModel)]="paginationSettings().recordsPerPage" (change)="updateRecordsPerPage()">
          <option *ngFor="let option of recordsPerPageOptions" [value]="option">{{ option }} per page</option>
        </select>
      </div>

      <ng-container *ngIf="showEditModal">
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
      </ng-container>

      <ng-container *ngIf="showModal">
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
      </ng-container>
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
    thead th { text-align: left; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-2); font-weight: 600; padding: 0.7rem 0; }
    tbody tr { border-top: 1px solid var(--border); }
    tbody tr:hover { background: var(--bg-2); }
    td { padding: 0.7rem 0.5rem; color: var(--text-1); }
    .actions { text-align: right; }

    .pagination-controls { display: flex; justify-content: center; align-items: center; padding: 0.75rem 0; position: fixed; bottom: 0; left: 0; right: 0; background: var(--bg-1); border-top: 1px solid var(--border); }
    .pagination-controls button, .pagination-controls select { margin: 0 0.5rem; }
    .pagination-controls span { color: var(--text-1); }

    .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(5, 8, 16, 0.66); display: flex; align-items: center; justify-content: center; }
    .modal-card { background: var(--bg-1); border: 1px solid var(--border); border-radius: var(--r-xl); box-shadow: var(--sh-lg); padding: 1.5rem; width: 90%; max-width: 500px; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem; }
    `,
  ],
})
export class EmployeeDetailComponent {
  private _employees = signal<Employee[]>([
    { id: 1, name: 'Alice Johnson', department: 'Engineering', position: 'Software Engineer', email: 'alice.johnson@example.com', phone: '555-0101', date_hired: '2020-01-15' },
    { id: 2, name: 'Bob Smith', department: 'Marketing', position: 'Marketing Manager', email: 'bob.smith@example.com', phone: '555-0102', date_hired: '2019-03-22' },
    { id: 3, name: 'Carol White', department: 'Sales', position: 'Sales Executive', email: 'carol.white@example.com', phone: '555-0103', date_hired: '2021-06-10' },
    { id: 4, name: 'David Brown', department: 'HR', position: 'HR Specialist', email: 'david.brown@example.com', phone: '555-0104', date_hired: '2018-11-05' },
    { id: 5, name: 'Eve Black', department: 'Finance', position: 'Financial Analyst', email: 'eve.black@example.com', phone: '555-0105', date_hired: '2022-02-28' }
  ]);
  employees = this._employees.asReadonly();

  private _paginationSettings = signal({ currentPage: 1, recordsPerPage: 2 });
  paginationSettings = this._paginationSettings.asReadonly();

  recordsPerPageOptions = [2, 3, 5];

  totalRecords = computed(() => this._employees().length);
  totalPages = computed(() => Math.ceil(this.totalRecords() / this.paginationSettings().recordsPerPage));

  paginatedEmployees = computed(() => {
    const start = (this.paginationSettings().currentPage - 1) * this.paginationSettings().recordsPerPage;
    const end = start + this.paginationSettings().recordsPerPage;
    return this._employees().slice(start, end);
  });

  currentPage = computed(() => this.paginationSettings().currentPage);

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

  firstPage() {
    this._paginationSettings.update(settings => ({ ...settings, currentPage: 1 }));
  }

  previousPage() {
    this._paginationSettings.update(settings => ({ ...settings, currentPage: Math.max(1, settings.currentPage - 1) }));
  }

  nextPage() {
    this._paginationSettings.update(settings => ({ ...settings, currentPage: Math.min(this.totalPages(), settings.currentPage + 1) }));
  }

  lastPage() {
    this._paginationSettings.update(settings => ({ ...settings, currentPage: this.totalPages() }));
  }

  updateRecordsPerPage() {
    this._paginationSettings.update(settings => ({ ...settings, currentPage: 1 }));
  }

  trackById(index: number, item: Employee) {
    return item.id;
  }

  editEmployee(employee: Employee) {
    this.editEmployeeData = { ...employee };
    this.showEditModal = true;
  }

  saveEmployee() {
    this._employees.update(list => list.map(e => e.id === this.editEmployeeData!.id ? this.editEmployeeData! : e));
    this.showEditModal = false;
  }

  confirmDelete(id: number) {
    this.employeeToDelete = this._employees().find(e => e.id === id) || null;
    this.showModal = true;
  }

  deleteEmployee() {
    this._employees.update(list => list.filter(e => e.id !== this.employeeToDelete!.id));
    this.showModal = false;
  }

  cancelEdit() {
    this.showEditModal = false;
  }

  cancelDelete() {
    this.showModal = false;
  }

  newEmployeeName = '';
  newEmployeeDepartment = '';
  newEmployeePosition = '';
  newEmployeeEmail = '';
  newEmployeePhone = '';
  newEmployeeDateHired = '';

  editEmployeeData: Employee | null = null;
  employeeToDelete: Employee | null = null;
  showEditModal = false;
  showModal = false;
}