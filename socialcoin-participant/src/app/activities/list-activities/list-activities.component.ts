import { Component, OnInit } from '@angular/core';

export interface Activity {
  id: number;
  name: string;
  description: string;
  socialValue: number;
  status: string;
}

const ELEMENT_DATA: Activity[] = [
  {id: 1, name: 'Schoffelen', socialValue: 20, status: 'Assigned', description: '<span>di 13 mrt.</span><br><span>12:00 - 13:00</span>'},
  {id: 2, name: 'Grasmaaien', socialValue: 20, status: 'Assigned', description: '<span>do 15 mrt.</span><br><span>10:30 - 12:00</span>'},
  {id: 3, name: 'Honden uitlaten', socialValue: 40, status: 'Completed', description: '<span>do 15 mrt.</span><br><span>14:30 - 15:30</span>'},
  {id: 4, name: 'Bandjes controlaren', socialValue: 100, status: 'Assigned', description: '<span>vr 13 apr. t/m zo 15 apr.</span><br><span>17:00 - 18:00</span>'},
  {id: 5, name: 'Koffie inschenken', socialValue: 10, status: 'Completed', description: '<span>di 13 mrt.</span><br><span>12:00 - 13:00</span>'},
];

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
