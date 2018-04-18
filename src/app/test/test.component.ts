import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  <h2 [style.color]="hasError ? 'red' : 'green'">style binding</h2>
  <h2 [style.color]="highlightColor">Style Binding 2</h2>
  <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
   `,
styles: []
})
export class TestComponent implements OnInit {

// tslint:disable-next-line:quotemark
public name = "Code Evolution";
public hasError = false;
public isSpecial = true;
public highlightColor = 'orange';
public titleStyles = {
  // tslint:disable-next-line:quotemark
  color : "blue",
  // tslint:disable-next-line:quotemark
  fontstyle : "italic"
// tslint:disable-next-line:semicolon
}





  constructor() { }

  ngOnInit() {
  }

}
