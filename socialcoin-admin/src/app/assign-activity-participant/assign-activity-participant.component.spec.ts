import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignActivityParticipantComponent } from './assign-activity-participant.component';

describe('AssignActivityParticipantComponent', () => {
  let component: AssignActivityParticipantComponent;
  let fixture: ComponentFixture<AssignActivityParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignActivityParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignActivityParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
