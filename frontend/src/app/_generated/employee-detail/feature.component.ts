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
            @for (e of paginatedEmployees(); track e.id) {
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

      <div class="pagination-controls">
        <button class="ghost" (click)="firstPage()" [disabled]="currentPage() === 1">First</button>
        <button class="ghost" (click)="previousPage()" [disabled]="currentPage() === 1">Previous</button>
        <span>Page {{ currentPage() }} of {{ totalPages() }}</span>
        <button class="ghost" (click)="nextPage()" [disabled]="currentPage() === totalPages()">Next</button>
        <button class="ghost" (click)="lastPage()" [disabled]="currentPage() === totalPages()">Last</button>
        <input type="number" [(ngModel)]="jumpToPage" min="1" [max]="totalPages()" placeholder="Jump to page" />
        <button class="primary" (click)="goToPage()">Go</button>
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

    .pagination-controls {
      display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem;
      justify-content: center; color: var(--text-1);
    }
    .pagination-controls input {
      width: 50px; text-align: center;
    }
    .pagination-controls button {
      min-width: 60px;
    }
    `
  ],
})
export class EmployeeDetailComponent {
  private _employees = signal<Employee[]>([
    { id: 1, name: 'Alice Johnson', department: 'Engineering', position: 'Developer', email: 'alice.j@example.com', phone: '555-0101', date_hired: '2021-06-15' },
    { id: 2, name: 'Bob Smith', department: 'Marketing', position: 'Manager', email: 'bob.s@example.com', phone: '555-0102', date_hired: '2020-03-22' },
    { id: 3, name: 'Charlie Brown', department: 'Sales', position: 'Salesperson', email: 'charlie.b@example.com', phone: '555-0103', date_hired: '2019-11-05' },
    { id: 4, name: 'Diana Prince', department: 'HR', position: 'Recruiter', email: 'diana.p@example.com', phone: '555-0104', date_hired: '2018-08-30' },
    { id: 5, name: 'Eve Adams', department: 'Finance', position: 'Analyst', email: 'eve.a@example.com', phone: '555-0105', date_hired: '2022-01-10' },
    { id: 6, name: 'Frank Castle', department: 'Security', position: 'Officer', email: 'frank.c@example.com', phone: '555-0106', date_hired: '2021-02-14' },
    { id: 7, name: 'Grace Hopper', department: 'Engineering', position: 'Lead Developer', email: 'grace.h@example.com', phone: '555-0107', date_hired: '2017-05-20' },
    { id: 8, name: 'Hank Pym', department: 'Research', position: 'Scientist', email: 'hank.p@example.com', phone: '555-0108', date_hired: '2016-09-12' },
    { id: 9, name: 'Ivy League', department: 'Education', position: 'Instructor', email: 'ivy.l@example.com', phone: '555-0109', date_hired: '2015-07-07' },
    { id: 10, name: 'Jack Sparrow', department: 'Logistics', position: 'Captain', email: 'jack.s@example.com', phone: '555-0110', date_hired: '2014-12-25' },
    { id: 11, name: 'Kara Danvers', department: 'Media', position: 'Reporter', email: 'kara.d@example.com', phone: '555-0111', date_hired: '2013-04-18' }
  ]);
  employees = this._employees.asReadonly();

  private _paginationState = signal({ currentPage: 1, totalRecords: this._employees().length, recordsPerPage: 10 });
  paginationState = this._paginationState.asReadonly();

  paginatedEmployees = computed(() => {
    const start = (this.paginationState().currentPage - 1) * this.paginationState().recordsPerPage;
    const end = start + this.paginationState().recordsPerPage;
    return this.employees().slice(start, end);
  });

  totalRecords = computed(() => this.employees().length);
  totalPages = computed(() => Math.ceil(this.totalRecords() / this.paginationState().recordsPerPage));
  currentPage = computed(() => this.paginationState().currentPage);

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this._paginationState.update(state => ({ ...state, currentPage: state.currentPage + 1 }));
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this._paginationState.update(state => ({ ...state, currentPage: state.currentPage - 1 }));
    }
  }

  firstPage() {
    this._paginationState.update(state => ({ ...state, currentPage: 1 }));
  }

  lastPage() {
    this._paginationState.update(state => ({ ...state, currentPage: this.totalPages() }));
  }

  jumpToPage: number = 1;

  goToPage() {
    if (this.jumpToPage >= 1 && this.jumpToPage <= this.totalPages()) {
      this._paginationState.update(state => ({ ...state, currentPage: this.jumpToPage }));
    }
  }

  newEmployeeName = '';
  newEmployeeDepartment = '';
  newEmployeePosition = '';
  newEmployeeEmail = '';
  newEmployeePhone = '';
  newEmployeeDateHired = '';

  addEmployee() {
    const newEmployee: Employee = {
      id: this.totalRecords() + 1,
      name: this.newEmployeeName,
      department: this.newEmployeeDepartment,
      position: this.newEmployeePosition,
      email: this.newEmployeeEmail,
      phone: this.newEmployeePhone,
      date_hired: this.newEmployeeDateHired
    };
    this._employees.update(list => [...list, newEmployee]);
    this._paginationState.update(state => ({ ...state, totalRecords: this.totalRecords() }));
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

  showEditModal = false;
  editEmployeeData: Employee | null = null;

  editEmployee(employee: Employee) {
    this.editEmployeeData = { ...employee };
    this.showEditModal = true;
  }

  saveEmployee() {
    if (this.editEmployeeData) {
      this._employees.update(list => list.map(e => e.id === this.editEmployeeData!.id ? this.editEmployeeData! : e));
      this.showEditModal = false;
    }
  }

  cancelEdit() {
    this.showEditModal = false;
    this.editEmployeeData = null;
  }

  showModal = false;
  employeeToDelete: Employee | null = null;

  confirmDelete(id: number) {
    this.employeeToDelete = this.employees().find(e => e.id === id) || null;
    this.showModal = true;
  }

  deleteEmployee() {
    if (this.employeeToDelete) {
      this._employees.update(list => list.filter(e => e.id !== this.employeeToDelete!.id));
      this._paginationState.update(state => ({ ...state, totalRecords: this.totalRecords() }));
      this.showModal = false;
      this.employeeToDelete = null;
    }
  }

  cancelDelete() {
    this.showModal = false;
    this.employeeToDelete = null;
  }
}