import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'sca-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  
  view: string;

  constructor() {
    this.view = location.pathname.slice(1,3);
  }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }


}
