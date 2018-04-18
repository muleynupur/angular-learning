import { Component, OnInit } from '@angular/core';

@Component({



  selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  <h2 [style.color]="'orange'">style binding</h2>
   `,
styles: []
})
export class TestComponent implements OnInit {

// tslint:disable-next-line:quotemark
public name = "Code Evolution";
public hasError = false;
public isSpecial = true;




  constructor() { }

  ngOnInit() {
  }

}
