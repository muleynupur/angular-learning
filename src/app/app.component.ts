import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  // tslint:disable-next-line:quotemark
  public name = "Nupur";
  // tslint:disable-next-line:quotemark
  public message  = "";
}
