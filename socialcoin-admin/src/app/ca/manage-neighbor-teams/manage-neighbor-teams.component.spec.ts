import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNeighborTeamsComponent } from './manage-neighbor-teams.component';

describe('ManageNeighborTeamsComponent', () => {
  let component: ManageNeighborTeamsComponent;
  let fixture: ComponentFixture<ManageNeighborTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNeighborTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNeighborTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
