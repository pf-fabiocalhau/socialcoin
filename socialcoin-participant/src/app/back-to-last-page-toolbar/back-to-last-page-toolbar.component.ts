import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-to-last-page-toolbar',
  templateUrl: './back-to-last-page-toolbar.component.html',
  styleUrls: ['./back-to-last-page-toolbar.component.scss']
})
export class BackToLastPageToolbarComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  showBack() {
    if (this._location.path()) {
      return true;
    }
    return false;
  }

  backClicked() {
    this._location.back();
  }

}
