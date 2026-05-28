import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
    selector: 'app-employee-list',
    template: `
        <div *ngFor="let employee of employees">
            <p>{{ employee.name }} - {{ employee.position }}</p>
        </div>
        <button (click)="prevPage()">Previous</button>
        <button (click)="nextPage()">Next</button>
        <input type="number" [(ngModel)]="pageNumber" (change)="goToPage()" />
    `,
    styles: [``]
})
export class EmployeeListComponent implements OnInit {
    employees: Employee[] = [];
    pageNumber: number = 1;
    recordsPerPage: number = 10;

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.loadEmployees();
    }

    loadEmployees() {
        // Logic to load employees based on pagination
    }

    nextPage() {
        this.pageNumber++;
        this.loadEmployees();
    }

    prevPage() {
        this.pageNumber--;
        this.loadEmployees();
    }

    goToPage() {
        this.loadEmployees();
    }
}
