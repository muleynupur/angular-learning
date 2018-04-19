import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  </h2>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">log</button>
   `,
styles: []
})
export class TestComponent implements OnInit {

// tslint:disable-next-line:quotemark
public name = "Code Evolution";


  constructor() { }

  ngOnInit() {
  }
  logMessage(value) {
    console.log(value);
  }
}

