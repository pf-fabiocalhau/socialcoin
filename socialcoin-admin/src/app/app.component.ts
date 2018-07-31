import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { Router } from '@angular/router';

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
