import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployees () {
    return [
      // tslint:disable-next-line:quotemark
    {"id": 1 , "name": "Nupur", "age": 25},
    // tslint:disable-next-line:quotemark
    {"id": 2 , "name": "Pradnya", "age": 25},
    // tslint:disable-next-line:quotemark
    {"id": 3 , "name": "Sarita", "age": 25},
    // tslint:disable-next-line:quotemark
    {"id": 4 , "name": "Maya" , "age": 25}
    ];
  }

}
