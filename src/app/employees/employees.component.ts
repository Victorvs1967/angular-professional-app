import { Component } from '@angular/core';
import employees from './data/employees.json';

@Component({
  selector: 'vs-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent {

  employees: any[] = employees;
  title: string = 'Employee Management Solutions - EMS';
  showIcon: boolean = false;

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }
}
