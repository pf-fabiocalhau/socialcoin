import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

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
