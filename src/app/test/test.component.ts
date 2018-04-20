import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-test',
  template: `
  <div *ngFor="let color of colors; even as e">
  <h2>{{e}} {{color}}</h2>
  </div>
   `,
styles: []
})
export class TestComponent implements OnInit {

// tslint:disable-next-line:quotemark
public colors = ["red", "blue", "green", "orange", "yellow"];

  constructor() { }

  ngOnInit() {
  }
}

