import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftOptionsComponent } from './nav-left-options.component';

describe('NavLeftOptionsComponent', () => {
  let component: NavLeftOptionsComponent;
  let fixture: ComponentFixture<NavLeftOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLeftOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLeftOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
