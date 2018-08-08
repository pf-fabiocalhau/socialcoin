import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sca-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  view: string;

  constructor() {
    this.view = location.pathname.slice(1, 3);
  }

  ngOnInit() {
  }

}
