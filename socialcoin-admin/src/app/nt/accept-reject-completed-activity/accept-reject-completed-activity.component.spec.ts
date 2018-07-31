import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectCompletedActivityComponent } from './accept-reject-completed-activity.component';

describe('AcceptRejectCompletedActivityComponent', () => {
  let component: AcceptRejectCompletedActivityComponent;
  let fixture: ComponentFixture<AcceptRejectCompletedActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptRejectCompletedActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptRejectCompletedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
