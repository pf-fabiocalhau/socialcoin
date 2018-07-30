import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNeighborTeamComponent } from './register-neighbor-team.component';

describe('RegisterNeighborTeamComponent', () => {
  let component: RegisterNeighborTeamComponent;
  let fixture: ComponentFixture<RegisterNeighborTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNeighborTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNeighborTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
