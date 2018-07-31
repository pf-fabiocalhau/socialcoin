import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignParticipantNeighborTeamComponent } from './assign-participant-neighbor-team.component';

describe('AssignParticipantNeighborTeamComponent', () => {
  let component: AssignParticipantNeighborTeamComponent;
  let fixture: ComponentFixture<AssignParticipantNeighborTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignParticipantNeighborTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignParticipantNeighborTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
