import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-test',
  template: `
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You picker red color</div>
  <div *ngSwitchCase="'blue'">You picker blue color</div>
  <div *ngSwitchCase="'green'">You picker green color</div>
   `,
styles: []
})
export class TestComponent implements OnInit {

// tslint:disable-next-line:quotemark
public color = "red";

  constructor() { }

  ngOnInit() {
  }
}

