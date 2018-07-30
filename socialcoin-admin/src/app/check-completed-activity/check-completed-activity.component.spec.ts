import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCompletedActivityComponent } from './check-completed-activity.component';

describe('CheckCompletedActivityComponent', () => {
  let component: CheckCompletedActivityComponent;
  let fixture: ComponentFixture<CheckCompletedActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCompletedActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCompletedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
