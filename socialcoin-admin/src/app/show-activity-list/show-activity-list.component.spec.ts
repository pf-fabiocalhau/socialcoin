import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActivityListComponent } from './show-activity-list.component';

describe('ShowActivityListComponent', () => {
  let component: ShowActivityListComponent;
  let fixture: ComponentFixture<ShowActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowActivityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
