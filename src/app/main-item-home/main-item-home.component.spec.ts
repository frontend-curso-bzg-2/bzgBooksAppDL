import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemHomeComponent } from './main-item-home.component';

describe('MainItemHomeComponent', () => {
  let component: MainItemHomeComponent;
  let fixture: ComponentFixture<MainItemHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
