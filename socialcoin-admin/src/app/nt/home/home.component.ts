import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

export interface Activity {
  id: number;
  name: string;
  description: string;
  socialValue: number;
  status: string;
  participant: string;
}

const ELEMENT_DATA: Activity[] = [
  {id: 1, name: 'Gardening', socialValue: 10, status: 'Registered', participant: '', description: ''},
  {id: 2, name: 'Daycare', socialValue: 40, status: 'Registered', participant: '', description: ''},
  {id: 3, name: 'Teaching', socialValue: 60, status: 'Assigned', participant: 'John Doe', description: ''},
  {id: 4, name: 'Healing', socialValue: 90, status: 'Assigned', participant: 'Richard Doe', description: ''},
  {id: 5, name: 'Driving', socialValue: 10, status: 'Completed', participant: 'Richard Doe', description: ''},
  {id: 6, name: 'Running', socialValue: 12, status: 'Completed', participant: 'John Doe', description: ''},
  {id: 7, name: 'Guiding', socialValue: 14, status: 'Assigned', participant: 'Richard Doe', description: ''},
  {id: 8, name: 'Gardening', socialValue: 15, status: 'Assigned', participant: 'John Doe', description: ''},
  {id: 9, name: 'Daycare', socialValue: 18, status: 'Registered', participant: '', description: ''},
  {id: 10, name: 'Driving', socialValue: 20, status: 'Registered', participant: '', description: ''},
];

@Component({
  selector: 'sca-nt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'status', 'socialValue', 'participant', 'review'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selectedActivity = null;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onAssign(activityId) {
    this.selectedActivity = activityId;
  }

  closeAssign(participantName) {
    const updateActivity = ELEMENT_DATA.find((obj) => {
      return obj.name === this.selectedActivity;
    });
    updateActivity.participant = participantName;
    this.selectedActivity = null;
  }
}
