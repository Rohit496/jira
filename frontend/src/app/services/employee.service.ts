import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    private apiUrl = '/employee/';

    constructor(private http: HttpClient) {}

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.apiUrl, employee);
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiUrl}${id}`);
    }

    updateEmployee(id: number, employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiUrl}${id}`, employee);
    }

    deleteEmployee(id: number): Observable<Employee> {
        return this.http.delete<Employee>(`${this.apiUrl}${id}`);
    }
}
