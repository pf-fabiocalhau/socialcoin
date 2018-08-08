import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

export interface NeighborTeam {
  id: number;
  name: string;
  contactName: string;
  email: string;
}

const ELEMENT_DATA: NeighborTeam[] = [
  {id: 1, name: 'Team A', contactName: 'John Doe', email: 'johdoe@doe.com'},
  {id: 2, name: 'Team B', contactName: 'Richard Doe', email: 'a@a.com'},
  {id: 3, name: 'Team C', contactName: 'Chris Paul', email: 'b@b.com'},
  {id: 4, name: 'Team D', contactName: 'James Morison', email: 'c@c.com'},
];


@Component({
  selector: 'sca-manage-neighbor-teams',
  templateUrl: './manage-neighbor-teams.component.html',
  styleUrls: ['./manage-neighbor-teams.component.scss']
})
export class ManageNeighborTeamsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'contactName', 'email', 'edit'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

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
}
