import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

export interface Activity {
  id: number;
  name: string;
  description: string;
  socialValue: number;
  status: string;
  neighborTeam: string;
}

const ELEMENT_DATA: Activity[] = [
  {id: 1, name: 'Gardening', socialValue: 10, status: 'Registered', neighborTeam: '', description: ''},
  {id: 2, name: 'Daycare', socialValue: 40, status: 'Registered', neighborTeam: '', description: ''},
  {id: 3, name: 'Teaching', socialValue: 60, status: 'Assigned', neighborTeam: 'Team A', description: ''},
  {id: 4, name: 'Healing', socialValue: 90, status: 'Assigned', neighborTeam: 'Team B', description: ''},
  {id: 5, name: 'Driving', socialValue: 10, status: 'Completed', neighborTeam: 'Team B', description: ''},
  {id: 6, name: 'Running', socialValue: 12, status: 'Completed', neighborTeam: 'Team A', description: ''},
  {id: 7, name: 'Guiding', socialValue: 14, status: 'Assigned', neighborTeam: 'Team B', description: ''},
  {id: 8, name: 'Gardening', socialValue: 15, status: 'Assigned', neighborTeam: 'Team A', description: ''},
  {id: 9, name: 'Daycare', socialValue: 18, status: 'Registered', neighborTeam: '', description: ''},
  {id: 10, name: 'Driving', socialValue: 20, status: 'Registered', neighborTeam: '', description: ''},
];

@Component({
  selector: 'sca-manage-activities',
  templateUrl: './manage-activities.component.html',
  styleUrls: ['./manage-activities.component.scss']
})
export class ManageActivitiesComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'status', 'socialValue', 'neighborTeam', 'edit'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selectedActivity = null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

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

  closeAssign(neighborTeamName) {
    const updateActivity = ELEMENT_DATA.find((obj) => {
      return obj.name === this.selectedActivity;
    });
    updateActivity.neighborTeam = neighborTeamName;
    this.selectedActivity = null;
  }

}
