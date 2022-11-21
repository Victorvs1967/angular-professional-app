import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import employees from './data/employees.json';

@Component({
  selector: 'vs-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent {

  employees: Employee[] = employees;
  title: string = 'Employee Management Solutions - EMS';
  showIcon: boolean = false;

  private _designationFilter: string = '';
  message: string = '';
  filteredEmployees: Employee[] = employees;

  set designationFilter(value: string) {
    this._designationFilter = value;
    this.filterByDestignation();
  }

  get designationFilter(): string {
    return this._designationFilter;
  }

  filterByDestignation() {
    this.filteredEmployees = this.employees.filter(employee => employee.designation.includes(this._designationFilter));
  }

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }
}
