import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'employee-list',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  [x: string]: any;
  public employees = [];

  constructor(private_employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getemployees();
  }

}
