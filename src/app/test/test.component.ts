import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';


@Component({
selector: 'app-test',
  template: `
  <h2>{{"Hello" + parentData}}</h2>
  <button (click)="fireEvent()"></button>
   `,
styles: []
})
export class TestComponent implements OnInit {

@Input() public parentData;
@Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent() {
    this.childEvent.emit('Hey Code Evolution');
  }
}

