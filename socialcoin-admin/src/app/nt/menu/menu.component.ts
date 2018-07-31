import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sca-nt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor() { 
  }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

}
