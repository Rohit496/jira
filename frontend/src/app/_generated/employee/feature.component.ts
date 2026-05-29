import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  date_hired: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Employees</h2>
    @for (e of employees(); track e.id) {
      <div>{{ e.name }} — {{ e.position }} — {{ e.department }} — {{ e.email }} — {{ e.phone }} — {{ e.date_hired }}
      </div>
    }
    @if (employees().length === 0) {
      <p>No entries.</p>
    }
  `,
  styles: [`h2 { font-size: 1.5rem; }`],
})
export class EmployeeComponent {
  private _employees = signal<Employee[]>([
    { id: 1, name: 'Alice', position: 'Developer', department: 'Engineering', email: 'alice@example.com', phone: '123-456-7890', date_hired: '2021-01-15' },
    { id: 2, name: 'Bob', position: 'Designer', department: 'Marketing', email: 'bob@example.com', phone: '123-456-7891', date_hired: '2020-03-22' },
    { id: 3, name: 'Charlie', position: 'Manager', department: 'Sales', email: 'charlie@example.com', phone: '123-456-7892', date_hired: '2019-07-30' },
  ]);
  employees = this._employees.asReadonly();
}