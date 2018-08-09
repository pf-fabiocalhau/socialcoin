import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-activities-toolbar',
  templateUrl: './list-activities-toolbar.component.html',
  styleUrls: ['./list-activities-toolbar.component.scss']
})
export class ListActivitiesToolbarComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
    console.log()
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
