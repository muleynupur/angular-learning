import { Component, OnInit } from '@angular/core';

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
  public employees = [
    // tslint:disable-next-line:quotemark
    {"id": 1 , "name": "Nupur", "age": 25},
    // tslint:disable-next-line:quotemark
    {"id": 2 , "name": "Pradnya", "age": 25},
    // tslint:disable-next-line:quotemark
    {"id": 3 , "name": "Sarita", "age": 25},
    // tslint:disable-next-line:quotemark
    {"id": 4 , "name": "Maya" , "age": 25}
  ];
  constructor() { }

  ngOnInit() {
  }

}
