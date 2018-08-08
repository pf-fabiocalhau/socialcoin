import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


export interface Participant {
  id: number;
  name: string;
  debt: number;
  email: string;
  neighborTeam: string;
}

const ELEMENT_DATA: Participant[] = [
  {id: 1, name: 'John Doe', debt: 1000, email: 'johdoe@doe.com', neighborTeam: 'Team A'},
  {id: 2, name: 'Mary Doe', debt: 4000, email: 'a@a.com', neighborTeam: 'Team B'},
  {id: 3, name: 'Richard Doe', debt: 6000, email: 'b@b.com', neighborTeam: 'Team A'},
  {id: 4, name: 'Paul Doe', debt: 9000, email: 'c@c.com', neighborTeam: ''},
  {id: 5, name: 'Ringo Doe', debt: 1000, email: 'd@d.com', neighborTeam: 'Team B'},
  {id: 6, name: 'Carl Paul', debt: 1200, email: 'e@e.com', neighborTeam: ''},
  {id: 7, name: 'Brent Doe', debt: 1400, email: 'f@f.com', neighborTeam: ''},
  {id: 8, name: 'Erick Paul', debt: 1500, email: 'g@g.com', neighborTeam: 'Team A'},
  {id: 9, name: 'Danny Doe', debt: 1800, email: 'h@h.com', neighborTeam: ''},
  {id: 10, name: 'Rick John', debt: 2000, email: 'i@i.com', neighborTeam: 'Team B'},
];

@Component({
  selector: 'sca-manage-participants',
  templateUrl: './manage-participants.component.html',
  styleUrls: ['./manage-participants.component.scss']
})
export class ManageParticipantsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'email', 'debt', 'neighborTeam', 'edit'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selectedParticipant = null;

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
    this.selectedParticipant = activityId;
  }

  closeAssign(neighborTeamName) {
    const updateParticipant = ELEMENT_DATA.find((obj) => {
      return obj.name === this.selectedParticipant;
    });
    updateParticipant.neighborTeam = neighborTeamName;
    this.selectedParticipant = null;
  }

}
