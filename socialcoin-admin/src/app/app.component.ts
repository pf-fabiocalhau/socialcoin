import { Component, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'sca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Social Coin';
  
  view: string;

  constructor() {
    this.view = location.pathname.slice(1,3);
  }
}
