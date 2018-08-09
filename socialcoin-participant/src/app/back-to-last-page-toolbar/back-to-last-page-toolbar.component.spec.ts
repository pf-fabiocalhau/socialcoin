import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToLastPageToolbarComponent } from './back-to-last-page-toolbar.component';

describe('BackToLastPageToolbarComponent', () => {
  let component: BackToLastPageToolbarComponent;
  let fixture: ComponentFixture<BackToLastPageToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToLastPageToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToLastPageToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
