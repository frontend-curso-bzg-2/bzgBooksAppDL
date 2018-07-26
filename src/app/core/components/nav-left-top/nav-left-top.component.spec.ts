import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftTopComponent } from './nav-left-top.component';

describe('NavLeftTopComponent', () => {
  let component: NavLeftTopComponent;
  let fixture: ComponentFixture<NavLeftTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLeftTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLeftTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
