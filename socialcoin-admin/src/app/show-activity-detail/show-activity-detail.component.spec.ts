import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActivityDetailComponent } from './show-activity-detail.component';

describe('ShowActivityDetailComponent', () => {
  let component: ShowActivityDetailComponent;
  let fixture: ComponentFixture<ShowActivityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowActivityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActivityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
