import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignActivityNeighborTeamComponent } from './assign-activity-neighbor-team.component';

describe('AssignActivityNeighborTeamComponent', () => {
  let component: AssignActivityNeighborTeamComponent;
  let fixture: ComponentFixture<AssignActivityNeighborTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignActivityNeighborTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignActivityNeighborTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
