import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-test',
  template: `
  <h2>
  Welcome {{name}}
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='Welcome Nupur'">Greet</button>
  {{greeting}}
   `,
styles: []
})
export class TestComponent implements OnInit {

// tslint:disable-next-line:quotemark
public name = "Code Evolution";
public greeting = '';

  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    // tslint:disable-next-line:semicolon
    console.log(event);
    this.greeting = event.type;
  }
}
