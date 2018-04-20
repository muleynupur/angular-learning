import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'employee-detail',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.id}}.{{employee.name}}-{{employee.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  [x: string]: any;

  public employees = [];
constructor(private_employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getemployees();
  }

}
