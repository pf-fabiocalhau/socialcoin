import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-simple-toolbar',
  templateUrl: './simple-toolbar.component.html',
  styleUrls: ['./simple-toolbar.component.scss']
})
export class SimpleToolbarComponent implements OnInit {

  title;

  constructor() { }

  ngOnInit() {
    this.title =  "Saldo";
  }

}
