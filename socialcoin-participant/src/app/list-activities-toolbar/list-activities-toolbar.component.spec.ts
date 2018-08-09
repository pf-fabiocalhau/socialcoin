import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivitiesToolbarComponent } from './list-activities-toolbar.component';

describe('ListActivitiesToolbarComponent', () => {
  let component: ListActivitiesToolbarComponent;
  let fixture: ComponentFixture<ListActivitiesToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActivitiesToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActivitiesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
