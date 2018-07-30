import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtMenuComponent } from './nt-menu.component';

describe('NtMenuComponent', () => {
  let component: NtMenuComponent;
  let fixture: ComponentFixture<NtMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
